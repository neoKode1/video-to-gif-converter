// components/ui/CardDescription.tsx

import React from 'react';

interface CardDescriptionProps {
  children: React.ReactNode;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return <p className="text-gray-600">{children}</p>;
};

export default CardDescription;
