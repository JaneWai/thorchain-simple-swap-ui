import React, { useState } from 'react'
import { Lock, Unlock, TrendingUp, Clock, Shield, Zap, Info } from 'lucide-react'

const RUNEBond: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bond' | 'unbond'>('bond')
  const [bondAmount, setBondAmount] = useState('')
  const [unbondAmount, setUnbondAmount] = useState('')

  const bondingStats = {
    totalBonded: '45.2M RUNE',
    bondedValue: '$192.1M',
    currentAPY: '12.4%',
    unbondingPeriod: '28 days',
    myBonded: '1,234.56 RUNE',
    myRewards: '45.23 RUNE',
    nextReward: '2h 15m'
  }

  const bondingPools = [
    {
      name: 'RUNE-ETH LP',
      apy: '15.2%',
      tvl: '$45.2M',
      risk: 'Medium',
      rewards: 'RUNE + Trading Fees'
    },
    {
      name: 'RUNE-BTC LP',
      apy: '13.8%',
      tvl: '$38.7M',
      risk: 'Low',
      rewards: 'RUNE + Trading Fees'
    },
    {
      name: 'RUNE Staking',
      apy: '11.5%',
      tvl: '$108.2M',
      risk: 'Very Low',
      rewards: 'RUNE'
    }
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg">
            <Lock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">RUNEBond</h2>
            <p className="text-sm text-slate-400">Stake & Earn Rewards</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-400">Current APY</p>
          <p className="text-lg font-bold text-emerald-400">{bondingStats.currentAPY}</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-900/30 rounded-lg p-3">
          <p className="text-xs text-slate-400">Total Bonded</p>
          <p className="font-semibold text-white">{bondingStats.totalBonded}</p>
        </div>
        <div className="bg-slate-900/30 rounded-lg p-3">
          <p className="text-xs text-slate-400">Bonded Value</p>
          <p className="font-semibold text-white">{bondingStats.bondedValue}</p>
        </div>
        <div className="bg-slate-900/30 rounded-lg p-3">
          <p className="text-xs text-slate-400">My Bonded</p>
          <p className="font-semibold text-white">{bondingStats.myBonded}</p>
        </div>
        <div className="bg-slate-900/30 rounded-lg p-3">
          <p className="text-xs text-slate-400">My Rewards</p>
          <p className="font-semibold text-emerald-400">{bondingStats.myRewards}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-slate-900/30 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('bond')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${
            activeTab === 'bond'
              ? 'bg-emerald-500 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>Bond</span>
        </button>
        <button
          onClick={() => setActiveTab('unbond')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${
            activeTab === 'unbond'
              ? 'bg-emerald-500 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Unlock className="w-4 h-4" />
          <span>Unbond</span>
        </button>
      </div>

      {/* Bond Tab */}
      {activeTab === 'bond' && (
        <div className="space-y-6">
          {/* Bonding Pools */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Available Bonding Pools</h3>
            <div className="space-y-3">
              {bondingPools.map((pool, index) => (
                <div key={index} className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-700/50 rounded-lg">
                        <Zap className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{pool.name}</h4>
                        <p className="text-sm text-slate-400">{pool.rewards}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-emerald-400">{pool.apy}</p>
                      <p className="text-xs text-slate-400">APY</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="text-slate-400">TVL: <span className="text-white">{pool.tvl}</span></span>
                      <span className="text-slate-400">Risk: <span className={`${
                        pool.risk === 'Very Low' ? 'text-emerald-400' :
                        pool.risk === 'Low' ? 'text-yellow-400' :
                        pool.risk === 'Medium' ? 'text-orange-400' : 'text-red-400'
                      }`}>{pool.risk}</span></span>
                    </div>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-lg text-sm font-medium transition-colors">
                      Bond
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bond Input */}
          <div className="bg-slate-900/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm text-slate-400">Bond Amount</label>
              <span className="text-sm text-slate-400">Available: 5,432.10 RUNE</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                <span className="text-lg">⚡</span>
                <span className="font-medium text-white">RUNE</span>
              </div>
              <input
                type="text"
                value={bondAmount}
                onChange={(e) => setBondAmount(e.target.value)}
                placeholder="0.0"
                className="flex-1 bg-transparent text-xl text-white placeholder-slate-500 outline-none text-right"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-slate-500">≈ $0.00</span>
              <div className="flex space-x-2">
                <button className="text-xs text-emerald-400 hover:text-emerald-300">25%</button>
                <button className="text-xs text-emerald-400 hover:text-emerald-300">50%</button>
                <button className="text-xs text-emerald-400 hover:text-emerald-300">75%</button>
                <button className="text-xs text-emerald-400 hover:text-emerald-300">MAX</button>
              </div>
            </div>
          </div>

          {/* Bond Info */}
          <div className="bg-slate-900/30 rounded-lg p-4 space-y-2">
            <div className="flex items-center space-x-2 text-sm text-slate-400 mb-2">
              <Info className="w-4 h-4" />
              <span>Bonding Information</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Estimated APY</span>
              <span className="text-emerald-400">{bondingStats.currentAPY}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Unbonding Period</span>
              <span className="text-white">{bondingStats.unbondingPeriod}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Next Reward</span>
              <span className="text-white">{bondingStats.nextReward}</span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2">
            <Lock className="w-5 h-5" />
            <span>Bond RUNE</span>
          </button>
        </div>
      )}

      {/* Unbond Tab */}
      {activeTab === 'unbond' && (
        <div className="space-y-6">
          {/* My Bonded Positions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">My Bonded Positions</h3>
            <div className="space-y-3">
              <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-slate-700/50 rounded-lg">
                      <Shield className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">RUNE Staking</h4>
                      <p className="text-sm text-slate-400">Bonded 45 days ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">1,234.56 RUNE</p>
                    <p className="text-sm text-emerald-400">+45.23 rewards</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-400">Ready to unbond</span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-lg text-sm font-medium transition-colors">
                    Unbond
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Unbond Input */}
          <div className="bg-slate-900/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm text-slate-400">Unbond Amount</label>
              <span className="text-sm text-slate-400">Bonded: 1,234.56 RUNE</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                <span className="text-lg">⚡</span>
                <span className="font-medium text-white">RUNE</span>
              </div>
              <input
                type="text"
                value={unbondAmount}
                onChange={(e) => setUnbondAmount(e.target.value)}
                placeholder="0.0"
                className="flex-1 bg-transparent text-xl text-white placeholder-slate-500 outline-none text-right"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-slate-500">≈ $0.00</span>
              <div className="flex space-x-2">
                <button className="text-xs text-orange-400 hover:text-orange-300">25%</button>
                <button className="text-xs text-orange-400 hover:text-orange-300">50%</button>
                <button className="text-xs text-orange-400 hover:text-orange-300">75%</button>
                <button className="text-xs text-orange-400 hover:text-orange-300">MAX</button>
              </div>
            </div>
          </div>

          {/* Unbond Warning */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-orange-400 mb-2">
              <Info className="w-4 h-4" />
              <span className="font-medium">Unbonding Notice</span>
            </div>
            <p className="text-sm text-orange-300">
              Unbonding will initiate a {bondingStats.unbondingPeriod} waiting period. During this time, your RUNE will not earn rewards and cannot be transferred.
            </p>
          </div>

          <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2">
            <Unlock className="w-5 h-5" />
            <span>Initiate Unbonding</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default RUNEBond
