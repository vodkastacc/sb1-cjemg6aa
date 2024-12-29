import React from 'react';
import { Sparkles, Rocket, Brain, TrendingUp, Wallet, BarChart3 } from 'lucide-react';
import PortfolioStats from './components/PortfolioStats';
import AIInsights from './components/AIInsights';
import AssetList from './components/AssetList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-white">Cosmic Portfolio</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all">
              <Wallet className="h-5 w-5" />
              <span>Connect Wallet</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Portfolio Tracking
              <Sparkles className="inline-block ml-2 h-8 w-8 text-purple-400" />
            </h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Navigate the financial cosmos with advanced AI insights and real-time portfolio analytics
            </p>
          </div>

          {/* Stats Overview */}
          <PortfolioStats />

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* AI Insights */}
            <div className="lg:col-span-2">
              <AIInsights />
            </div>

            {/* Asset List */}
            <div className="lg:col-span-1">
              <AssetList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}