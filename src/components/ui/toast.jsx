import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const ToastItem = ({ toast, onRemove }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    // Small delay to allow CSS transition to play on mount
    requestAnimationFrame(() => setIsShowing(true));
  }, []);

  const handleRemove = () => {
    setIsShowing(false);
    setTimeout(onRemove, 300); // Wait for transition before unmounting
  };

  const types = {
    success: {
      bg: 'bg-emerald-50/90 dark:bg-emerald-900/30',
      border: 'border-emerald-200/50 dark:border-emerald-800/50',
      text: 'text-emerald-800 dark:text-emerald-300',
      icon: (
        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800/50 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )
    },
    error: {
      bg: 'bg-red-50/90 dark:bg-red-900/30',
      border: 'border-red-200/50 dark:border-red-800/50',
      text: 'text-red-800 dark:text-red-300',
      icon: (
        <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-800/50 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      )
    },
    info: {
      bg: 'bg-blue-50/90 dark:bg-blue-900/30',
      border: 'border-blue-200/50 dark:border-blue-800/50',
      text: 'text-blue-800 dark:text-blue-300',
      icon: (
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    }
  };

  const style = types[toast.type] || types.info;

  return (
    <div 
      className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-xl shadow-lg transition-all duration-300 ease-out transform ${isShowing ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'} ${style.bg} ${style.border}`}
    >
      {style.icon}
      <p className={`text-sm font-semibold pr-4 ${style.text}`}>{toast.message}</p>
      <button 
        onClick={handleRemove} 
        className={`ml-auto shrink-0 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${style.text}`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};
