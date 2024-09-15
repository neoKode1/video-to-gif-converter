// components/ui/Tabs.tsx

import React from 'react';

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default Tabs;
