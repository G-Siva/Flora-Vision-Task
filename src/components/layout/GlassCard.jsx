import React from 'react'

const GlassCard = ({ children, className = '', clipped = false }) => {
  const clipPathStyle = clipped
    ? {
        clipPath: 'polygon(0% 0%, 50% 5.49%, 100% 0%, 100% 100%, 0% 100%)',
      }
    : {}

  return (
    <div className={`relative max-w-auto mx-auto`}>
      <div
        className={`relative rounded-3xl bg-white/4 border border-white/20 overflow-hidden backdrop-blur-lg shadow-lg p-6 ${className}`}
        style={clipPathStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
