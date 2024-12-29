import React from 'react';
import { BarChart3 } from 'lucide-react';

const AssetList = () => {
  const assets = [
    { name: 'Bitcoin', symbol: 'BTC', value: '$45,234.12', change: '+5.2%', positive: true },
    { name: 'Ethereum', symbol: 'ETH', value: '$2,845.67', change: '+3.8%', positive: true },
    { name: 'Solana', symbol: 'SOL', value: '$98.45', change: '-2.1%', positive: false },
    { name: 'Cardano', symbol: 'ADA', value: '$1.23', change: '+1.4%', positive: true }
  ];

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-6 w-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">Top Assets</h2>
        </div>
      </div>

      <div className="space-y-4">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/30 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-sm font-medium text-purple-200">{asset.symbol.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-white font-medium">{asset.name}</h3>
                <span className="text-sm text-gray-400">{asset.symbol}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-medium">{asset.value}</div>
              <span className={`text-sm ${asset.positive ? 'text-green-400' : 'text-red-400'}`}>
                {asset.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetList;