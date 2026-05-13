import React from 'react';
import { useTranslation } from 'react-i18next';

const STATUS_COLORS = {
  online: 'bg-emerald-500',
  away: 'bg-amber-500',
  offline: 'bg-slate-300',
};

const AgentCard = ({ agent, editingId, editFormData, hasPerm, onEditClick, onSaveClick, onCancelClick, onDeleteClick, onInputChange }) => {
  const { t } = useTranslation();
  const isEditing = editingId === agent.id;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group relative overflow-hidden">
      {/* Online Status Dot */}
      <div className={`absolute top-6 right-6 w-3 h-3 rounded-full border-4 border-white dark:border-slate-900 shadow-sm ${STATUS_COLORS[agent.status]}`} />

      {/* Avatar + Name */}
      <div className="flex items-center gap-5 mb-6">
        <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center font-black text-primary text-xl border-2 border-primary/5 group-hover:scale-110 transition-transform shrink-0">
          {agent.name ? agent.name.split(' ').map((n) => n[0]).join('') : 'A'}
        </div>
        <div className="min-w-0 flex-1">
          {isEditing ? (
            <>
              <input
                type="text" name="name"
                value={editFormData.name}
                onChange={onInputChange}
                placeholder={t('Nom complet')}
                className="w-full text-lg font-black bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 mb-1 outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="text" name="role"
                value={editFormData.role}
                onChange={onInputChange}
                placeholder={t('Rôle')}
                className="w-full text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary"
              />
            </>
          ) : (
            <>
              <h4 className="text-lg font-black text-heading dark:text-white truncate">{agent.name || 'Nouvel Agent'}</h4>
              <p className="text-xs text-primary font-bold uppercase tracking-wider truncate">{agent.role}</p>
            </>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-8">
        {/* Email */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {isEditing ? (
            <input
              type="text" name="email"
              value={editFormData.email}
              onChange={onInputChange}
              placeholder={t('Email')}
              className="flex-1 min-w-0 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1 outline-none focus:ring-1 focus:ring-primary"
            />
          ) : (
            <span className="truncate">{agent.email || '-'}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {isEditing ? (
            <input
              type="text" name="phone"
              value={editFormData.phone}
              onChange={onInputChange}
              placeholder={t('Téléphone')}
              className="flex-1 min-w-0 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1 outline-none focus:ring-1 focus:ring-primary"
            />
          ) : (
            <span>{agent.phone || '-'}</span>
          )}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t('Taux Succès')}</p>
          <p className="text-xl font-black text-primary">{agent.rate}</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t('Appels')}</p>
          <p className="text-xl font-black text-heading dark:text-white">{agent.calls}</p>
        </div>
      </div>

      {/* Footer: Last Active + Action Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t('Dernière Activité')}</span>
          <span className="text-xs font-bold text-heading dark:text-slate-300">{agent.lastActive}</span>
        </div>

        {isEditing ? (
          <div className="flex items-center gap-2">
            <button onClick={onCancelClick} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all" title={t('Annuler')}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button onClick={() => onSaveClick(agent.id)} className="p-2 text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 rounded-xl transition-all" title={t('Sauvegarder')}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {hasPerm('agents:edit') && (
              <button onClick={() => onEditClick(agent)} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all shadow-sm" title={t('Modifier')}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            )}
            {hasPerm('agents:delete') && (
              <button onClick={() => onDeleteClick(agent.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all shadow-sm" title={t('Supprimer')}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentCard;
