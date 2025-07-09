import React, { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'

interface Token {
  symbol: string
  name: string
  logo: string
}

interface TokenSelectorProps {
  token: Token
  onTokenChange: (token: Token) => void
}

const tokens: Token[] = [
  { symbol: 'BTC', name: 'Bitcoin', logo: '₿' },
  { symbol: 'ETH', name: 'Ethereum', logo: 'Ξ' },
  { symbol: 'BNB', name: 'BNB Chain', logo: '🔶' },
  { symbol: 'AVAX', name: 'Avalanche', logo: '🔺' },
  { symbol: 'ATOM', name: 'Cosmos', logo: '⚛️' },
  { symbol: 'LTC', name: 'Litecoin', logo: 'Ł' },
  { symbol: 'BCH', name: 'Bitcoin Cash', logo: '₿' },
  { symbol: 'DOGE', name: 'Dogecoin', logo: 'Ð' },
]

const TokenSelector: React.FC<TokenSelectorProps> = ({ token, onTokenChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTokens = tokens.filter(t =>
    t.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleTokenSelect = (selectedToken: Token) => {
    onTokenChange(selectedToken)
    setIsOpen(false)
    setSearchTerm('')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg px-3 py-2 transition-colors"
      >
        <span className="text-2xl">{token.logo}</span>
        <div className="text-left">
          <div className="text-white font-medium">{token.symbol}</div>
          <div className="text-xs text-slate-400">{token.name}</div>
        </div>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-xl border border-slate-700 shadow-xl z-50">
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tokens..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 outline-none focus:border-emerald-500"
              />
            </div>
            
            <div className="max-h-60 overflow-y-auto">
              {filteredTokens.map((t) => (
                <button
                  key={t.symbol}
                  onClick={() => handleTokenSelect(t)}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <span className="text-2xl">{t.logo}</span>
                  <div className="text-left">
                    <div className="text-white font-medium">{t.symbol}</div>
                    <div className="text-sm text-slate-400">{t.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TokenSelector
