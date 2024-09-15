import React from 'react';

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className="border p-2 rounded w-full"
    {...props}
  />
);

export default Input;
