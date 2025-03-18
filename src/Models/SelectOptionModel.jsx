import React from "react";

const SelectOptionModel = ({ type, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-40 z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-2xl  relative">
        <div className="flex flex-col items-center text-center">
          <p className="text-gray-800 text-lg mb-4">
            Please select a <strong>{type}</strong> before continuing.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectOptionModel;
