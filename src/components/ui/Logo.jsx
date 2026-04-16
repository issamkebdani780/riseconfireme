import React from 'react';

const Logo = ({ 
  iconClassName = "w-8 h-8", 
  textClassName = "text-xl font-bold text-heading tracking-tight",
  showText = true,
  className = "flex items-center gap-2 shrink-0 cursor-pointer"
}) => {
  return (
    <div className={className}>
      <svg className={iconClassName} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gradient Background */}
        <rect width="100" height="100" rx="22" fill="url(#logo_gradient)"/>
        
        {/* Confirmation Checkmark */}
        <path d="M 30 50 L 45 65 L 75 35" stroke="#0B1A28" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
        
        <defs>
          <linearGradient id="logo_gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1DC8F2"/>
            <stop offset="1" stopColor="#0B79F2"/>
          </linearGradient>
        </defs>
      </svg>
      {showText && <span className={textClassName}>RiseConfirm</span>}
    </div>
  );
};

export default Logo;
