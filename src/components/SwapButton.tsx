import React, { useState } from 'react'
import { Loader2, CheckCircle } from 'lucide-react'

interface SwapButtonProps {
  isConnected: boolean
  fromAmount: string
  fromToken: string
  toToken: string
}

const SwapButton: React.FC<SwapButtonProps> = ({ isConnected, fromAmount, fromToken, toToken }) => {
  const [isSwapping, setIsSwapping] = useState(false)
  const [swapComplete, setSwapComplete] = useState(false)

  const handleSwap = async () => {
    setIsSwapping(true)
    
    // Simulate swap process
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setIsSwapping(false)
    setSwapComplete(true)
    
    // Reset after 2 seconds
    setTimeout(() => setSwapComplete(false), 2000)
  }

  const getButtonText = () => {
    if (!isConnected) return 'Connect Wallet'
    if (!fromAmount) return 'Enter Amount'
    if (isSwapping) return 'Swapping...'
    if (swapComplete) return 'Swap Complete!'
    return `Swap ${fromToken} for ${toToken}`
  }

  const getButtonStyle = () => {
    if (swapComplete) return 'bg-emerald-500 hover:bg-emerald-600'
    if (!isConnected || !fromAmount) return 'bg-slate-600 cursor-not-allowed'
    return 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600'
  }

  const isDisabled = !isConnected || !fromAmount || isSwapping

  return (
    <button
      onClick={handleSwap}
      disabled={isDisabled}
      className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${getButtonStyle()} ${
        isDisabled ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-center justify-center space-x-2">
        {isSwapping && <Loader2 className="w-5 h-5 animate-spin" />}
        {swapComplete && <CheckCircle className="w-5 h-5" />}
        <span>{getButtonText()}</span>
      </div>
    </button>
  )
}

export default SwapButton
