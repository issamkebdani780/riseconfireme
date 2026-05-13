import React from 'react';
import { useTranslation } from 'react-i18next';
import SearchableSelect from '../../common/SearchableSelect';

const STATUS_COLORS = {
  Pending: 'bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
  Confirmed: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  Cancelled: 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400',
};

const STATUS_DOT_COLORS = {
  Confirmed: 'bg-emerald-500',
  Pending: 'bg-amber-500',
  Cancelled: 'bg-red-500',
};

const OrdersTable = ({
  orders,
  editingId,
  editFormData,
  availableAgents,
  wilayas,
  hasPerm,
  onRowClick,
  onInputChange,
  onKeyDown,
  onDeleteClick,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/50">
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Commande')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Client')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 hidden md:table-cell">{t('Produit')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Montant')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 hidden lg:table-cell">{t('Agent')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Statut')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 hidden xl:table-cell">{t('Wilaya')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 hidden xl:table-cell">{t('Commune')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 hidden lg:table-cell">{t('Livraison')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 hidden lg:table-cell">{t('Prix Liv.')}</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 text-right">{t('Actions')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {orders.map((order) => (
              <tr
                key={order.id}
                onClick={() => editingId !== order.id && onRowClick(order)}
                className={`group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer ${editingId === order.id ? 'bg-slate-50/50 dark:bg-slate-800/30' : ''}`}
              >
                {/* Order ID & Date */}
                <td className="px-6 py-5">
                  <span className="text-sm font-black text-heading dark:text-white">{order.id}</span>
                  <p className="text-[10px] text-slate-400 font-medium">{order.date}</p>
                </td>

                {/* Customer */}
                <td className="px-6 py-5">
                  {editingId === order.id ? (
                    <div className="flex flex-col gap-2">
                      <input
                        type="text" name="customer" autoFocus
                        value={editFormData.customer}
                        onChange={onInputChange}
                        onKeyDown={(e) => onKeyDown(e, order.id)}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                      />
                      <input
                        type="text" name="phone"
                        value={editFormData.phone}
                        onChange={onInputChange}
                        onKeyDown={(e) => onKeyDown(e, order.id)}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-heading dark:text-slate-200">{order.customer}</span>
                      <span className="text-[11px] text-slate-400">{order.phone}</span>
                    </div>
                  )}
                </td>

                {/* Product */}
                <td className="px-6 py-5 hidden md:table-cell">
                  {editingId === order.id ? (
                    <input
                      type="text" name="product"
                      value={editFormData.product}
                      onChange={onInputChange}
                      onKeyDown={(e) => onKeyDown(e, order.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                    />
                  ) : (
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{order.product}</span>
                  )}
                </td>

                {/* Amount */}
                <td className="px-6 py-5">
                  {editingId === order.id ? (
                    <input
                      type="text" name="amount"
                      value={editFormData.amount}
                      onChange={onInputChange}
                      onKeyDown={(e) => onKeyDown(e, order.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm font-black text-primary bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                    />
                  ) : (
                    <span className="text-sm font-black text-primary">{order.amount}</span>
                  )}
                </td>

                {/* Agent */}
                <td className="px-6 py-5 hidden lg:table-cell">
                  {editingId === order.id ? (
                    <div className="flex flex-col gap-1">
                      <SearchableSelect
                        options={availableAgents.map((a) => ({ label: a.name, value: a.name }))}
                        value={editFormData.agent.name}
                        onChange={(val) => onInputChange({ target: { name: 'agentName', value: val } })}
                        placeholder={t('Agent')}
                        t={t}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-heading dark:text-slate-200">{order.agent.name}</span>
                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">{order.agent.time}</span>
                      </div>
                    </div>
                  )}
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  {editingId === order.id ? (
                    <SearchableSelect
                      options={[
                        { label: t('Pending'), value: 'Pending' },
                        { label: t('Confirmed'), value: 'Confirmed' },
                        { label: t('Cancelled'), value: 'Cancelled' },
                      ]}
                      value={editFormData.status}
                      onChange={(val) => onInputChange({ target: { name: 'status', value: val } })}
                      placeholder={t('Statut')}
                      t={t}
                    />
                  ) : (
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${STATUS_COLORS[order.status]}`}>
                      <div className={`w-1 h-1 rounded-full me-2 ${STATUS_DOT_COLORS[order.status]}`} />
                      {t(order.status)}
                    </span>
                  )}
                </td>

                {/* Wilaya */}
                <td className="px-6 py-5 hidden xl:table-cell">
                  {editingId === order.id ? (
                    <SearchableSelect
                      options={wilayas.map((w) => ({ label: w.fr, value: w.fr }))}
                      value={editFormData.wilaya}
                      onChange={(val) => onInputChange({ target: { name: 'wilaya', value: val } })}
                      placeholder={t('Wilaya')}
                      t={t}
                    />
                  ) : (
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{order.wilaya || '-'}</span>
                  )}
                </td>

                {/* Commune */}
                <td className="px-6 py-5 hidden xl:table-cell">
                  {editingId === order.id ? (
                    <input
                      type="text" name="commune"
                      value={editFormData.commune}
                      onChange={onInputChange}
                      onKeyDown={(e) => onKeyDown(e, order.id)}
                      onClick={(e) => e.stopPropagation()}
                      placeholder={t('Commune')}
                      className="text-sm font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                    />
                  ) : (
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{order.commune || '-'}</span>
                  )}
                </td>

                {/* Delivery Company */}
                <td className="px-6 py-5 hidden lg:table-cell">
                  {editingId === order.id ? (
                    <SearchableSelect
                      options={[
                        { label: 'Yalidine', value: 'Yalidine' },
                        { label: 'ZR Express', value: 'ZR Express' },
                        { label: 'DHD', value: 'DHD' },
                      ]}
                      value={editFormData.deliveryCompany}
                      onChange={(val) => onInputChange({ target: { name: 'deliveryCompany', value: val } })}
                      placeholder={t('Livreur')}
                      t={t}
                    />
                  ) : (
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{order.deliveryCompany || '-'}</span>
                  )}
                </td>

                {/* Delivery Price */}
                <td className="px-6 py-5 hidden lg:table-cell">
                  {editingId === order.id ? (
                    <input
                      type="text" name="deliveryPrice"
                      value={editFormData.deliveryPrice}
                      onChange={onInputChange}
                      onKeyDown={(e) => onKeyDown(e, order.id)}
                      onClick={(e) => e.stopPropagation()}
                      placeholder={t('Prix')}
                      className="text-sm font-black text-amber-500 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                    />
                  ) : (
                    <span className="text-sm font-black text-amber-500">{order.deliveryPrice || '-'}</span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button title="Détails" className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all active:scale-90">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    {hasPerm('orders:delete') && (
                      <button
                        onClick={(e) => { e.stopPropagation(); onDeleteClick(order.id); }}
                        title="Supprimer"
                        className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-all active:scale-90"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <p className="text-xs text-slate-400 font-medium">Affichage de {orders.length} commandes</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-primary disabled:opacity-50" disabled>Précédent</button>
          <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl shadow-lg shadow-primary/20">1</button>
          <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-primary">2</button>
          <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-primary">Suivant</button>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
