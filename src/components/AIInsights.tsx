import React from 'react';
import { Brain, TrendingUp, AlertTriangle } from 'lucide-react';

const AIInsights = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">AI Insights</h2>
        </div>
        <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">
          Updated 2m ago
        </span>
      </div>

      <div className="space-y-6">
        {[
          {
            type: 'opportunity',
            icon: <TrendingUp className="h-5 w-5 text-green-400" />,
            title: 'Investment Opportunity',
            description: 'ETH showing strong momentum with potential 12% upside based on technical analysis.',
            action: 'View Analysis'
          },
          {
            type: 'alert',
            icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
            title: 'Portfolio Alert',
            description: 'Your portfolio diversity score is below optimal levels. Consider rebalancing.',
            action: 'Rebalance Now'
          }
        ].map((insight, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700/30">
            <div className="flex-shrink-0">{insight.icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">{insight.title}</h3>
              <p className="text-gray-300 mb-3">{insight.description}</p>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                {insight.action} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;