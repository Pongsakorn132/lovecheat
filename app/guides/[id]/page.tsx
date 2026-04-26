import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink, AlertTriangle } from 'lucide-react';
import ParticlesBackground from '@/components/ParticlesBackground';

const guidesData: Record<string, any> = {
  'ghost-spectre': {
    title: '💻 Ghost Spectre Windows (รุ่น Def)',
    description: 'Windows สำหรับสายเกม ลื่น FPS นิ่ง ไม่มีปัญหาจุกจิก แนะนำรุ่น Def (มี Defender)',
    warning: 'คำเตือนสำคัญ: การลง Windows ใหม่จะทำให้ข้อมูลหายเกลี้ยง! อย่าลืมแบ็คอัพงานหรือรูปสำคัญไว้ใน Drive อื่นก่อนลงนะ!',
    steps: [
      {
        title: '🔥 ทำไมต้องรุ่น "Def"?',
        content: '✅ เสถียรกว่า: รุ่น Def จะยังมีไฟล์ระบบของ Windows Defender ครบ ทำให้ไม่มีปัญหาเวลาเปิดโปรแกรมบางตัวที่เรียกหาไฟล์ความปลอดภัย\n\n✅ สั่งเปิด-ปิดได้เอง: เรามีเครื่องมือ Defender Control ไว้คอยสั่ง "ปิดถาวร" ได้เอง 100% ทำให้ไม่ต้องกลัวโดนแอบลบไฟล์\n\n✅ โคตรลื่น: ตัด Service ขยะของ Windows ออกเกือบหมด ทำให้คอมเบามาก และค่า Latency ต่ำ ยิงคมขึ้นแน่นอน\n\n✅ Ghost Toolbox: มีเมนูพิเศษให้ปรับแต่งคอมเพิ่มได้ง่ายๆ ในคลิกเดียว',
      },
      {
        title: '📥 ดาวน์โหลด Ghost Spectre',
        content: 'ดาวน์โหลดไฟล์ ISO จากลิงก์ด้านล่าง (รุ่น Def)',
        link: 'https://pixeldrain.com/u/qicbkvNh',
        linkText: 'ดาวน์โหลด Ghost Spectre (Def)',
      },
      {
        title: '🛠️ เตรียม Flashdrive',
        content: '1. ดาวน์โหลดโปรแกรม Rufus จาก https://rufus.ie/th/\n2. เสียบ Flashdrive (ขนาดอย่างน้อย 8 GB)\n3. เปิดโปรแกรม Rufus\n4. เลือก Flashdrive ของคุณ\n5. เลือกไฟล์ ISO ที่ดาวน์โหลดมา\n6. Partition scheme: เลือก "GPT"\n7. คลิก "START"\n8. รอจนเสร็จ',
        link: 'https://rufus.ie/th/',
        linkText: 'ดาวน์โหลด Rufus',
      },
      {
        title: '💾 แบ็คอัพข้อมูล (สำคัญมาก!)',
        content: '⚠️ ก่อนลง Windows ใหม่:\n\n1. คัดลอกไฟล์สำคัญไปไว้ที่อื่น (Drive D, E หรือ External HDD)\n2. แบ็คอัพรูปภาพ, เอกสาร, เซฟเกม\n3. จดรหัสผ่าน WiFi, Account ต่างๆ\n4. ตรวจสอบให้แน่ใจว่าแบ็คอัพครบแล้ว\n\n❌ ข้อมูลใน Drive C จะหายเกลี้ยง!',
      },
      {
        title: '🔧 ติดตั้ง Windows',
        content: '1. เสียบ Flashdrive ที่ทำไว้\n2. รีสตาร์ทคอมพิวเตอร์\n3. กด F2, F12, หรือ Del เพื่อเข้า BIOS/Boot Menu\n4. เลือก Boot จาก Flashdrive\n5. เริ่มติดตั้ง Windows\n6. ⚠️ เลือกเวอร์ชันที่มีคำว่า "(Def)" ต่อท้ายเสมอ\n7. เลือก Drive C เพื่อติดตั้ง\n8. รอจนเสร็จ (10-20 นาที)',
      },
      {
        title: '⚙️ ตั้งค่าหลังติดตั้ง',
        content: '1. ติดตั้ง Driver การ์ดจอ (NVIDIA/AMD)\n2. ติดตั้ง Driver อื่นๆ ที่จำเป็น\n3. ติดตั้ง DirectX และ VC++ Runtime\n4. ดาวน์โหลด Defender Control เพื่อปิด Windows Defender\n5. ปรับแต่งเพิ่มเติมผ่าน Ghost Toolbox',
      },
      {
        title: '🛡️ ปิด Windows Defender',
        content: 'หลังลง Ghost Spectre เสร็จ:\n\n1. ดาวน์โหลด Defender Control (ดูในคู่มือ "ปิดแอนตี้ไวรัสถาวร")\n2. รัน Defender Control\n3. คลิก "Disable Windows Defender"\n4. รีสตาร์ทคอมพิวเตอร์\n5. เสร็จแล้ว!',
      },
    ],
    tips: [
      'Ghost Spectre เหมาะสำหรับสายเกมที่ต้องการ FPS สูง และ Latency ต่ำ',
      'รุ่น Def เสถียรกว่ารุ่นอื่น เพราะมีไฟล์ Defender ครบ',
      'ควรแบ็คอัพข้อมูลก่อนลง Windows ใหม่เสมอ',
      'หลังลงเสร็จ ควรติดตั้ง Driver การ์ดจอก่อนเป็นอันดับแรก',
      'ใช้ Ghost Toolbox เพื่อปรับแต่งเพิ่มเติมได้ง่ายๆ',
      'ถ้าไม่แน่ใจ ไม่ควรลง - ใช้ Windows ปกติดีกว่า',
    ],
  },
  'sync-time': {
    title: 'วิธี Sync Time - ตั้งเวลาคอมพิวเตอร์ให้ตรง',
    description: 'แก้ปัญหาเวลาคอมพิวเตอร์ไม่ตรง ไม่สามารถเข้าเว็บไซต์ หรือเกมได้',
    videoUrl: 'https://www.youtube.com/watch?v=1Y38h9BNgT8',
    steps: [
      {
        title: '🕐 วิธีที่ 1: Sync Time อัตโนมัติ (แนะนำ)',
        content: '1. กด Win + I เพื่อเปิด Settings\n2. ไปที่ "Time & Language"\n3. คลิก "Date & time"\n4. เปิด "Set time automatically"\n5. เปิด "Set time zone automatically"\n6. คลิก "Sync now" ใต้ "Synchronize your clock"\n7. เสร็จแล้ว!',
      },
      {
        title: '🔧 วิธีที่ 2: ตั้งเวลาด้วยตัวเอง',
        content: '1. กด Win + I → Time & Language → Date & time\n2. ปิด "Set time automatically"\n3. คลิก "Change" ใต้ "Set the date and time manually"\n4. ตั้งวันที่และเวลาที่ถูกต้อง\n5. คลิก "Change"\n6. เปิด "Set time automatically" กลับ',
      },
      {
        title: '🌐 วิธีที่ 3: เปลี่ยน Time Server',
        content: '1. กด Win + R → พิมพ์ "timedate.cpl" → Enter\n2. ไปที่แท็บ "Internet Time"\n3. คลิก "Change settings..."\n4. เลือก Server: "time.windows.com" หรือ "time.nist.gov"\n5. คลิก "Update now"\n6. คลิก "OK"',
      },
      {
        title: '⚙️ วิธีที่ 4: ใช้คำสั่ง CMD',
        content: '1. กด Win + X → เลือก "Command Prompt (Admin)" หรือ "PowerShell (Admin)"\n2. รันคำสั่ง:\n\nw32tm /resync\n\n3. รอสักครู่\n4. เสร็จแล้ว!',
      },
      {
        title: '🔄 วิธีที่ 5: Restart Windows Time Service',
        content: '1. กด Win + R → พิมพ์ "services.msc" → Enter\n2. หา "Windows Time" ในรายการ\n3. คลิกขวา → "Restart"\n4. ถ้าไม่ทำงาน คลิกขวา → "Properties"\n5. เปลี่ยน Startup type เป็น "Automatic"\n6. คลิก "Start" → "OK"',
      },
      {
        title: '✅ ตรวจสอบเวลา',
        content: '1. เปิดเว็บไซต์ https://time.is\n2. เช็คว่าเวลาตรงหรือไม่\n3. ถ้าตรงแล้ว เสร็จสิ้น!\n4. ถ้ายังไม่ตรง ลองวิธีอื่น',
      },
    ],
    tips: [
      'ดูวิดีโอสอนใช้งานด้านล่างเพื่อความเข้าใจที่ชัดเจนยิ่งขึ้น',
      'เวลาไม่ตรงอาจทำให้เข้าเว็บไซต์ HTTPS ไม่ได้ (SSL Error)',
      'เวลาไม่ตรงอาจทำให้เข้าเกมออนไลน์ไม่ได้',
      'ควรเปิด "Set time automatically" ไว้เสมอ',
      'ถ้าแก้ไม่ได้ อาจเป็นเพราะแบตเตอรี่ CMOS หมด (ต้องเปลี่ยน)',
    ],
  },
  'chrome-download': {
    title: 'วิธีแก้ปัญหา Google Chrome บล็อกการดาวน์โหลด',
    description: 'เมื่อ Chrome บล็อกการดาวน์โหลดไฟล์ เนื่องจากมองว่าเป็นไฟล์อันตราย',
    videoUrl: 'https://www.youtube.com/watch?v=c9Kg8lcUiws',
    warning: 'คำเตือน: ดาวน์โหลดไฟล์เฉพาะจากแหล่งที่เชื่อถือได้เท่านั้น ตรวจสอบให้แน่ใจว่าไฟล์ปลอดภัยก่อนปิดการป้องกัน',
    steps: [
      {
        title: '🔴 วิธีที่ 1: Keep Dangerous File (แนะนำ)',
        content: '1. เมื่อ Chrome บล็อกไฟล์ จะมีข้อความ "This file is dangerous"\n2. คลิกที่ลูกศร ^ ข้างๆ ปุ่ม "Discard"\n3. เลือก "Keep dangerous file" หรือ "Keep anyway"\n4. ไฟล์จะถูกดาวน์โหลดทันที',
      },
      {
        title: '🟠 วิธีที่ 2: ปิด Safe Browsing ชั่วคราว',
        content: '1. เปิด Chrome Settings (chrome://settings/)\n2. ไปที่ "Privacy and security"\n3. คลิก "Security"\n4. เลือก "No protection (not recommended)"\n5. ดาวน์โหลดไฟล์\n6. เปิด Safe Browsing กลับทันที!',
      },
      {
        title: '🟡 วิธีที่ 3: ดาวน์โหลดผ่าน Downloads Page',
        content: '1. กด Ctrl + J เพื่อเปิดหน้า Downloads\n2. หาไฟล์ที่ถูกบล็อก\n3. คลิก "Show in folder" หรือ "Keep dangerous file"\n4. ยืนยันการดาวน์โหลด',
      },
      {
        title: '🔵 วิธีที่ 4: เพิ่ม Exception ใน Chrome',
        content: '1. เปิด Chrome Settings → Privacy and security → Security\n2. Scroll ลงไปที่ "Manage exceptions"\n3. เพิ่ม URL ของเว็บไซต์ที่ต้องการดาวน์โหลด\n4. ดาวน์โหลดไฟล์ใหม่',
      },
      {
        title: '🟢 วิธีที่ 5: ใช้เบราว์เซอร์อื่น',
        content: '1. ลองใช้ Microsoft Edge, Firefox, หรือ Brave\n2. เบราว์เซอร์อื่นอาจไม่บล็อกไฟล์\n3. ดาวน์โหลดไฟล์ผ่านเบราว์เซอร์นั้น',
      },
      {
        title: '✅ ตรวจสอบไฟล์ด้วย Antivirus',
        content: '1. หลังดาวน์โหลดเสร็จ Scan ไฟล์ด้วย Windows Defender\n2. คลิกขวาที่ไฟล์ → "Scan with Microsoft Defender"\n3. ถ้าปลอดภัย ก็ใช้งานได้เลย',
      },
    ],
    tips: [
      'ดูวิดีโอสอนใช้งานด้านล่างเพื่อความเข้าใจที่ชัดเจนยิ่งขึ้น',
      'Chrome บล็อกไฟล์เพื่อความปลอดภัย ควรดาวน์โหลดจากแหล่งที่เชื่อถือได้เท่านั้น',
      'หลังดาวน์โหลดเสร็จ ควร Scan ไฟล์ด้วย Antivirus ก่อนเปิด',
      'อย่าลืมเปิด Safe Browsing กลับหลังดาวน์โหลดเสร็จ',
      'ถ้าไฟล์มาจากแหล่งที่ไม่รู้จัก ไม่ควรดาวน์โหลด',
    ],
  },
  hvci: {
    title: 'วิธีเปิด/ปิด HVCI (Memory Integrity)',
    description: 'HVCI (Hypervisor-protected Code Integrity) หรือ Memory Integrity เป็นฟีเจอร์ความปลอดภัยของ Windows ที่อาจทำให้เกมหรือโปรแกรมบางตัวทำงานช้าลง',
    steps: [
      {
        title: '🟢 วิธีที่ 1: เปิด/ปิดผ่าน Windows Security (แนะนำ)',
        content: '1. กด Win + I เพื่อเปิด Settings\n2. ไปที่ Privacy & Security → คลิก Windows Security\n3. คลิก "Device Security"\n4. คลิก "Core isolation details"\n5. สลับสวิตช์ "Memory integrity" เป็น On หรือ Off\n6. รีสตาร์ทคอมพิวเตอร์',
      },
      {
        title: '🔵 วิธีที่ 2: ใช้คำสั่ง PowerShell (ปิด HVCI)',
        content: '1. กด Win + X → เลือก "Windows PowerShell (Admin)"\n2. รันคำสั่ง:\n\nReg delete "HKLM\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard\\Scenarios\\HypervisorEnforcedCodeIntegrity" /v "Enabled" /f\n\n3. รีสตาร์ทคอมพิวเตอร์',
      },
      {
        title: '🟣 วิธีที่ 3: ใช้คำสั่ง PowerShell (เปิด HVCI)',
        content: '1. กด Win + X → เลือก "Windows PowerShell (Admin)"\n2. รันคำสั่ง:\n\nReg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard\\Scenarios\\HypervisorEnforcedCodeIntegrity" /v "Enabled" /t REG_DWORD /d 1 /f\n\n3. รีสตาร์ทคอมพิวเตอร์',
      },
      {
        title: '🟠 วิธีที่ 4: ใช้คำสั่ง CMD (ปิด HVCI)',
        content: '1. กด Win + X → เลือก "Command Prompt (Admin)"\n2. รันคำสั่ง:\n\nreg delete "HKLM\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard\\Scenarios\\HypervisorEnforcedCodeIntegrity" /v "Enabled" /f\n\n3. รีสตาร์ทคอมพิวเตอร์',
      },
      {
        title: '🟡 วิธีที่ 5: ใช้คำสั่ง CMD (เปิด HVCI)',
        content: '1. กด Win + X → เลือก "Command Prompt (Admin)"\n2. รันคำสั่ง:\n\nreg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard\\Scenarios\\HypervisorEnforcedCodeIntegrity" /v "Enabled" /t REG_DWORD /d 1 /f\n\n3. รีสตาร์ทคอมพิวเตอร์',
      },
      {
        title: '✅ ตรวจสอบสถานะ HVCI',
        content: '1. กด Win + R\n2. พิมพ์ "msinfo32" แล้วกด Enter\n3. ดูที่ "Virtualization-based security Services Running"\n4. ถ้ามี "Hypervisor enforced Code Integrity" แสดงว่าเปิดอยู่',
      },
    ],
    tips: [
      'HVCI ช่วยป้องกันมัลแวร์ แต่อาจทำให้ประสิทธิภาพลดลง 5-10%',
      'เกมที่ใช้ Anti-cheat บางตัว (เช่น Valorant, Genshin Impact) อาจต้องการให้ปิด HVCI',
      'ต้องรีสตาร์ทคอมพิวเตอร์ทุกครั้งหลังเปิด/ปิด HVCI',
      'ถ้าคอมพิวเตอร์ไม่รองรับ Virtualization จะไม่สามารถใช้ HVCI ได้',
      'แนะนำให้เปิด HVCI ไว้เพื่อความปลอดภัย เว้นแต่จะมีปัญหาเฉพาะ',
    ],
  },
  directx: {
    title: 'วิธีติดตั้ง DirectX',
    description: 'DirectX เป็นชุดเทคโนโลยีที่จำเป็นสำหรับการเล่นเกมและใช้งานโปรแกรมกราฟิกบน Windows',
    steps: [
      {
        title: 'ดาวน์โหลด DirectX End-User Runtime',
        content: 'ไปที่เว็บไซต์ Microsoft และดาวน์โหลด DirectX End-User Runtime Web Installer',
        link: 'https://www.microsoft.com/en-us/download/details.aspx?id=35',
        linkText: 'ดาวน์โหลด DirectX',
      },
      {
        title: 'รันไฟล์ติดตั้ง',
        content: 'เปิดไฟล์ที่ดาวน์โหลดมา (dxwebsetup.exe) และคลิก "Yes" เมื่อมีการถามสิทธิ์ Administrator',
      },
      {
        title: 'ยอมรับข้อตกลง',
        content: 'อ่านและยอมรับข้อตกลงการใช้งาน (License Agreement) แล้วคลิก "Next"',
      },
      {
        title: 'ติดตั้ง',
        content: 'รอให้โปรแกรมดาวน์โหลดและติดตั้งไฟล์ที่จำเป็น อาจใช้เวลาสักครู่',
      },
      {
        title: 'รีสตาร์ทคอมพิวเตอร์',
        content: 'หลังจากติดตั้งเสร็จ แนะนำให้รีสตาร์ทคอมพิวเตอร์เพื่อให้การเปลี่ยนแปลงมีผล',
      },
    ],
    tips: [
      'DirectX มักจะติดตั้งมากับ Windows อยู่แล้ว แต่บางเกมต้องการไฟล์เพิ่มเติม',
      'ถ้าเกมยังมีปัญหา ลองอัพเดท Graphics Driver ของการ์ดจอด้วย',
    ],
  },
  vcruntime: {
    title: 'วิธีติดตั้ง Visual C++ Runtime (All-in-One)',
    description: 'ติดตั้ง Visual C++ Runtime ทุกเวอร์ชันพร้อมกันด้วย All-in-One Package จาก TechPowerUp',
    videoUrl: 'https://www.youtube.com/shorts/CVBWo7-m5Xs',
    steps: [
      {
        title: 'ดาวน์โหลด VC++ Runtime All-in-One',
        content: 'ดาวน์โหลดแพ็คเกจที่รวม Visual C++ Runtime ทุกเวอร์ชัน (2005-2022) ไว้ในไฟล์เดียว',
        link: 'https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/',
        linkText: 'ดาวน์โหลด VC++ All-in-One',
      },
      {
        title: 'แตกไฟล์ ZIP',
        content: 'แตกไฟล์ที่ดาวน์โหลดมา (VisualCppRedist_AIO_x86_x64.zip) ไว้ในโฟลเดอร์ที่ต้องการ',
      },
      {
        title: 'รันไฟล์ติดตั้งในโหมด Administrator',
        content: 'คลิกขวาที่ไฟล์ install_all.bat แล้วเลือก "Run as administrator"',
      },
      {
        title: 'ยอมรับการติดตั้ง',
        content: 'โปรแกรมจะติดตั้ง Visual C++ Runtime ทุกเวอร์ชัน (ทั้ง x86 และ x64) อัตโนมัติ',
      },
      {
        title: 'รอการติดตั้งเสร็จสิ้น',
        content: 'รอให้โปรแกรมติดตั้งทุกเวอร์ชันเสร็จ อาจใช้เวลา 3-5 นาที',
      },
      {
        title: 'รีสตาร์ทคอมพิวเตอร์',
        content: 'หลังติดตั้งเสร็จ รีสตาร์ทคอมพิวเตอร์เพื่อให้การเปลี่ยนแปลงมีผล',
      },
    ],
    tips: [
      'ดูวิดีโอสอนใช้งานด้านล่างเพื่อความเข้าใจที่ชัดเจนยิ่งขึ้น',
      'แพ็คเกจนี้รวม VC++ Runtime ทุกเวอร์ชันตั้งแต่ 2005-2022',
      'แก้ปัญหา MSVCP140.dll, VCRUNTIME140.dll และ DLL อื่นๆ ที่หายไป',
      'ติดตั้งครั้งเดียวได้ทั้ง x86 (32-bit) และ x64 (64-bit)',
      'ปลอดภัย ไม่มีไวรัส และใช้งานง่ายกว่าติดตั้งทีละเวอร์ชัน',
    ],
  },
  antivirus: {
    title: 'วิธีปิด Windows Defender ถาวรด้วย Dcontrol Sordum',
    description: 'ปิด Windows Defender แบบถาวรด้วยโปรแกรม Dcontrol จาก Sordum สำหรับผู้ที่ต้องการปิดการป้องกันอย่างสมบูรณ์',
    warning: 'คำเตือนสำคัญ: การปิด Windows Defender ถาวรจะทำให้คอมพิวเตอร์ไม่มีการป้องกันไวรัส ควรทำเฉพาะเมื่อคุณมีแอนตี้ไวรัสตัวอื่นแทน หรือรู้ว่ากำลังทำอะไรอยู่',
    videoUrl: 'https://www.youtube.com/watch?v=NUN7hXCa4AU',
    steps: [
      {
        title: 'ดาวน์โหลด Dcontrol Sordum',
        content: 'ดาวน์โหลดโปรแกรม Dcontrol จาก Google Drive',
        link: 'https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download&authuser=0',
        linkText: 'ดาวน์โหลด Dcontrol',
      },
      {
        title: 'แตกไฟล์ ZIP',
        content: 'แตกไฟล์ที่ดาวน์โหลดมาไว้ในโฟลเดอร์ที่ต้องการ',
      },
      {
        title: 'รันโปรแกรมในโหมด Administrator',
        content: 'คลิกขวาที่ไฟล์ Dcontrol.exe แล้วเลือก "Run as administrator"',
      },
      {
        title: 'ปิด Windows Defender',
        content: 'ในโปรแกรม Dcontrol คลิกปุ่ม "Disable Windows Defender" สีแดง',
      },
      {
        title: 'รีสตาร์ทคอมพิวเตอร์',
        content: 'รีสตาร์ทคอมพิวเตอร์เพื่อให้การเปลี่ยนแปลงมีผล Windows Defender จะถูกปิดถาวร',
      },
      {
        title: 'ตรวจสอบสถานะ (ถ้าต้องการ)',
        content: 'เปิด Windows Security เพื่อตรวจสอบว่า Defender ถูกปิดแล้ว',
      },
      {
        title: 'เปิดกลับได้ตลอดเวลา',
        content: 'ถ้าต้องการเปิด Defender กลับ ให้รัน Dcontrol อีกครั้งแล้วคลิก "Enable Windows Defender"',
      },
    ],
    tips: [
      'ดูวิดีโอสอนใช้งานด้านล่างเพื่อความเข้าใจที่ชัดเจนยิ่งขึ้น',
      'โปรแกรม Dcontrol ปลอดภัย ไม่มีไวรัส และใช้งานง่าย',
      'ควรมีแอนตี้ไวรัสตัวอื่นติดตั้งไว้ก่อนปิด Windows Defender',
      'สามารถเปิด Defender กลับได้ตลอดเวลาด้วยโปรแกรมเดียวกัน',
      'เหมาะสำหรับผู้ที่ต้องการควบคุมระบบป้องกันด้วยตัวเอง',
    ],
  },
  'basic-troubleshooting': {
    title: 'แก้ปัญหาเบื้องต้น',
    description: 'ขั้นตอนพื้นฐานที่ควรลองก่อนเมื่อเจอปัญหาคอมพิวเตอร์',
    steps: [
      {
        title: 'รีสตาร์ทคอมพิวเตอร์',
        content: 'ขั้นตอนแรกที่ง่ายที่สุด แต่แก้ปัญหาได้หลายกรณี',
      },
      {
        title: 'ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต',
        content: 'ลองเปิดเว็บไซต์อื่นๆ หรือรีสตาร์ทเราเตอร์',
      },
      {
        title: 'อัพเดท Windows',
        content: 'Settings → Windows Update → Check for updates',
      },
      {
        title: 'อัพเดท Graphics Driver',
        content: 'ไปที่เว็บไซต์ NVIDIA, AMD หรือ Intel แล้วดาวน์โหลด Driver ล่าสุด',
      },
      {
        title: 'ตรวจสอบพื้นที่ว่างในฮาร์ดดิสก์',
        content: 'ควรมีพื้นที่ว่างอย่างน้อย 10-20 GB ใน C: Drive',
      },
      {
        title: 'รันโปรแกรมในโหมด Administrator',
        content: 'คลิกขวาที่โปรแกรม → Run as administrator',
      },
      {
        title: 'ตรวจสอบ Event Viewer',
        content: 'กด Win+X → Event Viewer → Windows Logs → Application เพื่อดูข้อผิดพลาด',
      },
      {
        title: 'ถอนการติดตั้งและติดตั้งใหม่',
        content: 'ถ้าโปรแกรมมีปัญหา ลองถอนแล้วติดตั้งใหม่',
      },
    ],
    tips: [
      'สำรองข้อมูลสำคัญก่อนทำการแก้ปัญหาที่ซับซ้อน',
      'จดบันทึกข้อความ Error เพื่อค้นหาวิธีแก้ใน Google',
      'ถ้าแก้ไม่ได้ ลองสร้าง System Restore Point ก่อนทำอะไรต่อ',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(guidesData).map((id) => ({
    id,
  }));
}

export default function GuidePage({ params }: { params: { id: string } }) {
  const guide = guidesData[params.id];

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 -z-10"></div>
      
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-gray-800 hover:text-gray-900 mb-6 transition-colors bg-white/95 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-200 hover:bg-white shadow-md hover:shadow-lg font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          กลับหน้าหลัก
        </Link>

        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-blue-200/50">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">
            {guide.title}
          </h1>
          <p className="text-lg text-gray-700 mb-8 font-medium">
            {guide.description}
          </p>

          {guide.warning && (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg shadow-sm">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-900 font-medium">{guide.warning}</p>
              </div>
            </div>
          )}

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">
              ขั้นตอนการดำเนินการ
            </h2>
            {guide.steps.map((step: any, index: number) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6 bg-blue-50/50 backdrop-blur-sm rounded-r-lg p-4 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-800 mb-3 whitespace-pre-line leading-relaxed font-medium">
                      {step.content}
                    </p>
                    {step.image && (
                      <div className="my-4 rounded-lg overflow-hidden border-2 border-blue-200 shadow-xl">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-700 hover:text-blue-800 transition-colors bg-blue-100 px-4 py-2 rounded-lg hover:bg-blue-200 font-semibold"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {step.linkText}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {guide.videoUrl && (
            <div className="mt-8 bg-red-50 rounded-lg p-6 border border-red-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎥 วิดีโอสอนใช้งาน
              </h3>
              <p className="text-gray-700 mb-4 font-medium">
                ดูวิดีโอสอนการใช้งานแบบละเอียด:
              </p>
              <a
                href={guide.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                ดูวิดีโอบน YouTube
              </a>
            </div>
          )}

          {guide.tips && guide.tips.length > 0 && (
            <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                💡 เคล็ดลับเพิ่มเติม
              </h3>
              <ul className="space-y-2">
                {guide.tips.map((tip: string, index: number) => (
                  <li key={index} className="text-gray-800 flex items-start font-medium">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}
