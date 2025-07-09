import React from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'

const RecentTransactions: React.FC = () => {
  const transactions = [
    {
      id: '1',
      from: 'BTC',
      to: 'ETH',
      amount: '0.5432',
      value: '$23,450',
      time: '2m ago',
      status: 'completed'
    },
    {
      id: '2',
      from: 'ETH',
      to: 'RUNE',
      amount: '12.34',
      value: '$32,701',
      time: '5m ago',
      status: 'completed'
    },
    {
      id: '3',
      from: 'RUNE',
      to: 'AVAX',
      amount: '2,450',
      value: '$10,412',
      time: '8m ago',
      status: 'pending'
    },
    {
      id: '4',
      from: 'BNB',
      to: 'ATOM',
      amount: '45.67',
      value: '$14,386',
      time: '12m ago',
      status: 'completed'
    },
    {
      id: '5',
      from: 'LTC',
      to: 'BCH',
      amount: '8.91',
      value: '$846',
      time: '15m ago',
      status: 'completed'
    }
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Recent Swaps</h3>
        <button className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center space-x-1">
          <span>View All</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
      
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium text-white">{tx.from}</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
                <span className="text-sm font-medium text-white">{tx.to}</span>
              </div>
              <div className={`px-2 py-1 rounded text-xs ${
                tx.status === 'completed' 
                  ? 'bg-emerald-500/20 text-emerald-400' 
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {tx.status}
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">{tx.value}</p>
              <p className="text-xs text-slate-400">{tx.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions
