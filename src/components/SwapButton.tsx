import React from 'react'
import { ArrowRight, Wallet } from 'lucide-react'

interface SwapButtonProps {
  isConnected: boolean
  fromAmount: string
  fromToken: string
  toToken: string
}

const SwapButton: React.FC<SwapButtonProps> = ({ isConnected, fromAmount, fromToken, toToken }) => {
  if (!isConnected) {
    return (
      <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2">
        <Wallet className="w-5 h-5" />
        <span>Connect Wallet to Swap</span>
      </button>
    )
  }

  if (!fromAmount) {
    return (
      <button 
        disabled
        className="w-full bg-slate-700 text-slate-400 font-semibold py-4 px-6 rounded-xl cursor-not-allowed"
      >
        Enter Amount
      </button>
    )
  }

  return (
    <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2">
      <span>Swap {fromToken} for {toToken}</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  )
}

export default SwapButton
