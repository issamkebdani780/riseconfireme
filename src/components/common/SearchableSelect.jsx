import React, { useState, useRef, useEffect } from 'react';

const SearchableSelect = ({ options, value, onChange, placeholder, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(opt =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative" ref={containerRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:border-primary/30 transition-all min-w-[140px]"
      >
        <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className={`text-xs font-bold truncate ${!selectedOption ? 'text-slate-400' : 'text-heading dark:text-slate-200'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
      </div>

      {isOpen && (
        <div className="absolute z-[100] mt-2 w-full min-w-[200px] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 border-b border-slate-50 dark:border-slate-700">
            <input
              autoFocus
              type="text"
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-700 border-none rounded-lg focus:ring-1 focus:ring-primary outline-none text-heading dark:text-white"
              placeholder={t('Rechercher...')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="max-h-[200px] overflow-y-auto p-1 custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={`px-3 py-2 text-xs rounded-lg cursor-pointer transition-colors ${value === option.value
                    ? 'bg-primary/10 text-primary font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="px-3 py-4 text-center text-xs text-slate-400 italic">
                {t('Aucun résultat')}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
