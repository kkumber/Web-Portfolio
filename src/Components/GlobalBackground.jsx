import React from 'react';

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradient Base */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Animated Blobs - Warmer and slightly more visible */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-orange/[0.05] blur-[120px] animate-blob" />
      <div className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] rounded-full bg-brand-purple/[0.04] blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[55%] h-[55%] rounded-full bg-brand-orange/[0.03] blur-[130px] animate-blob animation-delay-4000" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-15" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};

export default GlobalBackground;
