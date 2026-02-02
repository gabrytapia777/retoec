import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => {
  // Mapping sizes to tailwind width classes for the container
  const containerWidth = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
    xl: 'w-80'
  };

  return (
    <div className={`flex items-center justify-center ${containerWidth[size]} select-none`}>
       {/* 
         Muestra exclusivamente el archivo logo.png.
         Si la imagen falla, muestra un texto de respaldo.
       */}
       <img 
         src="logo.png" 
         alt="Reto 33 - Renovación Total" 
         className="w-full h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
         onError={(e) => {
           // Fallback visual por si la imagen no carga
           e.currentTarget.style.display = 'none';
           const fallback = document.createElement('div');
           fallback.className = "text-center";
           fallback.innerHTML = '<span class="font-black text-reto-navy text-2xl block">RETO 33</span><span class="text-xs text-reto-pink tracking-widest uppercase">Renovación Total</span>';
           e.currentTarget.parentNode?.appendChild(fallback);
         }}
       />
    </div>
  );
};