import React, { useState } from 'react'
import { ArrowUpDown, Settings, Info, Zap } from 'lucide-react'
import TokenSelector from './TokenSelector'
import SwapButton from './SwapButton'

interface SwapInterfaceProps {
  isConnected: boolean
}

const SwapInterface: React.FC<SwapInterfaceProps> = ({ isConnected }) => {
  const [fromToken, setFromToken] = useState({ symbol: 'BTC', name: 'Bitcoin', logo: '₿' })
  const [toToken, setToToken] = useState({ symbol: 'ETH', name: 'Ethereum', logo: 'Ξ' })
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [slippage, setSlippage] = useState('1.0')

  const handleSwapTokens = () => {
    const temp = fromToken
    setFromToken(toToken)
    setToToken(temp)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    // Simulate exchange rate calculation
    if (value) {
      const rate = fromToken.symbol === 'BTC' ? 15.5 : 0.065
      setToAmount((parseFloat(value) * rate).toFixed(6))
    } else {
      setToAmount('')
    }
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Swap</h2>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Info className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* From Token */}
        <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm text-slate-400">From</label>
            <span className="text-sm text-slate-400">Balance: 0.00</span>
          </div>
          <div className="flex items-center space-x-4">
            <TokenSelector
              token={fromToken}
              onTokenChange={setFromToken}
            />
            <input
              type="text"
              value={fromAmount}
              onChange={(e) => handleFromAmountChange(e.target.value)}
              placeholder="0.0"
              className="flex-1 bg-transparent text-2xl text-white placeholder-slate-500 outline-none text-right"
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-slate-500">≈ $0.00</span>
            <button className="text-xs text-emerald-400 hover:text-emerald-300">MAX</button>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSwapTokens}
            className="p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors border border-slate-600"
          >
            <ArrowUpDown className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {/* To Token */}
        <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm text-slate-400">To</label>
            <span className="text-sm text-slate-400">Balance: 0.00</span>
          </div>
          <div className="flex items-center space-x-4">
            <TokenSelector
              token={toToken}
              onTokenChange={setToToken}
            />
            <input
              type="text"
              value={toAmount}
              readOnly
              placeholder="0.0"
              className="flex-1 bg-transparent text-2xl text-white placeholder-slate-500 outline-none text-right"
            />
          </div>
          <div className="text-xs text-slate-500 mt-2 text-right">≈ $0.00</div>
        </div>

        {/* Swap Details */}
        {fromAmount && toAmount && (
          <div className="bg-slate-900/30 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Rate</span>
              <span className="text-white">1 {fromToken.symbol} = {(parseFloat(toAmount) / parseFloat(fromAmount)).toFixed(6)} {toToken.symbol}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Network Fee</span>
              <span className="text-white">~$2.50</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Price Impact</span>
              <span className="text-emerald-400">0.05%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Slippage Tolerance</span>
              <span className="text-white">{slippage}%</span>
            </div>
          </div>
        )}

        {/* Swap Action Button */}
        <SwapButton
          isConnected={isConnected}
          fromAmount={fromAmount}
          fromToken={fromToken.symbol}
          toToken={toToken.symbol}
        />

        {/* THORChain Info */}
        <div className="flex items-center justify-center space-x-2 text-sm text-slate-400 pt-4">
          <Zap className="w-4 h-4" />
          <span>Powered by THORChain cross-chain liquidity protocol</span>
        </div>
      </div>
    </div>
  )
}

export default SwapInterface
