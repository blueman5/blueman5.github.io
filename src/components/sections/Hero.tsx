import React from 'react';
import { Download, MessageCircle } from 'lucide-react';  // MessageCircle as a placeholder for Discord

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 dark:from-purple-900 dark:via-purple-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-8">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse bg-purple-300 dark:bg-purple-700 rounded-full blur-xl opacity-50"></div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 relative hover:scale-105 transition-transform duration-300">
                Selene
              </h1>
            </div>
          </div>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            The most powerful and secure Roblox script executor. Execute scripts with confidence using our advanced security system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#download-section"
              className="inline-flex items-center px-6 py-3 bg-white/90 hover:bg-white text-purple-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg hover:shadow-purple-500/25"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </a>
            <a
              href="https://discord.gg/getselene"
              className="inline-flex items-center px-6 py-3 bg-purple-700/90 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg hover:shadow-purple-900/25"
            >
              {/* MessageCircle as a placeholder for Discord */}
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
