import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

const PortfolioStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {[
        {
          title: 'Portfolio Value',
          value: '$124,532.89',
          change: '+12.3%',
          icon: <DollarSign className="h-6 w-6 text-purple-400" />,
          positive: true
        },
        {
          title: '24h Change',
          value: '+$1,234.56',
          change: '+2.4%',
          icon: <TrendingUp className="h-6 w-6 text-green-400" />,
          positive: true
        },
        {
          title: 'Total Assets',
          value: '12',
          change: '+2 new',
          icon: <Activity className="h-6 w-6 text-blue-400" />,
          positive: true
        },
        {
          title: 'Risk Level',
          value: 'Moderate',
          change: 'Optimized',
          icon: <TrendingDown className="h-6 w-6 text-yellow-400" />,
          positive: null
        }
      ].map((stat, index) => (
        <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 font-medium">{stat.title}</h3>
            {stat.icon}
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <span className={`px-2.5 py-0.5 rounded-full text-sm ${
              stat.positive === null ? 'bg-purple-500/20 text-purple-200' :
              stat.positive ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
            }`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioStats;