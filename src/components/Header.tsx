import React from 'react'
import { Zap, Menu, X, Globe, Settings } from 'lucide-react'

interface HeaderProps {
  isConnected: boolean
  setIsConnected: (connected: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ isConnected, setIsConnected }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">THORChain</h1>
              <p className="text-xs text-slate-400">Cross-Chain Liquidity</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Swap</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Pools</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Analytics</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Docs</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsConnected(!isConnected)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isConnected
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {isConnected ? 'Connected' : 'Connect Wallet'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Swap</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Pools</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Analytics</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Docs</a>
              <button
                onClick={() => setIsConnected(!isConnected)}
                className={`px-4 py-2 rounded-lg font-medium transition-all text-left ${
                  isConnected
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {isConnected ? 'Connected' : 'Connect Wallet'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
