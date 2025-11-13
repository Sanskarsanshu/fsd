// import Message from '../models/Message.js';
// import User from '../models/User.js';
// import Alert from '../models/Alert.js';
// import axios from 'axios';
// import { send } from 'vite';

// const ML_API_URL = process.env.ML_API_URL || 'http://localhost:8000';
// const userSockets = new Map();

// function generateConversationId(userId1, userId2) {
//   const sortedIds = [userId1, userId2].sort();
//   return `${sortedIds[0]}-${sortedIds[1]}`;
// }

// async function detectCyberbullying(conversationId, messageText) {
//   try {
//     console.log(`\n📤 Sending to ML API`);
//     console.log(`   conversation_id: ${conversationId}`);
//     console.log(`   text: ${messageText}`);

//     const response = await axios.post(
//       `${ML_API_URL}/analyze-conversation`,
//       {
//         conversation_id: conversationId,
//         text: messageText
//       },
//       { timeout: 10000 }
//     );

//     // console.log(` ML API Response:`, response.data);
//     return response.data;

//   } catch (error) {
//     // console.error(' ML API Error:', error.message);
//     return null;
//   }
// }

// export const setupSocketHandlers = (io) => {
//   io.on('connection', (socket) => {
//     // console.log(' User connected:', socket.id);

//     socket.on('user:join', async (userId) => {
//       try {
//         socket.userId = userId;
//         userSockets.set(userId, socket.id);

//         await User.findByIdAndUpdate(userId, {
//           isOnline: true,
//           lastSeen: Date.now()
//         });

//         socket.broadcast.emit('user:online', { userId, isOnline: true });
//         // console.log(` User ${userId} joined`);
//       } catch (error) {
//         // console.error(' User join error:', error);
//       }
//     });

//     socket.on('conversation:join', ({ userId, otherUserId }) => {
//       const roomId = [userId, otherUserId].sort().join('-');
//       socket.join(roomId);
//     });

//     socket.on('group:join', ({ groupId }) => {
//       socket.join(`group-${groupId}`);
//     });

//     //  MESSAGE SEND - ORIGINAL LOGIC + ML API CALL
//     socket.on('message:send', async (data) => {
//       try {
//         const { sender, recipient, content, messageType, fileUrl, fileName, fileSize, replyTo } = data;

//         console.log(`\n📨 message:send received`);
//         console.log(`   sender: ${sender}`);
//         console.log(`   recipient: ${recipient}`);
//         console.log(`   content: ${content}`);

//         // STEP 1: Save message to DB (ORIGINAL)
//         const message = await Message.create({
//           sender,
//           recipient,
//           content,
//           messageType: messageType || 'text',
//           fileUrl,
//           fileName,
//           fileSize,
//           replyTo
//         });

//         await message.populate('sender', 'username avatar');
//         if (replyTo) {
//           await message.populate('replyTo', 'content sender');
//         }

//         // STEP 2: Emit to chat room (ORIGINAL)
//         const roomId = [sender, recipient].sort().join('-');
//         io.to(roomId).emit('message:receive', message);
//         // console.log(` Message saved & emitted: ${message._id}`);

//         // STEP 3: Send notification (ORIGINAL)
//         const recipientSocketId = userSockets.get(recipient);
//         if (recipientSocketId) {
//           io.to(recipientSocketId).emit('notification:new', {
//             type: 'message',
//             from: sender,
//             message: content,
//             timestamp: Date.now()
//           });
//         }

//         //  STEP 4: SEND TO ML API FOR CYBERBULLYING DETECTION
//         console.log(`\n🔍 Sending to ML API for analysis...`);
//         const conversationId = generateConversationId(sender, recipient);

//         const mlResult = await detectCyberbullying(conversationId, content);

//         if (!mlResult) {
//           console.log(` ML API failed, skipping detection`);
//           return;
//         }

//         console.log(`\n📊 ML Result:`);
//         console.log(`   is_bullying: ${mlResult.is_bullying}`);
//         console.log(`   confidence: ${mlResult.confidence_score}`);
//         console.log(`   alert_triggered: ${mlResult.alert_triggered}`);

//         //  STEP 5: CREATE ALERT IF TRIGGERED
//         if (mlResult.alert_triggered) {
//           console.log(`\n🚨 ALERT TRIGGERED! Creating alert in DB...`);

//           const alert = await Alert.create({
//             conversationId: conversationId,
//             victim: recipient,
//             bully: sender,
//             messageContent: content,
//             bullyingType: 'general_harassment',
//             confidence: mlResult.confidence_score,
//             severity: mlResult.confidence_score > 0.95 ? 'critical' : 'high',
//             status: 'pending'
//           });

//           await alert.populate([
//             { path: 'victim', select: 'username email avatar' },
//             { path: 'bully', select: 'username email avatar' }
//           ]);

//           // console.log(` Alert created: ${alert._id}`);
//           // console.log(`   Victim: ${alert.victim?.username}`);
//           // console.log(`   Bully: ${alert.bully?.username}`);

//           //  STEP 6: EMIT TO PARENT DASHBOARD
//           io.to('parent-dashboard').emit('alert:new', {
//             alert: alert,
//             conversationId: conversationId,
//             timestamp: new Date()
//           });

//           console.log(` Alert emitted to parent dashboard\n`);
//         }

//       } catch (error) {
//         console.error(' Send message error:', error);
//       }
//     });

//     socket.on('group:message:send', async (data) => {
//       try {
//         const { sender, group, content, messageType, fileUrl, fileName, fileSize, replyTo } = data;

//         const message = await Message.create({
//           sender,
//           group,
//           content,
//           messageType: messageType || 'text',
//           fileUrl,
//           fileName,
//           fileSize,
//           replyTo
//         });

//         await message.populate('sender', 'username avatar');
//         if (replyTo) {
//           await message.populate('replyTo', 'content sender');
//         }

//         io.to(`group-${group}`).emit('group:message:receive', message);
//       } catch (error) {
//         console.error('Send group message error:', error);
//       }
//     });

//     socket.on('typing:start', ({ userId, otherUserId }) => {
//       const recipientSocketId = userSockets.get(otherUserId);
//       if (recipientSocketId) {
//         io.to(recipientSocketId).emit('typing:user', { userId, isTyping: true });
//       }
//     });

//     socket.on('typing:stop', ({ userId, otherUserId }) => {
//       const recipientSocketId = userSockets.get(otherUserId);
//       if (recipientSocketId) {
//         io.to(recipientSocketId).emit('typing:user', { userId, isTyping: false });
//       }
//     });

//     socket.on('group:typing:start', ({ userId, groupId, username }) => {
//       socket.to(`group-${groupId}`).emit('group:typing:user', { userId, username, isTyping: true });
//     });

//     socket.on('group:typing:stop', ({ userId, groupId }) => {
//       socket.to(`group-${groupId}`).emit('group:typing:user', { userId, isTyping: false });
//     });

//     socket.on('message:read', async ({ messageId, userId }) => {
//       try {
//         const message = await Message.findById(messageId);
//         if (message && message.recipient.toString() === userId) {
//           message.isRead = true;
//           await message.save();

//           const senderSocketId = userSockets.get(message.sender.toString());
//           if (senderSocketId) {
//             io.to(senderSocketId).emit('message:read:confirm', { messageId });
//           }
//         }
//       } catch (error) {
//         console.error('Mark as read error:', error);
//       }
//     });

//     socket.on('join:parent-dashboard', () => {
//       socket.join('parent-dashboard');
//       console.log('👨‍👩‍👧 Parent joined dashboard');
//     });

//     socket.on('call:initiate', ({ callerId, receiverId, callerName }) => {

//       console.log(`\n📞 Call initiated: ${callerName} → ${receiverId}`);

//       const receiverSocketId = userSockets.get(receiverId);
//       if (receiverId) {
//         io.to(receiverSocketId).emit('call:incoming', {
//           callerId,
//           callerName,
//           callType: "audio"
//         })
//         console.log("call notification sent to receiver");
//       }
//       else {
//         socket.emit("call user-offline", { receiverId });
//         console.log("receiver offline");
//       }
//     });
//     socket.on('call accept', ({ callerId, receiverId }) => {
//       console.log(`\n✅ Call accepted by ${receiverId}`);
//       const callerSocketId = userSockets.get(callerId);
//       if (callerSocketId) {
//         io.to(callerSocketId).emit('call:accepted', { receiverId });
//         console.log('acceptance sent to caller')
//       }
//     })

//     socket.on('call:reject', ({ callerId, receiverId }) => {
//       console.log(`\n❌ Call rejected by ${receiverId}`);
//       const callerSocketId = userSockets.get(callerId);
//       if (callerSocketId) {
//         io.to(callerSocketId).emit('call:rejected', { receiverId });
//         console.log(`✅ Rejection sent to caller`);
//       }
//     })
//     socket.on('call:end', ({ callerId, receiverId }) => {
//       console.log(`\n📴 Call ended`);

//       const otherUserId = socket.userId === callerId ? receiverId : callerId;
//       const otherSocketId = userSockets.get(otherUserId);

//       if (otherSocketId) {
//         io.to(otherSocketId).emit('call:ended');
//         console.log(`✅ End notification sent`);
//       }
//     });

//     socket.on('webrtc:answer',({answer,callerId})=>{
//       console.log(`\n🔄 WebRTC answer sent to ${callerId}`);
//       const callerSocketId=userSockets.get(callerId);
//       if(callerSocketId){
//         io.to(callerSocketId).emit('webrtc:answer',{
//           answer,
//           receiverId:socket.userId
//         })
//       }
//     })

//     socket.on('webrtc:ice-candidate',({candidate,targetUserId})=>{
//       const targetSocketId=userSockets.get(targetUserId);
//       if(targetSocketId){
//         io.to(targetSocketId).emit('webrtc:ice-candidate',{
//           candidate,
//           senderId:socket.userId
//         })
//       }
//     })

//     socket.on('disconnect', async () => {
//       try {
//         const userId = socket.userId;
//         if (userId) {
//           userSockets.delete(userId);
//           await User.findByIdAndUpdate(userId, {
//             isOnline: false,
//             lastSeen: Date.now()
//           });
//           socket.broadcast.emit('user:offline', { userId, isOnline: false });
//           console.log(` User ${userId} disconnected`);
//         }
//       } catch (error) {
//         console.error('Disconnect error:', error);
//       }
//     });
//   });
// };

import Message from '../models/Message.js';
import User from '../models/User.js';
import Alert from '../models/Alert.js';
import axios from 'axios';

const ML_API_URL = process.env.ML_API_URL || 'http://localhost:8000';
const userSockets = new Map();

function generateConversationId(userId1, userId2) {
  const sortedIds = [userId1, userId2].sort();
  return `${sortedIds[0]}-${sortedIds[1]}`;
}

function generateGroupConversationId(groupId, userId) {
  return `group-${groupId}-${userId}`;
}

async function detectCyberbullying(conversationId, messageText) {
  try {
    console.log(`\n📤 Sending to ML API`);
    console.log(`   conversation_id: ${conversationId}`);
    console.log(`   text: ${messageText}`);

    const response = await axios.post(
      `${ML_API_URL}/analyze-conversation`,
      {
        conversation_id: conversationId,
        text: messageText
      },
      { timeout: 10000 }
    );

    console.log(`✅ ML API Response:`, response.data);
    return response.data;

  } catch (error) {
    console.error('❌ ML API Error:', error.message);
    return null;
  }
}

export const setupSocketHandlers = (io) => {
  io.on('connection', (socket) => {
    console.log('✅ User connected:', socket.id);

    socket.on('user:join', async (userId) => {
      try {
        socket.userId = userId;
        userSockets.set(userId, socket.id);

        await User.findByIdAndUpdate(userId, {
          isOnline: true,
          lastSeen: Date.now()
        });

        socket.broadcast.emit('user:online', { userId, isOnline: true });
        console.log(`✅ User ${userId} joined`);
      } catch (error) {
        console.error('❌ User join error:', error);
      }
    });

    socket.on('conversation:join', ({ userId, otherUserId }) => {
      const roomId = [userId, otherUserId].sort().join('-');
      socket.join(roomId);
      console.log(`📍 User ${userId} joined room: ${roomId}`);
    });

    socket.on('group:join', ({ groupId }) => {
      socket.join(`group-${groupId}`);
      console.log(`📍 User joined group room: group-${groupId}`);
    });

    // 📨 MESSAGE SEND - ORIGINAL LOGIC + ML API CALL
    socket.on('message:send', async (data) => {
      try {
        const { sender, recipient, content, messageType, fileUrl, fileName, fileSize, replyTo } = data;

        console.log(`\n📨 message:send received`);
        console.log(`   sender: ${sender}`);
        console.log(`   recipient: ${recipient}`);
        console.log(`   content: ${content}`);

        // STEP 1: Save message to DB
        const message = await Message.create({
          sender,
          recipient,
          content,
          messageType: messageType || 'text',
          fileUrl,
          fileName,
          fileSize,
          replyTo
        });

        await message.populate('sender', 'username avatar');
        if (replyTo) {
          await message.populate('replyTo', 'content sender');
        }

        // STEP 2: Emit to chat room
        const roomId = [sender, recipient].sort().join('-');
        io.to(roomId).emit('message:receive', message);
        console.log(`✅ Message saved & emitted: ${message._id}`);

        // STEP 3: Send notification
        const recipientSocketId = userSockets.get(recipient);
        if (recipientSocketId) {
          io.to(recipientSocketId).emit('notification:new', {
            type: 'message',
            from: sender,
            message: content,
            timestamp: Date.now()
          });
        }

        // 🔥 STEP 4: SEND TO ML API FOR CYBERBULLYING DETECTION
        console.log(`\n🔍 Sending to ML API for analysis...`);
        const conversationId = generateConversationId(sender, recipient);

        const mlResult = await detectCyberbullying(conversationId, content);

        if (!mlResult) {
          console.log(`⚠️ ML API failed, skipping detection`);
          return;
        }

        console.log(`\n📊 ML Result:`);
        console.log(`   is_bullying: ${mlResult.is_bullying}`);
        console.log(`   confidence: ${mlResult.confidence_score}`);
        console.log(`   alert_triggered: ${mlResult.alert_triggered}`);

        // 🔥 STEP 5: CREATE ALERT IF TRIGGERED
        if (mlResult.alert_triggered === true) { // ✅ FIXED: Explicit true check
          console.log(`\n🚨 ALERT TRIGGERED! Creating alert in DB...`);

          try {
            const alert = await Alert.create({
              conversationId: conversationId,
              victim: recipient,
              bully: sender,
              messageContent: content,
              bullyingType: 'general_harassment',
              confidence: mlResult.confidence_score,
              severity: mlResult.confidence_score > 0.95 ? 'critical' : 'high',
              status: 'pending'
            });

            await alert.populate([
              { path: 'victim', select: 'username email avatar' },
              { path: 'bully', select: 'username email avatar' }
            ]);

            console.log(`✅ Alert created: ${alert._id}`);
            console.log(`   Victim: ${alert.victim?.username}`);
            console.log(`   Bully: ${alert.bully?.username}`);

            // 🔥 STEP 6: EMIT TO PARENT DASHBOARD
            io.to('parent-dashboard').emit('alert:new', {
              alert: alert,
              conversationId: conversationId,
              timestamp: new Date()
            });

            console.log(`✅ Alert emitted to parent dashboard\n`);
          } catch (dbError) {
            console.error('❌ Error creating alert:', dbError);
          }
        }

      } catch (error) {
        console.error('❌ Send message error:', error);
      }
    });

    // 📨 GROUP MESSAGE SEND
    socket.on('group:message:send', async (data) => {
      try {
        const { sender, group, content, messageType, fileUrl, fileName, fileSize, replyTo } = data;

        console.log(`\n📨 group:message:send received`);
        console.log(`   sender: ${sender}`);
        console.log(`   group: ${group}`);
        console.log(`   content: ${content}`);

        const message = await Message.create({
          sender,
          group,
          content,
          messageType: messageType || 'text',
          fileUrl,
          fileName,
          fileSize,
          replyTo
        });

        await message.populate('sender', 'username avatar');
        if (replyTo) {
          await message.populate('replyTo', 'content sender');
        }

        io.to(`group-${group}`).emit('group:message:receive', message);
        console.log(`✅ Group message saved & emitted: ${message._id}`);

        // 🔥 SEND TO ML API FOR GROUP CHAT TOO
        console.log(`\n🔍 Sending group message to ML API...`);
        const groupConversationId = generateGroupConversationId(group, sender);

        const mlResult = await detectCyberbullying(groupConversationId, content);

        if (!mlResult) {
          console.log(`⚠️ ML API failed for group, skipping detection`);
          return;
        }

        console.log(`\n📊 ML Result (Group):`);
        console.log(`   is_bullying: ${mlResult.is_bullying}`);
        console.log(`   confidence: ${mlResult.confidence_score}`);
        console.log(`   alert_triggered: ${mlResult.alert_triggered}`);

        // 🔥 CREATE ALERT FOR GROUP BULLYING
        if (mlResult.alert_triggered === true) {
          console.log(`\n🚨 GROUP BULLYING ALERT TRIGGERED!`);

          try {
            const alert = await Alert.create({
              conversationId: groupConversationId,
              victim: group,
              bully: sender,
              messageContent: content,
              bullyingType: 'general_harassment',
              confidence: mlResult.confidence_score,
              severity: mlResult.confidence_score > 0.95 ? 'critical' : 'high',
              status: 'pending'
            });

            await alert.populate([
              { path: 'bully', select: 'username email avatar' }
            ]);

            console.log(`✅ Group alert created: ${alert._id}`);

            io.to('parent-dashboard').emit('alert:new', {
              alert: alert,
              conversationId: groupConversationId,
              timestamp: new Date(),
              isGroupAlert: true
            });

            console.log(`✅ Group alert emitted to parent dashboard\n`);
          } catch (dbError) {
            console.error('❌ Error creating group alert:', dbError);
          }
        }

      } catch (error) {
        console.error('❌ Send group message error:', error);
      }
    });

    // ⌨️ TYPING INDICATORS
    socket.on('typing:start', ({ userId, otherUserId }) => {
      const recipientSocketId = userSockets.get(otherUserId);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('typing:user', { userId, isTyping: true });
      }
    });

    socket.on('typing:stop', ({ userId, otherUserId }) => {
      const recipientSocketId = userSockets.get(otherUserId);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('typing:user', { userId, isTyping: false });
      }
    });

    socket.on('group:typing:start', ({ userId, groupId, username }) => {
      socket.to(`group-${groupId}`).emit('group:typing:user', { userId, username, isTyping: true });
    });

    socket.on('group:typing:stop', ({ userId, groupId }) => {
      socket.to(`group-${groupId}`).emit('group:typing:user', { userId, isTyping: false });
    });

    // 📖 MARK AS READ
    socket.on('message:read', async ({ messageId, userId }) => {
      try {
        const message = await Message.findById(messageId);
        if (message && message.recipient.toString() === userId) {
          message.isRead = true;
          await message.save();

          const senderSocketId = userSockets.get(message.sender.toString());
          if (senderSocketId) {
            io.to(senderSocketId).emit('message:read:confirm', { messageId });
          }
        }
      } catch (error) {
        console.error('❌ Mark as read error:', error);
      }
    });

    // 👨‍👩‍👧 PARENT DASHBOARD
    socket.on('join:parent-dashboard', () => {
      socket.join('parent-dashboard');
      console.log('👨‍👩‍👧 Parent joined dashboard');
    });

    // 📞 AUDIO CALL HANDLERS
    socket.on('call:initiate', ({ callerId, receiverId, callerName }) => {
      console.log(`\n📞 Call initiated: ${callerName} → ${receiverId}`);

      const receiverSocketId = userSockets.get(receiverId);
      
      if (receiverSocketId) { // ✅ FIXED: was "if (receiverId)" - wrong condition
        io.to(receiverSocketId).emit('call:incoming', {
          callerId,
          callerName,
          callType: 'audio'
        });
        console.log('✅ Call notification sent to receiver');
      } else {
        socket.emit('call:user-offline', { receiverId }); // ✅ FIXED: was "call user-offline"
        console.log('❌ Receiver offline');
      }
    });

    socket.on('call:accept', ({ callerId, receiverId }) => { // ✅ FIXED: was "call accept"
      console.log(`\n✅ Call accepted by ${receiverId}`);
      
      const callerSocketId = userSockets.get(callerId);
      
      if (callerSocketId) {
        io.to(callerSocketId).emit('call:accepted', { receiverId });
        console.log('✅ Acceptance sent to caller');
      }
    });

    socket.on('call:reject', ({ callerId, receiverId }) => {
      console.log(`\n❌ Call rejected by ${receiverId}`);
      
      const callerSocketId = userSockets.get(callerId);
      
      if (callerSocketId) {
        io.to(callerSocketId).emit('call:rejected', { receiverId });
        console.log('✅ Rejection sent to caller');
      }
    });

    socket.on('call:end', ({ callerId, receiverId }) => {
      console.log(`\n📴 Call ended`);

      const otherUserId = socket.userId === callerId ? receiverId : callerId;
      const otherSocketId = userSockets.get(otherUserId);

      if (otherSocketId) {
        io.to(otherSocketId).emit('call:ended');
        console.log(`✅ End notification sent`);
      }
    });

    // 🔄 WEBRTC SIGNALING
    socket.on('webrtc:offer', ({ offer, receiverId }) => { // ✅ ADDED: Missing offer handler
      console.log(`\n🔄 WebRTC offer sent to ${receiverId}`);

      const receiverSocketId = userSockets.get(receiverId);

      if (receiverSocketId) {
        io.to(receiverSocketId).emit('webrtc:offer', {
          offer,
          callerId: socket.userId
        });
      }
    });

    socket.on('webrtc:answer', ({ answer, callerId }) => {
      console.log(`\n🔄 WebRTC answer sent to ${callerId}`);
      
      const callerSocketId = userSockets.get(callerId);
      
      if (callerSocketId) {
        io.to(callerSocketId).emit('webrtc:answer', {
          answer,
          receiverId: socket.userId
        });
      }
    });

    socket.on('webrtc:ice-candidate', ({ candidate, targetUserId }) => {
      const targetSocketId = userSockets.get(targetUserId);
      
      if (targetSocketId) {
        io.to(targetSocketId).emit('webrtc:ice-candidate', {
          candidate,
          senderId: socket.userId
        });
      }
    });

    // 🔌 DISCONNECT
    socket.on('disconnect', async () => {
      try {
        const userId = socket.userId;
        
        if (userId) {
          userSockets.delete(userId);
          
          await User.findByIdAndUpdate(userId, {
            isOnline: false,
            lastSeen: Date.now()
          });
          
          socket.broadcast.emit('user:offline', { userId, isOnline: false });
          console.log(`❌ User ${userId} disconnected`);
        }
      } catch (error) {
        console.error('❌ Disconnect error:', error);
      }
    });
  });
};
