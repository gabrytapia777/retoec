import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => {
  // Mapping sizes to tailwind width classes for the container
  const containerWidth = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
    xl: 'w-80'
  };

  // Adjusting font sizes to maintain proportion with the image container
  const textSizes = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-[13px]',
    xl: 'text-[16px]'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${containerWidth[size]} select-none`}>
       {/* 
         NOTA: El código espera que exista un archivo llamado 'logo.png' 
         en la carpeta 'public' de tu proyecto.
         Ruta esperada: /public/logo.png
       */}
       <img 
         src="/logo.png" 
         alt="Logo Reto 33" 
         className="w-full h-auto object-contain mb-1 drop-shadow-sm"
         onError={(e) => {
           // Si la imagen no carga, mostramos un mensaje sutil en consola o UI
           console.warn("Imagen /logo.png no encontrada. Asegúrate de colocarla en la carpeta public.");
           e.currentTarget.style.opacity = '0.3';
         }}
       />
       
       <span className={`font-black text-reto-navy tracking-[0.25em] ${textSizes[size]} mt-1 text-center whitespace-nowrap leading-none`} style={{ fontFamily: 'Inter, sans-serif' }}>
         RENOVACIÓN TOTAL
       </span>
    </div>
  );
};