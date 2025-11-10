import React from 'react';

const SchemeCard = ({ scheme, index, onLearnMore }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{scheme.title}</h3>
        <p className="text-emerald-50 text-sm">{scheme.description}</p>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-xs text-gray-600 font-semibold mb-1">Eligibility</p>
          <p className="text-gray-900 font-medium">{scheme.eligibility}</p>
        </div>

        <div>
          <p className="text-xs text-gray-600 font-semibold mb-1">Amount</p>
          <p className="text-2xl font-bold text-emerald-600">{scheme.amount}</p>
        </div>

        <button
          onClick={onLearnMore}
          className="w-full py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SchemeCard;
