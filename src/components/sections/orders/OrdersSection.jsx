import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { clientServices } from '../../../services/clientServices';
import OrdersStats from './OrdersStats';
import OrdersFilters from './OrdersFilters';
import OrdersTable from './OrdersTable';

const INITIAL_ORDERS = [
  { id: '#ORD-7294', customer: 'Ahmed Mansouri', phone: '+213 551 23 45 67', date: '02 Mai 2026', amount: '4,500 DA', status: 'Pending', product: 'Pack Zen 2.0', agent: { name: 'Amine K.', time: '14:32' }, wilaya: 'Alger', commune: "Sidi M'Hamed", deliveryCompany: 'Yalidine', deliveryPrice: '400 DA' },
  { id: '#ORD-7295', customer: 'Sara El Amrani', phone: '+213 552 88 99 00', date: '02 Mai 2026', amount: '8,900 DA', status: 'Confirmed', product: 'Smart Watch Pro', agent: { name: 'Selma R.', time: '12:15' }, wilaya: 'Oran', commune: 'Bir El Djir', deliveryCompany: 'ZR Express', deliveryPrice: '600 DA' },
  { id: '#ORD-7296', customer: 'Yassine Benjelloun', phone: '+213 553 11 22 33', date: '01 Mai 2026', amount: '12,000 DA', status: 'Cancelled', product: 'AirPods Max', agent: { name: 'Yanis B.', time: '10:45' }, wilaya: 'Constantine', commune: 'Khroub', deliveryCompany: 'DHD', deliveryPrice: '500 DA' },
  { id: '#ORD-7297', customer: 'Khadija Alami', phone: '+213 554 44 55 66', date: '01 Mai 2026', amount: '3,200 DA', status: 'Confirmed', product: 'Organic Tea Set', agent: { name: 'Ines L.', time: '16:20' }, wilaya: 'Alger', commune: 'Bab El Oued', deliveryCompany: 'Yalidine', deliveryPrice: '400 DA' },
  { id: '#ORD-7298', customer: 'Omar Tazi', phone: '+213 555 77 88 99', date: '30 Avr 2026', amount: '5,600 DA', status: 'Pending', product: 'Gaming Mouse', agent: { name: 'Amine K.', time: '09:15' }, wilaya: 'Setif', commune: 'El Eulma', deliveryCompany: 'ZR Express', deliveryPrice: '450 DA' },
];

const AVAILABLE_AGENTS = [
  { name: 'Amine K.', time: '14:32' },
  { name: 'Selma R.', time: '12:15' },
  { name: 'Yanis B.', time: '10:45' },
  { name: 'Ines L.', time: '16:20' },
];

const OrdersSection = ({ permissions = [] }) => {
  const { t } = useTranslation();

  // --- Filter State ---
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [dateRange, setDateRange] = useState('All');
  const [filterTenant, setFilterTenant] = useState('all');
  const [filterTeam, setFilterTeam] = useState('all');
  const [filterWilaya, setFilterWilaya] = useState('all');
  const [filterProduct, setFilterProduct] = useState('all');

  // --- Data State ---
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [wilayas, setWilayas] = useState([]);

  // --- Editing State ---
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const hasPerm = (p) => permissions.includes(p);

  React.useEffect(() => {
    const fetchWilayas = async () => {
      try {
        const data = await clientServices.getWilayas();
        setWilayas(data);
      } catch (error) {
        console.error('Failed to fetch wilayas:', error);
      }
    };
    fetchWilayas();
  }, []);

  // --- CRUD Handlers ---
  const handleAddOrder = () => {
    const newOrder = {
      id: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: '',
      phone: '',
      date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }),
      amount: '',
      status: 'Pending',
      product: '',
      agent: { name: AVAILABLE_AGENTS[0]?.name || 'Agent', time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) },
      wilaya: '',
      commune: '',
      deliveryCompany: '',
      deliveryPrice: '',
    };
    setOrders([newOrder, ...orders]);
    setEditingId(newOrder.id);
    setEditFormData({ ...newOrder });
  };

  const handleEditClick = (order) => {
    setEditingId(order.id);
    setEditFormData({ ...order });
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'agentName') {
      setEditFormData((prev) => ({ ...prev, agent: { ...prev.agent, name: value } }));
    } else {
      setEditFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSaveClick = (id, updatedData = editFormData) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? updatedData : o)));
    setEditingId(null);
    setEditFormData({});
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') handleSaveClick(id);
    else if (e.key === 'Escape') handleCancelClick();
  };

  const handleDeleteClick = (id) => {
    if (window.confirm(t('Êtes-vous sûr de vouloir supprimer cette commande ?'))) {
      setOrders((prev) => prev.filter((o) => o.id !== id));
    }
  };

  // --- Derived Data ---
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || order.status.toLowerCase() === activeTab.toLowerCase();
    const matchesWilaya = filterWilaya === 'all' || order.wilaya === filterWilaya;
    const matchesProduct = filterProduct === 'all' || order.product === filterProduct;
    return matchesSearch && matchesTab && matchesWilaya && matchesProduct;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black text-heading dark:text-white tracking-tight">{t('Gestion des Commandes')}</h2>
          <p className="text-sm text-slate-400 font-medium mt-1">Gérez et suivez le statut de vos commandes en temps réel.</p>
        </div>
        {hasPerm('orders:create') && (
          <button
            onClick={handleAddOrder}
            className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 transition-all font-black text-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {t('Ajouter une Commande')}
          </button>
        )}
      </div>

      {/* Stats Summary */}
      <OrdersStats
        total={orders.length}
        pending={orders.filter((o) => o.status === 'Pending').length}
        confirmed={orders.filter((o) => o.status === 'Confirmed').length}
        cancelled={orders.filter((o) => o.status === 'Cancelled').length}
      />

      {/* Filters */}
      <OrdersFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        filterTenant={filterTenant}
        onTenantChange={setFilterTenant}
        filterTeam={filterTeam}
        onTeamChange={setFilterTeam}
        filterWilaya={filterWilaya}
        onWilayaChange={setFilterWilaya}
        filterProduct={filterProduct}
        onProductChange={setFilterProduct}
        wilayas={wilayas}
      />

      {/* Table */}
      <OrdersTable
        orders={filteredOrders}
        editingId={editingId}
        editFormData={editFormData}
        availableAgents={AVAILABLE_AGENTS}
        wilayas={wilayas}
        hasPerm={hasPerm}
        onRowClick={handleEditClick}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default OrdersSection;
