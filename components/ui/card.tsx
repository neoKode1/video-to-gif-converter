import React from 'react';

const Card = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="shadow-lg rounded-lg bg-white p-4" {...props}>
    {children}
  </div>
);

export default Card;
