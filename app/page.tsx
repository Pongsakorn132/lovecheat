'use client';

import Link from 'next/link';
import { Download, Shield, Settings, HelpCircle, Sparkles, Clock, Monitor } from 'lucide-react';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  const guides = [
    {
      id: 'directx',
      title: 'ติดตั้ง DirectX',
      description: 'แก้ปัญหาเกมหรือโปรแกรมที่ต้องการ DirectX',
      icon: Download,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      id: 'vcruntime',
      title: 'ติดตั้ง Visual C++ Runtime',
      description: 'แก้ปัญหา DLL หายไปด้วย All-in-One Package',
      icon: Settings,
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 'antivirus',
      title: 'ปิดแอนตี้ไวรัสถาวร',
      description: 'ปิด Windows Defender ถาวรด้วย Dcontrol Sordum',
      icon: Shield,
      gradient: 'from-sky-500 to-sky-600',
    },
    {
      id: 'hvci',
      title: 'เปิด/ปิด HVCI',
      description: 'วิธีเปิดปิด Memory Integrity (HVCI) แบบปกติและคำสั่ง',
      icon: Sparkles,
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      id: 'ghost-spectre',
      title: 'Ghost Spectre Windows',
      description: 'Windows สำหรับสายเกม ลื่น FPS นิ่ง ไม่จุกจิก',
      icon: Sparkles,
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      id: 'sync-time',
      title: 'Sync Time - ตั้งเวลา',
      description: 'แก้ปัญหาเวลาคอมพิวเตอร์ไม่ตรง',
      icon: Clock,
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      id: 'chrome-download',
      title: 'แก้ Chrome บล็อกดาวน์โหลด',
      description: 'วิธีแก้เมื่อ Chrome บล็อกการดาวน์โหลดไฟล์',
      icon: Download,
      gradient: 'from-red-500 to-orange-500',
    },
    {
      id: 'remote-assistance',
      title: 'บริการช่วยเหลือรีโมท',
      description: 'ขอความช่วยเหลือผ่าน AnyDesk',
      icon: Monitor,
      gradient: 'from-teal-500 to-cyan-600',
    },
    {
      id: 'basic-troubleshooting',
      title: 'แก้ปัญหาเบื้องต้น',
      description: 'ขั้นตอนพื้นฐานในการแก้ปัญหาคอมพิวเตอร์',
      icon: HelpCircle,
      gradient: 'from-blue-600 to-blue-700',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 -z-10"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tight drop-shadow-2xl">
                LOVECHEAT
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-cyan-300 blur-2xl opacity-40 -z-10"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-lg">
            ศูนย์ช่วยเหลือแก้ปัญหาคอมพิวเตอร์ครบวงจร
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/80">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">คู่มือแก้ปัญหาที่คุณต้องการ</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Link
                key={guide.id}
                href={`/guides/${guide.id}`}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Card */}
                <div className="relative h-full bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-blue-200/50 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/30">
                  {/* Gradient Icon Background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${guide.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed mb-4 font-medium">
                    {guide.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors">
                    <span>อ่านคู่มือ</span>
                    <svg 
                      className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/5 group-hover:to-cyan-400/5 transition-all duration-300 -z-10"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="text-center mt-20">
          <a 
            href="https://discord.gg/hb2FY8H6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/95 backdrop-blur-xl rounded-full border border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <svg className="w-6 h-6 text-[#5865F2] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">เข้าร่วม Discord</p>
              <p className="text-xs text-gray-600">© 2026 LOVECHEAT</p>
            </div>
            <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
