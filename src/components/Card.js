import React from 'react';

const Card = ({ children }) => (
  <div className="container flex flex-row h-4/5 w-4/5 bg-light-green box-border m-auto shadow-2xl">
    {children}
  </div>
)

export { Card }
