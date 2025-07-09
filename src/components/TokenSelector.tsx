import React, { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'

interface Token {
  symbol: string
  name: string
  logo: string
  balance?: string
  price?: string
}

interface TokenSelectorProps {
  token: Token
  onTokenChange: (token: Token) => void
}

const tokens: Token[] = [
  { symbol: 'RUNE', name: 'THORChain', logo: '⚡', balance: '1,234.56', price: '$4.25' },
  { symbol: 'BTC', name: 'Bitcoin', logo: '₿', balance: '0.5432', price: '$43,250' },
  { symbol: 'ETH', name: 'Ethereum', logo: 'Ξ', balance: '12.34', price: '$2,650' },
  { symbol: 'BNB', name: 'BNB Chain', logo: '🔶', balance: '45.67', price: '$315' },
  { symbol: 'AVAX', name: 'Avalanche', logo: '🔺', balance: '89.12', price: '$28' },
  { symbol: 'ATOM', name: 'Cosmos', logo: '⚛️', balance: '234.56', price: '$12.50' },
  { symbol: 'LTC', name: 'Litecoin', logo: 'Ł', balance: '8.91', price: '$95' },
  { symbol: 'BCH', name: 'Bitcoin Cash', logo: '₿', balance: '3.45', price: '$285' },
  { symbol: 'DOGE', name: 'Dogecoin', logo: 'Ð', balance: '12,345', price: '$0.08' }
]

const TokenSelector: React.FC<TokenSelectorProps> = ({ token, onTokenChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTokens = tokens.filter(t => 
    t.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 rounded-lg px-3 py-2 transition-colors border border-slate-600"
      >
        <span className="text-lg">{token.logo}</span>
        <span className="font-medium text-white">{token.symbol}</span>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-xl border border-slate-700 shadow-xl z-50">
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search tokens..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
              />
            </div>
            
            <div className="max-h-64 overflow-y-auto space-y-1">
              {filteredTokens.map((t) => (
                <button
                  key={t.symbol}
                  onClick={() => {
                    onTokenChange(t)
                    setIsOpen(false)
                    setSearchTerm('')
                  }}
                  className="w-full flex items-center justify-between p-3 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{t.logo}</span>
                    <div className="text-left">
                      <div className="font-medium text-white">{t.symbol}</div>
                      <div className="text-sm text-slate-400">{t.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white">{t.balance}</div>
                    <div className="text-xs text-slate-400">{t.price}</div>
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
