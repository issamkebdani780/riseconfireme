import React from 'react';

const DropDown = ({ title, items, columns = 2 }) => {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-[13px] font-bold text-slate-400 group-hover:text-primary transition-colors py-2">
        {title}
        <svg 
          className="w-4 h-4 transition-transform group-hover:rotate-180" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Card */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
        <div className={`bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800 shadow-2xl dark:shadow-none p-6 min-w-[320px] lg:min-w-[500px] grid gap-4 ${columns === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {items.map((item, index) => (
            <a 
              key={index}
              href={item.href || "#"} 
              className="flex items-start gap-4 p-3 rounded-2xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors group/item"
            >
              <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 group-hover/item:bg-white dark:group-hover/item:bg-slate-700 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors text-slate-400 dark:text-slate-500 group-hover/item:text-primary">
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="text-[13px] font-bold text-heading dark:text-white group-hover/item:text-primary transition-colors">
                  {item.title}
                </div>
                {item.description && (
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 leading-tight">
                    {item.description}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
