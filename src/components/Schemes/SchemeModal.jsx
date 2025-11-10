import React from 'react';
import Modal from '../Shared/Modal';

const SchemeModal = ({ scheme, onClose }) => {
  if (!scheme) return null;

  return (
    <Modal isOpen={!!scheme} onClose={onClose} title={scheme.title} size="lg">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-600 font-semibold mb-2">Description</p>
          <p className="text-gray-700">{scheme.details}</p>
        </div>

        <div>
          <p className="text-sm text-gray-600 font-semibold mb-3">Required Documents</p>
          <ul className="space-y-2">
            {scheme.documents.map((doc, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <span className="text-emerald-500">✓</span>
                {doc}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-sm text-gray-600 font-semibold mb-2">Eligibility: {scheme.eligibility}</p>
          <p className="text-lg font-bold text-emerald-600">{scheme.amount}</p>
        </div>

        <div className="flex gap-4 pt-4 border-t">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
          <a
            href={scheme.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors text-center"
          >
            Apply Now
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default SchemeModal;
