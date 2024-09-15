// components/ui/TabsContent.tsx

import React from 'react';

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
}

const TabsContent: React.FC<TabsContentProps> = ({ children, value }) => {
  return (
    <div className={`hidden p-4 ${value === 'default' ? 'block' : ''}`}>
      {children}
    </div>
  );
};

export default TabsContent;
