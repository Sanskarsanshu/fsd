import React from 'react';

const BuyerCard = ({ buyer, index }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-6 text-white">
        <div className="text-4xl mb-2">{buyer.image}</div>
        <h3 className="text-2xl font-bold">{buyer.name}</h3>
        <p className="text-white/80 text-sm mt-1">📍 {buyer.location}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-lg">⭐</span>
          <span className="font-bold text-gray-900">{buyer.rating}</span>
          <span className="text-gray-600 text-sm">({buyer.deals} deals)</span>
        </div>

        {/* Interested In */}
        <div>
          <p className="text-sm text-gray-600 font-semibold mb-2">Interested In:</p>
          <div className="flex flex-wrap gap-2">
            {buyer.interestedIn.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <button className="w-full py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors mt-4">
          Contact Buyer
        </button>
      </div>
    </div>
  );
};

export default BuyerCard;
