import React from 'react';
import { 
  Building2,
  Heart, 
  Eye, 
  Users, 
  Clock,
  TrendingUp,
  DollarSign,
  Home
} from 'lucide-react';

// Mock data - in a real app this would come from your backend
const stats = [
  {
    id: 1,
    name: 'Days on Market',
    value: '12',
    icon: Clock,
    description: 'Listed on Mar 4, 2024'
  },
  {
    id: 2,
    name: 'List Price',
    value: '$749,900',
    icon: DollarSign,
    description: 'Market average: $725,000'
  },
  {
    id: 3,
    name: 'Total Showings',
    value: '24',
    icon: Users,
    description: '6 scheduled this week'
  },
  {
    id: 4,
    name: 'MLS Views',
    value: '2,847',
    change: '+14.5%',
    icon: Eye,
    trend: 'up',
    description: 'Last 30 days'
  },
  {
    id: 5,
    name: 'Platform Favorites',
    value: '486',
    change: '+28.4%',
    icon: Heart,
    trend: 'up',
    description: 'Across all platforms'
  },
  {
    id: 6,
    name: 'Buyer Leads',
    value: '18',
    change: '+5',
    icon: TrendingUp,
    trend: 'up',
    description: 'Qualified buyers'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-indigo-600" />
              <div className="ml-3">
                <h1 className="text-2xl font-bold text-gray-900">Seller Dashboard</h1>
                <p className="text-sm text-gray-500">742 Evergreen Terrace</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        {stat.change && (
                          <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stat.change}
                          </div>
                        )}
                      </dd>
                      <dd className="mt-1 text-sm text-gray-500">{stat.description}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-500" />
                  <p className="ml-3 text-sm text-gray-600">New showing scheduled for tomorrow at 2 PM</p>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-red-500" />
                  <p className="ml-3 text-sm text-gray-600">Added to 5 new buyer's favorite lists today</p>
                </div>
                <div className="flex items-center">
                  <Eye className="h-5 w-5 text-blue-500" />
                  <p className="ml-3 text-sm text-gray-600">125 new MLS views in the last 24 hours</p>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <p className="ml-3 text-sm text-gray-600">2 new qualified buyer leads this week</p>
                </div>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Market Insights</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <Home className="h-5 w-5 text-indigo-500" />
                  <p className="ml-3 text-sm text-gray-600">Your home is priced 3% above market average</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <p className="ml-3 text-sm text-gray-600">Average DOM in your area: 18 days</p>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <p className="ml-3 text-sm text-gray-600">Similar homes sold for $725k-$775k</p>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <p className="ml-3 text-sm text-gray-600">Market activity up 12% this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;