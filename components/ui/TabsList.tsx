// components/ui/TabsList.tsx

import React from 'react';

interface TabsListProps {
  children: React.ReactNode;
}

const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return <div className="flex space-x-4">{children}</div>;
};

export default TabsList;
