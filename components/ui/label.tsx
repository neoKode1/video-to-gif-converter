import React from 'react';

const Label = ({ children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    className="block text-gray-700 font-medium mb-2"
    {...props}
  >
    {children}
  </label>
);

export default Label;
