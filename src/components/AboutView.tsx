import React from 'react';
import { 
  Info, 
  GraduationCap, 
  Mail, 
  Phone, 
  UserCheck, 
  ShieldCheck, 
  Download, 
  Smartphone, 
  ExternalLink,
  BookOpen,
  Calendar
} from 'lucide-react';
import { officialCourseOutline } from '../data';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto px-4 pt-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-800 via-sky-700 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl text-center relative overflow-hidden">
        <div className="w-16 h-16 rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 mx-auto flex items-center justify-center mb-3 shadow-inner">
          <GraduationCap size={34} className="text-sky-200" />
        </div>
        <span className="text-xs uppercase font-extrabold tracking-widest text-sky-200">
          Wollo University • College of Business and Economics
        </span>
        <h1 className="text-2xl sm:text-3xl font-black mt-1 leading-snug">
          Accounting Information Systems
        </h1>
        <p className="text-xs sm:text-sm text-sky-100 mt-1 font-medium">
          Fourth Year Accounting and Finance • Course Code: AcFn 4121
        </p>
        <div className="inline-block mt-3 px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wider">
          Academic Year: 2026 (2019 E.C.) • Semester I
        </div>
      </div>

      {/* Developer & Instructor Profile Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <UserCheck size={20} className="text-sky-600 dark:text-sky-400" />
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
            Course Instructor &amp; Developer Information
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-sky-500/20 shrink-0">
            NM
          </div>
          <div className="text-center sm:text-left space-y-1.5 flex-1">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              Naod Mekonnen (PhD)
            </h3>
            <p className="text-xs text-sky-700 dark:text-sky-300 font-semibold">
              Senior Lecturer &amp; Assistant Professor
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Department of Accounting and Finance • College of Business and Economics
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Wollo University, Dessie, Ethiopia
            </p>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <a
            href="mailto:naodmy@gmail.com"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-sky-50 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700 hover:bg-sky-100 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
              <Mail size={18} />
            </div>
            <div className="truncate">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Direct Email</span>
              <span className="text-xs font-bold text-sky-700 dark:text-sky-300 truncate">
                naodmy@gmail.com
              </span>
            </div>
          </a>

          <a
            href="tel:+251911079315"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-cyan-50 dark:bg-slate-800/80 border border-cyan-100 dark:border-slate-700 hover:bg-cyan-100 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Telephone / Mobile</span>
              <span className="text-xs font-bold text-cyan-800 dark:text-cyan-300">
                +251 911 079 315
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* APK & System Technical Specifications */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Smartphone size={16} className="text-sky-600" />
          <span>Android Application &amp; APK Specifications</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center">
            <span className="text-slate-400 text-[10px] uppercase block font-semibold">App Title</span>
            <span className="font-extrabold text-slate-800 dark:text-slate-100">Wollo AIS</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center">
            <span className="text-slate-400 text-[10px] uppercase block font-semibold">Package ID</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400 text-[11px]">et.edu.wu.ais</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center">
            <span className="text-slate-400 text-[10px] uppercase block font-semibold">Version</span>
            <span className="font-extrabold text-slate-800 dark:text-slate-100">v1.0 (Release)</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center">
            <span className="text-slate-400 text-[10px] uppercase block font-semibold">Target SDK</span>
            <span className="font-extrabold text-slate-800 dark:text-slate-100">Android 14 / API 34</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
          Designed specifically for university students with low-bandwidth or offline environments. All course documents, diagrams, summaries, flashcards, and question banks are embedded locally into client storage.
        </p>
      </div>

      {/* Copyright & Academic Use Notice */}
      <div className="p-5 rounded-3xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center text-xs text-slate-600 dark:text-slate-400 space-y-2">
        <p className="font-bold text-slate-800 dark:text-slate-200">
          © 2026 Wollo University • Department of Accounting and Finance
        </p>
        <p className="leading-relaxed">
          Developed for educational instructional purposes for fourth-year undergraduate students enrolled in Accounting Information Systems (AcFn 4121). All course curriculum materials reflect official departmental syllabi.
        </p>
      </div>
    </div>
  );
};
