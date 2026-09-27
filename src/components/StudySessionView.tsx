import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  Bell, 
  BrainCircuit, 
  BookOpen, 
  HelpCircle,
  Calendar,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { allChapters } from '../data';

export const StudySessionView: React.FC = () => {
  const { studyLogs, logStudySession, settings, updateSettings, showToast, setActiveTab, setSelectedChapterId, setReaderMode } = useApp();

  const [sessionChapter, setSessionChapter] = useState<number>(1);
  const [selectedPresetMinutes, setSelectedPresetMinutes] = useState<number>(25);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [questionsAnsweredInSession, setQuestionsAnsweredInSession] = useState<number>(0);

  // Reminders config
  const [reminderTime, setReminderTime] = useState<string>(settings.reminderTime || '19:00');
  const [reminderEnabled, setReminderEnabled] = useState<boolean>(settings.studyRemindersEnabled);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isActive && remainingSeconds > 0) {
      timer = setInterval(() => {
        setRemainingSeconds(prev => prev - 1);
      }, 1000);
    } else if (isActive && remainingSeconds === 0) {
      setIsActive(false);
      logStudySession(selectedPresetMinutes, sessionChapter, questionsAnsweredInSession, 'Pomodoro Timer');
      showToast('🎉 Study Session Completed! Great dedication to your degree.');
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, remainingSeconds]);

  const handleStartTimer = () => {
    setIsActive(true);
  };

  const handlePauseTimer = () => {
    setIsActive(false);
  };

  const handleResetTimer = (minutes: number) => {
    setIsActive(false);
    setSelectedPresetMinutes(minutes);
    setRemainingSeconds(minutes * 60);
  };

  const handleSaveReminder = () => {
    updateSettings({
      studyRemindersEnabled: reminderEnabled,
      reminderTime: reminderTime
    });
    if (reminderEnabled && 'Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          showToast(`Study reminder set daily at ${reminderTime} ✓`);
        } else {
          showToast(`Reminder saved locally at ${reminderTime}`);
        }
      });
    } else {
      showToast('Study reminder preferences updated.');
    }
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-700 via-cyan-600 to-sky-700 rounded-3xl p-6 text-white shadow-md">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
          <Clock size={14} />
          Focus &amp; Discipline
        </span>
        <h1 className="text-2xl font-black tracking-tight">Study Mode &amp; Reminders</h1>
        <p className="text-xs text-teal-100 mt-1 max-w-xl">
          Set structured study blocks, track focus durations, and schedule local offline reminders.
        </p>
      </div>

      {/* Main Focus Timer Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Active Study Session
          </span>

          <select
            value={sessionChapter}
            onChange={(e) => setSessionChapter(Number(e.target.value))}
            className="text-xs font-bold py-1.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            {allChapters.map(ch => (
              <option key={ch.id} value={ch.number}>
                Chapter {ch.number}
              </option>
            ))}
          </select>
        </div>

        {/* Timer Display */}
        <div className="relative w-48 h-48 mx-auto flex flex-col items-center justify-center rounded-full border-4 border-teal-500/20 bg-teal-50/50 dark:bg-slate-800/40">
          <span className="text-5xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
            {formatTimer(remainingSeconds)}
          </span>
          <span className="text-xs text-teal-700 dark:text-teal-400 font-bold mt-1">
            {isActive ? 'In Progress...' : 'Paused'}
          </span>
        </div>

        {/* Duration Presets */}
        <div className="flex items-center justify-center gap-2">
          {[15, 25, 45, 60].map((mins) => (
            <button
              key={mins}
              onClick={() => handleResetTimer(mins)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                selectedPresetMinutes === mins && !isActive
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {mins}m
            </button>
          ))}
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center gap-3">
          {isActive ? (
            <button
              onClick={handlePauseTimer}
              className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Pause size={16} />
              <span>Pause</span>
            </button>
          ) : (
            <button
              onClick={handleStartTimer}
              className="px-7 py-3 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-teal-500/25 cursor-pointer"
            >
              <Play size={16} />
              <span>Start Session</span>
            </button>
          )}

          <button
            onClick={() => handleResetTimer(selectedPresetMinutes)}
            className="p-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Reset Timer"
          >
            <RotateCcw size={16} />
          </button>
        </div>

        {/* Quick Launch Activities for this chapter */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-2 text-xs">
          <button
            onClick={() => {
              setSelectedChapterId(`ch${sessionChapter}`);
              setReaderMode('summary');
              setActiveTab('materials');
            }}
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5"
          >
            <BrainCircuit size={14} className="text-teal-600" />
            <span>Read Summary</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('practice');
            }}
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1.5"
          >
            <HelpCircle size={14} className="text-amber-500" />
            <span>Practice Questions</span>
          </button>
        </div>
      </div>

      {/* Local Study Reminder Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Bell size={20} />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Daily Study Reminder
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Receive local study prompts ("Time to continue your AIS study session.")
              </p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={reminderEnabled}
              onChange={(e) => setReminderEnabled(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
          </label>
        </div>

        {reminderEnabled && (
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Reminder Time:
              </span>
              <input
                type="time"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
                className="text-xs font-bold py-1.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
              />
            </div>

            <button
              onClick={handleSaveReminder}
              className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow"
            >
              Save Schedule
            </button>
          </div>
        )}
      </div>

      {/* Session History Log */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Calendar size={16} className="text-teal-600" />
          <span>Recent Study Sessions</span>
        </h3>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {studyLogs.slice(0, 5).map((log) => (
            <div key={log.id} className="py-2.5 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  Chapter {log.chapterNumber} ({log.mode})
                </span>
                <span className="text-slate-400 text-[11px] block">
                  {log.date} • {log.questionsAnswered} questions practiced
                </span>
              </div>
              <span className="font-black text-teal-700 dark:text-teal-400">
                {log.durationMinutes} mins
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
