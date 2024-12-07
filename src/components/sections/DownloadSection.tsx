import React from 'react';
import { Download, MonitorDown, Shield, Lock } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download-section" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Download Selene</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started with Selene today. Our installer includes everything you need to start executing scripts safely.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <MonitorDown className="w-16 h-16 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Windows 10/11</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Version 2.1.0 | 14.2 MB</p>
            </div>
            <a href="https://www.mediafire.com/file/t52aixo2o0eaf1f/SeleneUI-win32-x64.rar" className="w-full flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Download for Windows
            </a>
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                <span>Virus Checked</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-4 h-4 mr-1" />
                <span>Secure Download</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}