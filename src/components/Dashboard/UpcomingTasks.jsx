import React, { useState } from 'react';

const UpcomingTasks = ({ tasks }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const priorityColors = {
    high: 'from-red-50 to-rose-50 border-red-200 hover:border-red-400',
    medium: 'from-amber-50 to-yellow-50 border-amber-200 hover:border-amber-400',
    low: 'from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-400',
  };

  const priorityLeftBorder = {
    high: 'border-red-500',
    medium: 'border-amber-500',
    low: 'border-blue-500',
  };

  const priorityGradient = {
    high: 'from-red-400 to-rose-500',
    medium: 'from-amber-400 to-yellow-500',
    low: 'from-blue-400 to-cyan-500',
  };

  const toggleComplete = (index) => {
    setCompletedTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 animate-slideUp overflow-hidden relative group" style={{ animationDelay: '0.3s' }}>
      {/* Background Decoration */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-200/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-teal-200/10 rounded-full blur-3xl animate-float-slow"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Upcoming Tasks
            </h2>
            <p className="text-sm text-gray-600 font-semibold mt-1">{tasks.length} tasks to complete</p>
          </div>
          <div className="text-5xl animate-bounce-in">📋</div>
        </div>

        {/* Tasks List */}
        <div className="space-y-3 mb-6">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`group/task relative overflow-hidden`}
              style={{
                animation: `slideUp 0.5s ease-out ${0.1 * index}s both`,
              }}
            >
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${priorityGradient[task.priority]} opacity-0 group-hover/task:opacity-5 transition-all duration-300 rounded-2xl`}
              ></div>

              {/* Card */}
              <div
                className={`relative border-l-4 ${priorityLeftBorder[task.priority]} bg-gradient-to-r ${priorityColors[task.priority]} p-5 rounded-2xl transition-all duration-300 transform hover:scale-102 hover:shadow-lg cursor-pointer border-r-2 border-t-2 border-b-2`}
              >
                <div className="flex items-start justify-between">
                  {/* Left Content */}
                  <div className="flex-1 flex gap-4">
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleComplete(index)}
                      className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 transition-all transform hover:scale-110 ${
                        completedTasks.includes(index)
                          ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 border-emerald-600'
                          : 'border-gray-400 bg-white hover:border-emerald-500'
                      } flex items-center justify-center text-white font-bold`}
                    >
                      {completedTasks.includes(index) && '✓'}
                    </button>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl animate-float" style={{ animationDelay: `${0.2 * index}s` }}>
                          {task.icon}
                        </span>
                        <p
                          className={`font-bold text-lg transition-all ${
                            completedTasks.includes(index)
                              ? 'line-through text-gray-500'
                              : 'text-gray-900'
                          }`}
                        >
                          {task.task}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 font-semibold flex items-center gap-2">
                        <span>🕐</span> {task.time}
                      </p>
                    </div>
                  </div>

                  {/* Priority Indicator */}
                  <div className="flex-shrink-0 text-2xl animate-heartbeat ml-2">
                    {task.priority === 'high' && '🔴'}
                    {task.priority === 'medium' && '🟠'}
                    {task.priority === 'low' && '🔵'}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 h-1 bg-gray-300/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-500 animate-pulse-glow"
                    style={{ width: completedTasks.includes(index) ? '100%' : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Task Button */}
        <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg group">
          <span className="text-2xl group-hover:animate-spin">➕</span>
          Add New Task
        </button>

        {/* Completion Stats */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border-2 border-emerald-200">
            <p className="text-xs text-emerald-700 font-bold uppercase mb-1">Completed</p>
            <p className="text-2xl font-black text-emerald-600">{completedTasks.length}/{tasks.length}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
            <p className="text-xs text-blue-700 font-bold uppercase mb-1">Completion Rate</p>
            <p className="text-2xl font-black text-blue-600">
              {tasks.length > 0 ? Math.round((completedTasks.length / tasks.length) * 100) : 0}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTasks;
