import React from 'react';

const Logo = ({ 
  iconClassName = "w-8 h-8", 
  textClassName = "text-xl font-bold text-heading tracking-tight",
  showText = true,
  className = "flex items-center gap-2 shrink-0 cursor-pointer"
}) => {
  return (
    <div className={className}>
      <img 
        src="/ecosystem/RiseConfirm.jpg" 
        alt="RiseConfirm Logo" 
        className={`${iconClassName} object-cover rounded-[8px]`} 
      />
      {showText && <span className={textClassName}>RiseConfirm</span>}
    </div>
  );
};

export default Logo;
