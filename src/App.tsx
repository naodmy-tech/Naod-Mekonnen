import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { AndroidStatusHeader } from './components/AndroidStatusHeader';
import { SplashScreen } from './components/SplashScreen';
import { WelcomeModal } from './components/WelcomeModal';
import { BottomNav } from './components/BottomNav';
import { HomeDashboard } from './components/HomeDashboard';
import { CourseMaterialsView } from './components/CourseMaterialsView';
import { PracticeQuestionsView } from './components/PracticeQuestionsView';
import { QuizView } from './components/QuizView';
import { LearningProgressView } from './components/LearningProgressView';
import { MoreHubView } from './components/MoreHubView';
import { InstallModal } from './components/InstallModal';
import { CheckCircle2, Smartphone } from 'lucide-react';

const AppContent: React.FC = () => {
  const { 
    activeTab, 
    showSplash, 
    setShowSplash, 
    settings, 
    toastMessage,
    isInstallModalOpen,
    setIsInstallModalOpen
  } = useApp();

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      <WelcomeModal />

      <InstallModal 
        isOpen={isInstallModalOpen} 
        onClose={() => setIsInstallModalOpen(false)} 
      />

      {/* Main Container: Full viewport or Realistic Android Frame */}
      <div className={`min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors ${
        settings.deviceFrame ? 'py-6 px-2 flex items-center justify-center' : ''
      }`}>
        <div className={`w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen relative flex flex-col ${
          settings.deviceFrame 
            ? 'max-w-md rounded-[48px] border-[10px] border-slate-900 shadow-2xl overflow-hidden min-h-[850px] ring-1 ring-slate-800'
            : ''
        }`}>
          {/* Android Frame Camera Notch */}
          {settings.deviceFrame && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-50 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
            </div>
          )}

          {/* Android Status & University Header */}
          <AndroidStatusHeader />

          {/* Active Tab Screen */}
          <main className="flex-1 overflow-x-hidden">
            {activeTab === 'home' && <HomeDashboard />}
            {activeTab === 'materials' && <CourseMaterialsView />}
            {activeTab === 'practice' && <PracticeQuestionsView />}
            {activeTab === 'quiz' && <QuizView />}
            {activeTab === 'progress' && <LearningProgressView />}
            {activeTab === 'more' && <MoreHubView />}
          </main>

          {/* Bottom Navigation */}
          <BottomNav />

          {/* Android Gesture Bar */}
          {settings.deviceFrame && (
            <div className="w-full py-1 bg-white dark:bg-slate-900 flex items-center justify-center fixed bottom-0 max-w-md pointer-events-none">
              <div className="w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
            </div>
          )}
        </div>
      </div>

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-slate-900/95 text-white dark:bg-white dark:text-slate-900 text-xs font-bold shadow-2xl flex items-center gap-2 border border-white/10 animate-fade-in max-w-xs text-center backdrop-blur-md">
          <CheckCircle2 size={16} className="text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <AppContent />
  );
}
