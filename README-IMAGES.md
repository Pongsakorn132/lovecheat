# 📸 คู่มือการเพิ่มรูปภาพประกอบ

## 📁 โครงสร้างโฟลเดอร์รูปภาพ

วางรูปภาพในโฟลเดอร์ `public/images/` ตามโครงสร้างนี้:

```
public/
└── images/
    ├── hvci/
    │   ├── windows-security.png
    │   ├── powershell.png
    │   └── cmd.png
    ├── directx/
    │   ├── download.png
    │   ├── install.png
    │   └── complete.png
    ├── vcruntime/
    │   ├── download.png
    │   ├── extract.png
    │   └── install.png
    ├── antivirus/
    │   ├── dcontrol-download.png
    │   ├── dcontrol-run.png
    │   └── dcontrol-disable.png
    └── troubleshooting/
        ├── restart.png
        ├── windows-update.png
        └── driver-update.png
```

## 🖼️ วิธีเพิ่มรูปภาพในแต่ละขั้นตอน

### 1. เตรียมรูปภาพ
- ถ่ายภาพหน้าจอ (Screenshot) ของแต่ละขั้นตอน
- แนะนำขนาด: 1280x720 หรือ 1920x1080
- รูปแบบไฟล์: PNG, JPG, หรือ WebP

### 2. วางรูปในโฟลเดอร์ public/images/
สร้างโฟลเดอร์ตามหัวข้อ เช่น:
- `public/images/hvci/` สำหรับคู่มือ HVCI
- `public/images/directx/` สำหรับคู่มือ DirectX

### 3. แก้ไขไฟล์ app/guides/[id]/page.tsx

เพิ่ม `image: '/images/ชื่อโฟลเดอร์/ชื่อไฟล์.png'` ในแต่ละ step:

```typescript
{
  title: 'ชื่อขั้นตอน',
  content: 'คำอธิบาย',
  image: '/images/hvci/step1.png', // เพิ่มบรรทัดนี้
}
```

## 📝 ตัวอย่างการเพิ่มรูป

### ตัวอย่าง 1: เพิ่มรูปในคู่มือ HVCI

```typescript
hvci: {
  steps: [
    {
      title: 'วิธีที่ 1: เปิด/ปิดผ่าน Windows Security',
      content: 'เปิด Windows Security → Device Security',
      image: '/images/hvci/windows-security.png',
    },
    {
      title: 'วิธีที่ 2: ใช้คำสั่ง PowerShell',
      content: 'เปิด PowerShell ในโหมด Administrator',
      image: '/images/hvci/powershell.png',
    },
  ],
}
```

### ตัวอย่าง 2: เพิ่มรูปในคู่มือ DirectX

```typescript
directx: {
  steps: [
    {
      title: 'ดาวน์โหลด DirectX',
      content: 'ไปที่เว็บไซต์ Microsoft',
      link: 'https://...',
      linkText: 'ดาวน์โหลด DirectX',
      image: '/images/directx/download-page.png',
    },
  ],
}
```

## 🎨 เคล็ดลับการถ่ายภาพหน้าจอ

### Windows:
- **Win + Shift + S** - Snipping Tool (แนะนำ)
- **Win + PrtScn** - บันทึกเต็มหน้าจอ
- **Alt + PrtScn** - บันทึกหน้าต่างที่เปิดอยู่

### แก้ไขรูปภาพ:
- ใช้ Paint หรือ Paint 3D (มากับ Windows)
- เพิ่มลูกศร/กรอบสีแดงเพื่อเน้นจุดสำคัญ
- ครอบตัดส่วนที่ไม่จำเป็นออก

## 📊 ขนาดรูปภาพที่แนะนำ

- **ความกว้าง**: 800-1920 pixels
- **ความสูง**: ตามสัดส่วน
- **ขนาดไฟล์**: ไม่เกิน 500 KB ต่อรูป
- **รูปแบบ**: PNG (คมชัด) หรือ JPG (ขนาดเล็ก)

## 🚀 หลังจากเพิ่มรูปแล้ว

1. วางไฟล์รูปใน `public/images/`
2. แก้ไข `app/guides/[id]/page.tsx` เพิ่ม `image: '/images/...'`
3. รีเฟรชเว็บไซต์
4. รูปจะแสดงอัตโนมัติในแต่ละขั้นตอน

## ✅ ตัวอย่างรูปที่ควรมี

### HVCI:
- ✅ หน้า Windows Security
- ✅ หน้า Core Isolation
- ✅ PowerShell ที่รันคำสั่ง
- ✅ CMD ที่รันคำสั่ง
- ✅ System Information (msinfo32)

### DirectX:
- ✅ หน้าดาวน์โหลด Microsoft
- ✅ ไฟล์ dxwebsetup.exe
- ✅ หน้าติดตั้ง DirectX
- ✅ หน้าติดตั้งเสร็จ

### VC++ Runtime:
- ✅ หน้า TechPowerUp
- ✅ ไฟล์ ZIP ที่แตกแล้ว
- ✅ ไฟล์ install_all.bat
- ✅ หน้าต่างติดตั้ง

### Dcontrol:
- ✅ หน้าดาวน์โหลด Google Drive
- ✅ โปรแกรม Dcontrol
- ✅ ปุ่ม Disable Windows Defender
- ✅ Windows Security ที่ถูกปิด

---

**หมายเหตุ:** ถ้าไม่มีรูป ระบบจะแสดงเฉพาะข้อความ ไม่มี error
