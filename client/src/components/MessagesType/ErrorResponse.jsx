import React from 'react';

export default function ErrorResponse({ errorMessage }) {
  return (
    <div className="flex justify-center mb-2">
      <div className="bg-red-500 text-white rounded-lg p-3 max-w-md">
        <p className="text-sm text-center">
          {errorMessage}
        </p>
      </div>
    </div>
  );
}
