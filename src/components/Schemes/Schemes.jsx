import React, { useState } from 'react';
import { MOCK_DATA } from '../../data/mockData';
import SchemeCard from './SchemeCard';
import SchemeModal from './SchemeModal';

const Schemes = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Government Schemes</h1>
        <p className="text-emerald-50">Access government subsidies and support programs for farmers</p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
          <p className="text-2xl mb-2">💡</p>
          <p className="font-semibold text-gray-900 mb-1">Easy Application</p>
          <p className="text-gray-600 text-sm">Simple application process for all government schemes</p>
        </div>
        <div className="bg-emerald-50 rounded-2xl p-6 border-l-4 border-emerald-500">
          <p className="text-2xl mb-2">💰</p>
          <p className="font-semibold text-gray-900 mb-1">Direct Benefits</p>
          <p className="text-gray-600 text-sm">Money directly transferred to your bank account</p>
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_DATA.schemes.map((scheme, index) => (
          <SchemeCard
            key={scheme.id}
            scheme={scheme}
            index={index}
            onLearnMore={() => setSelectedScheme(scheme)}
          />
        ))}
      </div>

      {/* Modal */}
      <SchemeModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
      />
    </div>
  );
};

export default Schemes;
