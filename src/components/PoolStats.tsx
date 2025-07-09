import React from 'react'
import { TrendingUp, DollarSign, Users, Zap } from 'lucide-react'

const PoolStats: React.FC = () => {
  const stats = [
    {
      label: 'Total Value Locked',
      value: '$2.4B',
      change: '+12.5%',
      icon: DollarSign,
      positive: true
    },
    {
      label: 'Active Pools',
      value: '47',
      change: '+3',
      icon: Zap,
      positive: true
    },
    {
      label: 'Total Swaps (24h)',
      value: '12,847',
      change: '+8.2%',
      icon: TrendingUp,
      positive: true
    },
    {
      label: 'Unique Users',
      value: '45.2K',
      change: '+15.7%',
      icon: Users,
      positive: true
    }
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Pool Statistics</h3>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-slate-700/50 rounded-lg">
                <stat.icon className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="font-semibold text-white">{stat.value}</p>
              </div>
            </div>
            <span className={`text-sm font-medium ${
              stat.positive ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {stat.change}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <div className="text-center">
          <p className="text-sm text-slate-400 mb-2">RUNE Price</p>
          <p className="text-2xl font-bold text-white">$4.25</p>
          <p className="text-sm text-emerald-400">+5.2% (24h)</p>
        </div>
      </div>
    </div>
  )
}

export default PoolStats
