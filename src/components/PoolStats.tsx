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
      label: '24h Volume',
      value: '$45.2M',
      change: '+8.3%',
      icon: TrendingUp,
      positive: true
    },
    {
      label: 'Active Pools',
      value: '156',
      change: '+3',
      icon: Zap,
      positive: true
    },
    {
      label: 'Unique Swappers',
      value: '12.4K',
      change: '+15.2%',
      icon: Users,
      positive: true
    }
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Pool Statistics</h3>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <stat.icon className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="text-lg font-semibold text-white">{stat.value}</p>
              </div>
            </div>
            <div className={`text-sm font-medium ${
              stat.positive ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg border border-emerald-500/20">
        <div className="flex items-center space-x-2 mb-2">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">Network Health</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white">Excellent</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoolStats
