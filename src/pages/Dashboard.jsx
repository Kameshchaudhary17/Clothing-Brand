import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  DollarSign, 
  Eye, 
  Star,
  Package,
  AlertCircle,
  BarChart3,
  Calendar,
  Filter,
  Search
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mock data
  const stats = [
    {
      title: 'Total Revenue',
      value: '$54,239',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Orders',
      value: '1,429',
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingBag,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Customers',
      value: '12,847',
      change: '+15.1%',
      trend: 'up',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      trend: 'down',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Sarah Johnson', item: 'Summer Dress Collection', amount: '$89.99', status: 'completed', time: '2 min ago' },
    { id: '#ORD-002', customer: 'Mike Chen', item: 'Casual Sneakers', amount: '$129.99', status: 'processing', time: '5 min ago' },
    { id: '#ORD-003', customer: 'Emma Davis', item: 'Designer Handbag', amount: '$249.99', status: 'shipped', time: '12 min ago' },
    { id: '#ORD-004', customer: 'John Smith', item: 'Winter Jacket', amount: '$199.99', status: 'completed', time: '18 min ago' },
    { id: '#ORD-005', customer: 'Lisa Wang', item: 'Athletic Wear Set', amount: '$79.99', status: 'pending', time: '25 min ago' }
  ];

  const topProducts = [
    { name: 'Summer Floral Dress', sales: 234, revenue: '$18,720', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=80&h=80&fit=crop&crop=center' },
    { name: 'Classic Denim Jacket', sales: 189, revenue: '$15,120', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=80&h=80&fit=crop&crop=center' },
    { name: 'Designer Sneakers', sales: 167, revenue: '$20,040', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=80&h=80&fit=crop&crop=center' },
    { name: 'Silk Blouse', sales: 143, revenue: '$12,870', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=80&h=80&fit=crop&crop=center' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      completed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      processing: 'bg-blue-100 text-blue-700 border-blue-200',
      shipped: 'bg-purple-100 text-purple-700 border-purple-200',
      pending: 'bg-orange-100 text-orange-700 border-orange-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="h-screen flex flex-col">
        <Navbar/>
        <div className="flex flex-1 overflow-hidden">
        <Sidebar/>
    
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className={`mb-8 transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your store today.</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-200 shadow-sm">
              <Calendar className="h-4 w-4 text-gray-500" />
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-transparent text-sm text-gray-700 focus:outline-none"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transform transition-all duration-500 hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  stat.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                }`}>
                  <TrendingUp className={`h-3 w-3 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                  {stat.change}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Recent Orders */}
        <div className={`lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm transform transition-all duration-700 ${
          isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search orders..."
                    className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                  View all
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            {recentOrders.map((order, index) => (
              <div 
                key={order.id}
                className={`p-6 border-b border-gray-50 last:border-b-0 hover:bg-slate-50 transition-all duration-300 transform ${
                  isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-medium text-gray-900">{order.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium mb-1">{order.customer}</p>
                    <p className="text-gray-500 text-sm">{order.item}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 mb-1">{order.amount}</p>
                    <p className="text-gray-500 text-xs">{order.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className={`bg-white rounded-xl border border-gray-100 shadow-sm transform transition-all duration-700 ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Top Products</h2>
            <p className="text-gray-600 text-sm mt-1">Best selling items this month</p>
          </div>
          <div className="p-6">
            {topProducts.map((product, index) => (
              <div 
                key={product.name}
                className={`flex items-center gap-4 mb-6 last:mb-0 p-3 rounded-lg hover:bg-slate-50 transition-all duration-300 transform ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover shadow-sm"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-xs">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 text-sm">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Quick Actions */}
        <div className={`bg-white rounded-xl border border-gray-100 shadow-sm p-6 transform transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <Package className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Add New Product</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <Users className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">View Customers</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              <span className="text-gray-700">Analytics Report</span>
            </button>
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className={`bg-white rounded-xl border border-gray-100 shadow-sm p-6 transform transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '900ms' }}>
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            <h3 className="text-lg font-semibold text-gray-900">Low Stock Alert</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-700">Winter Jackets</span>
              <span className="text-sm font-medium text-orange-600">3 left</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-700">Summer Dresses</span>
              <span className="text-sm font-medium text-orange-600">7 left</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-700">Casual Shoes</span>
              <span className="text-sm font-medium text-orange-600">12 left</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-orange-50 text-orange-700 py-2 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-sm font-medium">
            Restock Items
          </button>
        </div>

        {/* Customer Satisfaction */}
        <div className={`bg-white rounded-xl border border-gray-100 shadow-sm p-6 transform transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Reviews</h3>
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-gray-900 mb-1">4.8</div>
            <div className="flex justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(star => (
                <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 text-sm">Based on 1,247 reviews</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600 w-8">5★</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full" style={{width: '78%'}}></div>
              </div>
              <span className="text-xs text-gray-600 w-8">78%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600 w-8">4★</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full" style={{width: '15%'}}></div>
              </div>
              <span className="text-xs text-gray-600 w-8">15%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600 w-8">3★</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full" style={{width: '5%'}}></div>
              </div>
              <span className="text-xs text-gray-600 w-8">5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};

export default Dashboard;