import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => {
  // Adjusted widths to better accommodate the wide aspect ratio of the new logo
  const containerWidth = {
    sm: 'w-40', // Sidebar (slightly wider)
    md: 'w-56',
    lg: 'w-80', // Login/Register
    xl: 'w-96'
  };

  return (
    <div className={`flex items-center justify-center ${containerWidth[size]} select-none`}>
       <img 
         src="logo.png" 
         alt="Reto 33" 
         className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
       />
    </div>
  );
};