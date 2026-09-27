import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { 
  Smartphone, 
  Download, 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Share2, 
  ShieldCheck, 
  Layers, 
  CheckCircle,
  HelpCircle,
  QrCode
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useApp } from '../context/AppContext';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, install, isIOS, isAndroid } = usePWAInstall();
  const { showToast } = useApp();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'scan' | 'android' | 'ios' | 'apk'>('android');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Use the canonical production shared URL
  const appUrl = 'https://ais-pre-sq6i6ils4nudpkkwo6w3rx-338310127347.europe-west1.run.app';

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        appUrl,
        {
          width: 180,
          margin: 1,
          color: {
            dark: '#0369a1',
            light: '#ffffff'
          }
        },
        (error) => {
          if (error) console.error(error);
        }
      );
    }
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(appUrl);
    setCopied(true);
    showToast('App URL copied to clipboard! Paste it into your mobile browser.');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTriggerInstall = async () => {
    const success = await install();
    if (success) {
      showToast('Wollo AIS installed on your device! Check your home screen.');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 p-5 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <Smartphone className="text-white" size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-100">
                Wollo University • Mobile Setup
              </span>
              <h2 className="text-lg font-black text-white leading-tight">
                Install Wollo AIS on Your Phone
              </h2>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 text-xs font-bold bg-slate-50 dark:bg-slate-900/60 shrink-0">
          <button
            onClick={() => setActiveTab('android')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'android'
                ? 'border-sky-600 text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Android (Chrome)
          </button>
          <button
            onClick={() => setActiveTab('scan')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'scan'
                ? 'border-sky-600 text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Scan QR Code
          </button>
          <button
            onClick={() => setActiveTab('ios')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'ios'
                ? 'border-sky-600 text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            iPhone / iPad
          </button>
          <button
            onClick={() => setActiveTab('apk')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'apk'
                ? 'border-sky-600 text-sky-600 dark:text-sky-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            APK Build
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 space-y-4 overflow-y-auto text-xs text-slate-700 dark:text-slate-300">
          {/* Quick Install Banner if browser supports prompt */}
          {isInstallable && !isInstalled && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 dark:bg-slate-800 border-2 border-sky-400 flex items-center justify-between gap-3">
              <div>
                <p className="font-extrabold text-sky-900 dark:text-white text-xs">
                  Ready for Instant Install!
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Your current browser supports 1-click installation.
                </p>
              </div>
              <button
                onClick={handleTriggerInstall}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-500/20 shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <Download size={14} />
                <span>Install Now</span>
              </button>
            </div>
          )}

          {/* TAB 1: ANDROID INSTRUCTIONS */}
          {activeTab === 'android' && (
            <div className="space-y-3.5">
              <div className="p-3 rounded-2xl bg-sky-50 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700 flex items-center gap-2">
                <CheckCircle className="text-sky-600 shrink-0" size={16} />
                <span className="font-medium text-[11px]">
                  Installs as a standalone Android app with the official <strong>Wollo AIS</strong> icon and 100% offline access.
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Open the link in Google Chrome</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      On your Android phone, open <strong>Chrome</strong> (or Samsung Internet) and visit the course URL.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Tap the Chrome Menu (⋮)</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Tap the three vertical dots <strong>(⋮)</strong> located at the top-right corner of Chrome.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Select "Install app" or "Add to Home screen"</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Chrome will show a prompt with the Wollo AIS emblem. Tap <strong>"Install"</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Done! Launch anytime from your App Drawer</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      The app launches in full screen without address bars and works without an internet connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: QR CODE SCAN */}
          {activeTab === 'scan' && (
            <div className="space-y-4 text-center">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Point your phone's camera at this QR code to open the application directly:
              </p>

              <div className="p-4 rounded-3xl bg-white shadow-inner border border-slate-200 inline-block mx-auto">
                <canvas ref={canvasRef} className="mx-auto" />
              </div>

              <p className="text-[11px] text-slate-500">
                Scan with your phone camera, QR scanner, or Google Lens.
              </p>
            </div>
          )}

          {/* TAB 3: IOS INSTRUCTIONS */}
          {activeTab === 'ios' && (
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Open in Apple Safari</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Navigate to the app URL inside the Safari browser on your iPhone or iPad.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Tap the Share Icon</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Tap the <strong>Share</strong> button (the square with an arrow pointing upward) at the bottom toolbar.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Select "Add to Home Screen"</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Scroll down the share sheet and tap <strong>"Add to Home Screen"</strong>, then tap <strong>"Add"</strong> in the top-right.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: STANDALONE APK COMPILATION */}
          {activeTab === 'apk' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                If you wish to compile a standalone <strong>.apk</strong> file for sideloading or flash drive sharing, the project is configured with package ID <strong>et.edu.wu.ais</strong>:
              </p>

              <div className="p-3 rounded-2xl bg-slate-900 text-slate-200 font-mono text-[11px] space-y-1">
                <div className="text-slate-400"># Option A: Convert to Android APK using Bubblewrap (TWA)</div>
                <div>npx @bubblewrap/cli init --manifest={appUrl}/manifest.webmanifest</div>
                <div>npx @bubblewrap/cli build</div>
                <div className="pt-2 text-slate-400"># Option B: Build with Capacitor</div>
                <div>npm install @capacitor/core @capacitor/cli @capacitor/android</div>
                <div>npx cap init "Wollo AIS" "et.edu.wu.ais"</div>
                <div>npm run build && npx cap add android && npx cap copy</div>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300">
                <strong>Recommendation:</strong> Installing directly via Chrome (WebAPK) offers the exact same native capabilities, auto-updates, offline persistence, and zero compilation complexity!
              </div>
            </div>
          )}

          {/* Share & Copy Link Bar */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block">
              Direct Application URL:
            </span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={appUrl}
                className="flex-1 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-[11px] font-mono select-all truncate"
              />
              <button
                onClick={handleCopyLink}
                className="px-3.5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs flex items-center gap-1.5 shrink-0 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy Link'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
