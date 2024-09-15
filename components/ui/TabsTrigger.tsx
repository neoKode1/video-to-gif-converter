// components/ui/TabsTrigger.tsx

import React from 'react';

interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, value }) => {
  return (
    <button
      className={`px-4 py-2 font-medium text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      onClick={() => {
        // Handle tab change logic here
      }}
      data-value={value}
    >
      {children}
    </button>
  );
};

export default TabsTrigger;
