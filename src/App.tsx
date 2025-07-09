import React, { useState } from 'react'
import Header from './components/Header'
import SwapInterface from './components/SwapInterface'
import RUNEBond from './components/RUNEBond'
import PoolStats from './components/PoolStats'
import RecentTransactions from './components/RecentTransactions'

function App() {
  const [isConnected, setIsConnected] = useState(false)
  const [activeTab, setActiveTab] = useState('swap')

  const renderMainContent = () => {
    switch (activeTab) {
      case 'swap':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SwapInterface isConnected={isConnected} />
            </div>
            <div className="space-y-6">
              <PoolStats />
              <RecentTransactions />
            </div>
          </div>
        )
      case 'runebond':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <RUNEBond />
            </div>
            <div className="space-y-6">
              <PoolStats />
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">RUNEBond Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Earn passive rewards on RUNE</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Support network security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Participate in governance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Flexible bonding periods</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'pools':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Liquidity Pools</h2>
            <p className="text-slate-400">Coming soon...</p>
          </div>
        )
      case 'analytics':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h2>
            <p className="text-slate-400">Coming soon...</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="relative z-10">
        <Header 
          isConnected={isConnected} 
          setIsConnected={setIsConnected}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <main className="container mx-auto px-4 py-8">
          {renderMainContent()}
        </main>
      </div>
    </div>
  )
}

export default App
