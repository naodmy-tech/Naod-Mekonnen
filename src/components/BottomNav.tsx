import React from 'react';
import { Home, BookOpen, HelpCircle, BarChart3, Menu } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NavTab } from '../types';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, bookmarks, notes } = useApp();

  const navItems: { tab: NavTab; label: string; icon: React.FC<{ size: number; className?: string }>; badgeCount?: number }[] = [
    { tab: 'home', label: 'Home', icon: Home },
    { tab: 'materials', label: 'Materials', icon: BookOpen },
    { tab: 'practice', label: 'Practice', icon: HelpCircle },
    { tab: 'progress', label: 'Progress', icon: BarChart3 },
    { tab: 'more', label: 'More', icon: Menu, badgeCount: bookmarks.length + notes.length > 0 ? bookmarks.length + notes.length : undefined },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg select-none">
      <div className="max-w-md mx-auto flex items-center justify-around px-2 py-1.5">
        {navItems.map((item) => {
          const isActive = activeTab === item.tab;
          const Icon = item.icon;
          return (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              {isActive && (
                <span className="absolute -top-1.5 w-8 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full" />
              )}
              
              <div className="relative">
                <Icon size={21} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />
                {item.badgeCount !== undefined && item.badgeCount > 0 && (
                  <span className="absolute -top-1 -right-2 px-1 min-w-[15px] h-[15px] rounded-full bg-cyan-600 text-white text-[9px] font-extrabold flex items-center justify-center">
                    {item.badgeCount > 9 ? '9+' : item.badgeCount}
                  </span>
                )}
              </div>

              <span className="text-[11px] mt-0.5 tracking-tight font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
