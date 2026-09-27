import React, { useState } from 'react';
import { 
  Settings, 
  Moon, 
  Sun, 
  Type, 
  Bell, 
  HardDrive, 
  RotateCcw, 
  Trash2, 
  AlertTriangle, 
  Info,
  Smartphone,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SettingsView: React.FC = () => {
  const { 
    settings, 
    updateSettings, 
    downloadedChapters, 
    clearAllDownloads, 
    resetAllProgress, 
    resetQuizHistory,
    setActiveTab,
    setMoreSubTab
  } = useApp();

  const [confirmModal, setConfirmModal] = useState<'reset_progress' | 'reset_quiz' | 'clear_storage' | null>(null);

  const handleConfirmAction = () => {
    if (confirmModal === 'reset_progress') {
      resetAllProgress();
    } else if (confirmModal === 'reset_quiz') {
      resetQuizHistory();
    } else if (confirmModal === 'clear_storage') {
      clearAllDownloads();
    }
    setConfirmModal(null);
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
          <Settings size={14} />
          Preferences &amp; Diagnostics
        </span>
        <h1 className="text-2xl font-black tracking-tight">Application Settings</h1>
        <p className="text-xs text-slate-300 mt-1">
          Customize reading typography, appearance, study reminder schedules, and manage offline data.
        </p>
      </div>

      {/* Confirmation Modal */}
      {confirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 mx-auto flex items-center justify-center">
              <AlertTriangle size={24} />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                {confirmModal === 'reset_progress' ? 'Reset Course Reading Progress?' : confirmModal === 'reset_quiz' ? 'Reset All Quiz Records?' : 'Clear Offline Downloaded Cache?'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {confirmModal === 'reset_progress'
                  ? 'This will reset your chapter reading status and completion marks to 0%. This action cannot be undone.'
                  : confirmModal === 'reset_quiz'
                  ? 'All historical quiz scores, attempts, and percentage metrics will be wiped.'
                  : 'All downloaded course outline and chapter PDF materials will be removed from local storage.'}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setConfirmModal(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAction}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs shadow hover:bg-rose-500"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 1. Reading & Appearance */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Type size={14} />
          <span>Reading &amp; Appearance</span>
        </h2>

        {/* Theme mode */}
        <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Theme Palette</span>
            <span className="text-[11px] text-slate-500">Switch between light educational theme and dark night mode</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => updateSettings({ theme: 'light' })}
              className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                settings.theme === 'light' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              <Sun size={14} className="text-amber-500" />
              <span>Light</span>
            </button>
            <button
              onClick={() => updateSettings({ theme: 'dark' })}
              className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                settings.theme === 'dark' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500'
              }`}
            >
              <Moon size={14} className="text-sky-400" />
              <span>Dark</span>
            </button>
          </div>
        </div>

        {/* Font size */}
        <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Text Font Size</span>
            <span className="text-[11px] text-slate-500">Adjust text size in lecture reading mode</span>
          </div>
          <div className="flex items-center gap-1">
            {(['small', 'medium', 'large', 'xlarge'] as const).map(size => (
              <button
                key={size}
                onClick={() => updateSettings({ fontSize: size })}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase ${
                  settings.fontSize === size
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {size === 'small' ? 'S' : size === 'medium' ? 'M' : size === 'large' ? 'L' : 'XL'}
              </button>
            ))}
          </div>
        </div>

        {/* Android Frame Mode */}
        <div className="flex items-center justify-between py-2">
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Android Device Frame View</span>
            <span className="text-[11px] text-slate-500">View inside realistic Android phone bezel with notch</span>
          </div>
          <button
            onClick={() => updateSettings({ deviceFrame: !settings.deviceFrame })}
            className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 ${
              settings.deviceFrame
                ? 'bg-sky-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <Smartphone size={16} />
            <span>{settings.deviceFrame ? 'Enabled' : 'Disabled'}</span>
          </button>
        </div>
      </div>

      {/* 2. Notifications & Reminders */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Bell size={14} />
          <span>Study Reminders</span>
        </h2>

        <div className="flex items-center justify-between py-2">
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Study Reminders</span>
            <span className="text-[11px] text-slate-500">Local notifications to maintain your daily study streak</span>
          </div>
          <button
            onClick={() => updateSettings({ studyRemindersEnabled: !settings.studyRemindersEnabled })}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
              settings.studyRemindersEnabled
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
            }`}
          >
            {settings.studyRemindersEnabled ? 'Enabled ✓' : 'Disabled'}
          </button>
        </div>
      </div>

      {/* 3. Local Storage */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <HardDrive size={14} />
          <span>Device Storage &amp; Cache</span>
        </h2>

        <div className="flex items-center justify-between py-2">
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Offline Course Materials</span>
            <span className="text-[11px] text-slate-500">{downloadedChapters.length} cached documents (~16.2 MB)</span>
          </div>
          {downloadedChapters.length > 0 && (
            <button
              onClick={() => setConfirmModal('clear_storage')}
              className="px-3 py-1.5 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50"
            >
              Clear Cache
            </button>
          )}
        </div>
      </div>

      {/* 4. Reset & Data Management */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
          <RotateCcw size={14} />
          <span>Data Reset (Destructive Actions)</span>
        </h2>

        <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Reset Reading Progress</span>
            <span className="text-[11px] text-slate-500">Reset chapter reading percentage and bookmarks</span>
          </div>
          <button
            onClick={() => setConfirmModal('reset_progress')}
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-100 hover:text-rose-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors"
          >
            Reset Progress
          </button>
        </div>

        <div className="flex items-center justify-between py-2">
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Reset Quiz History</span>
            <span className="text-[11px] text-slate-500">Erase all scores, percentages, and quiz logs</span>
          </div>
          <button
            onClick={() => setConfirmModal('reset_quiz')}
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-100 hover:text-rose-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors"
          >
            Reset History
          </button>
        </div>
      </div>

      {/* 5. Navigation to About */}
      <div className="text-center pt-2">
        <button
          onClick={() => {
            setActiveTab('more');
            setMoreSubTab('about');
          }}
          className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center justify-center gap-1 mx-auto"
        >
          <Info size={14} />
          <span>View Course &amp; Developer Information (Dr. Naod Mekonnen)</span>
        </button>
      </div>
    </div>
  );
};
