// components/button/SendButton.tsx
'use client'; // Add this line to mark the component as a Client Component

import React from 'react';
import { ButtonProps } from '@/types/button';

const SendButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19l9-7-9-7-9 7 9 7z"
        />
      </svg>
      Send
    </button>
  );
};

export default SendButton;
