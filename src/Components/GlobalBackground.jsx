import React from 'react';

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
      {/* Soft Airy Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-indigo-500/[0.03] blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-sky-500/[0.03] blur-[100px]" />
      
      {/* Ultra-subtle Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      
      {/* Light Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-[0.4]" />
    </div>
  );
};

export default GlobalBackground;
