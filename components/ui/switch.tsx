// components/ui/Switch.tsx

import React from 'react';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Switch: React.FC<SwitchProps> = ({ className, ...props }) => {
  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" {...props} />
      <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 ${className}`}>
        <div className="translate-x-0.5 relative h-5 w-5 bg-white rounded-full transition peer-checked:translate-x-full"></div>
      </div>
    </label>
  );
};

export default Switch;
