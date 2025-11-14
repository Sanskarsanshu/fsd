import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Modal from '../Shared/Modal';

const SchemeModal = ({ scheme, onClose }) => {
  const { theme } = useTheme();

  if (!scheme) return null;

  return (
    <Modal isOpen={!!scheme} onClose={onClose} title={scheme.title} size="lg">
      <div className="space-y-5">
        {/* Description */}
        <div>
          <p className={`text-xs font-bold uppercase mb-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Description
          </p>
          <p className={`text-sm leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {scheme.details}
          </p>
        </div>

        {/* Documents */}
        <div>
          <p className={`text-xs font-bold uppercase mb-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Required Documents
          </p>
          <div className="space-y-2">
            {scheme.documents.map((doc, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 p-2.5 rounded-lg text-sm ${
                  theme === 'dark' ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-50 text-gray-700'
                }`}
              >
                <span className="text-emerald-500">✓</span>
                {doc}
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className={`rounded-lg p-4 ${
          theme === 'dark'
            ? 'bg-blue-900/20 border border-blue-500/30'
            : 'bg-blue-50 border border-blue-200'
        }`}>
          <div className="space-y-2">
            <div>
              <p className={`text-xs font-bold uppercase ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-700'
              }`}>
                Eligibility
              </p>
              <p className={`text-sm font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {scheme.eligibility}
              </p>
            </div>
            <div>
              <p className={`text-xs font-bold uppercase ${
                theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
              }`}>
                Amount
              </p>
              <p className="text-xl font-black text-emerald-600">
                {scheme.amount}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4 border-t">
          <button
            onClick={onClose}
            className={`flex-1 px-4 py-2.5 font-semibold rounded-lg text-sm ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Close
          </button>
          <a
            href={scheme.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg text-center text-sm"
          >
            Apply Now
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default SchemeModal;
