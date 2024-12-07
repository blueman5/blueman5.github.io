import React from 'react';
import { Star, Zap, Shield } from 'lucide-react';

interface RatingCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const RatingCard: React.FC<RatingCardProps> = ({ icon, title, value, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-900 group">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/50 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
        {icon}
      </div>
      <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
        {value}
      </span>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
  </div>
);

export default function RatingCards() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RatingCard
            icon={<Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
            title="Execution Level"
            value="8"
            description="Advanced script execution capabilities with high compatibility, max possible is 8"
          />
          <RatingCard
            icon={<Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
            title="Performance Rating"
            value="10"
            description="Lightning-fast execution speed with minimal impact on game performance"
          />
          <RatingCard
            icon={<Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
            title="Security Score"
            value="10"
            description="Top-tier security measures to protect your account and data"
          />
        </div>
      </div>
    </section>
  );
}