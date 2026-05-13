import React from 'react';
import { useTranslation } from 'react-i18next';
import SearchableSelect from '../../common/SearchableSelect';

const ClientsTable = ({ clients, editingId, editFormData, wilayas, hasPerm, onRowClick, onInputChange, onKeyDown, onDeleteClick }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/50">
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Client')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Contact')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 hidden lg:table-cell">{t('Wilaya')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 hidden lg:table-cell">{t('Commune')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 text-center">{t('Commandes')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Valeur Totale')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {clients.map((client) => (
              <tr
                key={client.id}
                onClick={() => editingId !== client.id && onRowClick(client)}
                className={`group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer ${editingId === client.id ? 'bg-slate-50/50 dark:bg-slate-800/30' : ''}`}
              >
                {/* Name */}
                <td className="px-6 py-5">
                  {editingId === client.id ? (
                    <input
                      type="text" name="name" autoFocus
                      value={editFormData.name}
                      onChange={onInputChange}
                      onKeyDown={(e) => onKeyDown(e, client.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm font-black bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                    />
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-primary text-xs border border-slate-200 dark:border-slate-700">
                        {client.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-heading dark:text-white">{client.name}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Client VIP</span>
                      </div>
                    </div>
                  )}
                </td>

                {/* Contact */}
                <td className="px-6 py-5">
                  {editingId === client.id ? (
                    <div className="flex flex-col gap-1">
                      <input
                        type="text" name="email"
                        value={editFormData.email}
                        onChange={onInputChange}
                        onKeyDown={(e) => onKeyDown(e, client.id)}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-slate-600 dark:text-slate-300 font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                      />
                      <input
                        type="text" name="phone"
                        value={editFormData.phone}
                        onChange={onInputChange}
                        onKeyDown={(e) => onKeyDown(e, client.id)}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-600 dark:text-slate-300 font-medium hidden sm:block">{client.email}</span>
                      <span className="text-[11px] text-slate-400">{client.phone}</span>
                    </div>
                  )}
                </td>

                {/* Wilaya */}
                <td className="px-6 py-5 hidden lg:table-cell">
                  {editingId === client.id ? (
                    <SearchableSelect
                      options={wilayas.map((w) => ({ label: w.fr, value: w.fr }))}
                      value={editFormData.wilaya}
                      onChange={(val) => onInputChange({ target: { name: 'wilaya', value: val } })}
                      placeholder={t('Wilaya')}
                      t={t}
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                      {client.wilaya}
                    </div>
                  )}
                </td>

                {/* Commune */}
                <td className="px-6 py-5 hidden lg:table-cell">
                  {editingId === client.id ? (
                    <input
                      type="text" name="commune"
                      value={editFormData.commune}
                      onChange={onInputChange}
                      onKeyDown={(e) => onKeyDown(e, client.id)}
                      onClick={(e) => e.stopPropagation()}
                      placeholder={t('Commune')}
                      className="text-sm font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                      {client.commune}
                    </div>
                  )}
                </td>

                {/* Orders Count */}
                <td className="px-6 py-5 text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-black text-heading dark:text-white border border-slate-100 dark:border-slate-800">
                    {client.orders}
                  </span>
                </td>

                {/* Total Spent / Delete in edit mode */}
                <td className="px-6 py-5">
                  {editingId === client.id ? (
                    <div className="flex items-center gap-2">
                      {hasPerm('clients:delete') && (
                        <button
                          onClick={(e) => { e.stopPropagation(); onDeleteClick(client.id); }}
                          className="p-2 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-xl hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
                          title={t('Supprimer')}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ) : (
                    <>
                      <span className="text-sm font-black text-emerald-500">{client.totalSpent}</span>
                      <p className="text-[10px] text-slate-400 font-medium">{client.lastOrder}</p>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsTable;
