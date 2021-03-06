import React from 'react';

const Button = ({ onClick, children, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className="w-full bg-red-100 text-white rounded-lg text-sm py-3 px-16  my-6 focus:outline-none"
    >
      {children}
    </button>
  );
};

export default Button;
