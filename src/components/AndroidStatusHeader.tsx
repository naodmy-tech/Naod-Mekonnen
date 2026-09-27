import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  WifiOff, 
  Battery, 
  Smartphone, 
  Monitor, 
  Search, 
  Moon, 
  Sun,
  GraduationCap,
  Download
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AndroidStatusHeader: React.FC = () => {
  const { settings, updateSettings, setActiveTab, setMoreSubTab, setIsInstallModalOpen } = useApp();
  const [time, setTime] = useState('11:30');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 30000);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600 text-white shadow-md">
      {/* Realistic Android Top Status Bar */}
      <div className="flex items-center justify-between px-4 py-1 text-xs font-mono bg-black/20 backdrop-blur-sm select-none">
        <span className="font-semibold tracking-wide">{time}</span>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <span className="flex items-center gap-1 text-[11px] text-sky-200">
              <Wifi size={13} className="text-emerald-300" />
              <span>4G</span>
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[11px] text-amber-300 bg-amber-900/60 px-1.5 py-0.5 rounded font-sans">
              <WifiOff size={12} />
              <span>Offline Mode</span>
            </span>
          )}
          <span className="flex items-center gap-1 text-[11px] text-sky-100">
            <span>88%</span>
            <Battery size={14} className="text-sky-200" />
          </span>
        </div>
      </div>

      {/* Main University & Course Identity Bar */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-inner">
            <GraduationCap className="text-sky-100" size={24} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-base font-extrabold tracking-tight text-white leading-tight">
                Accounting Information Systems
              </h1>
            </div>
            <p className="text-xs text-sky-100/90 font-medium">
              4th Year | Accounting &amp; Finance • Wollo University
            </p>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsInstallModalOpen(true)}
            title="Install on Mobile Phone"
            aria-label="Install App"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition-colors shadow-xs"
          >
            <Download size={14} className="animate-bounce" />
            <span className="hidden xs:inline">Install</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('more');
              setMoreSubTab('search');
            }}
            title="Global Search"
            aria-label="Search course content"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <Search size={18} />
          </button>
          
          <button
            onClick={() => updateSettings({ theme: settings.theme === 'light' ? 'dark' : 'light' })}
            title={settings.theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            {settings.theme === 'light' ? <Moon size={18} /> : <Sun size={18} className="text-amber-300" />}
          </button>

          <button
            onClick={() => updateSettings({ deviceFrame: !settings.deviceFrame })}
            title={settings.deviceFrame ? 'Switch to Responsive View' : 'Switch to Android Phone View'}
            aria-label="Toggle Phone Frame"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:flex items-center gap-1 text-xs font-semibold"
          >
            {settings.deviceFrame ? <Monitor size={17} /> : <Smartphone size={17} />}
            <span className="hidden md:inline">{settings.deviceFrame ? 'Responsive' : 'Android'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
