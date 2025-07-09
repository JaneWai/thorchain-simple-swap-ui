import React from 'react'
import { ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react'

const RecentTransactions: React.FC = () => {
  const transactions = [
    {
      id: '1',
      type: 'swap',
      from: 'BTC',
      to: 'ETH',
      amount: '0.5',
      value: '$15,250',
      time: '2m ago',
      status: 'completed'
    },
    {
      id: '2',
      type: 'swap',
      from: 'ETH',
      to: 'AVAX',
      amount: '2.3',
      value: '$4,680',
      time: '5m ago',
      status: 'completed'
    },
    {
      id: '3',
      type: 'swap',
      from: 'BNB',
      to: 'ATOM',
      amount: '15.7',
      value: '$3,920',
      time: '8m ago',
      status: 'pending'
    },
    {
      id: '4',
      type: 'swap',
      from: 'DOGE',
      to: 'LTC',
      amount: '1,250',
      value: '$125',
      time: '12m ago',
      status: 'completed'
    },
    {
      id: '5',
      type: 'swap',
      from: 'BCH',
      to: 'BTC',
      amount: '3.2',
      value: '$890',
      time: '15m ago',
      status: 'completed'
    }
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Recent Swaps</h3>
        <button className="text-sm text-emerald-400 hover:text-emerald-300">View All</button>
      </div>
      
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="p-2 bg-slate-700 rounded-lg">
                  <ArrowUpRight className="w-4 h-4 text-slate-300" />
                </div>
                {tx.status === 'pending' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                )}
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-white font-medium">{tx.from}</span>
                  <ArrowDownLeft className="w-3 h-3 text-slate-400" />
                  <span className="text-white font-medium">{tx.to}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>{tx.time}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-white font-medium">{tx.value}</div>
              <div className={`text-xs ${
                tx.status === 'completed' ? 'text-emerald-400' : 'text-yellow-400'
              }`}>
                {tx.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-slate-900/20 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Total Volume (24h)</span>
          <span className="text-white font-medium">$45.2M</span>
        </div>
      </div>
    </div>
  )
}

export default RecentTransactions
