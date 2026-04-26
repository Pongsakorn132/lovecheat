# 🛠️ LOVECHEAT - ศูนย์ช่วยเหลือแก้ปัญหาคอมพิวเตอร์

Website คู่มือแก้ปัญหาคอมพิวเตอร์สำหรับผู้ใช้งานทั่วไป สร้างด้วย Next.js และ Tailwind CSS

![LOVECHEAT](https://img.shields.io/badge/LOVECHEAT-v1.0-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

## ✨ ฟีเจอร์

- 📖 **คู่มือติดตั้ง DirectX** - แก้ปัญหาเกมและโปรแกรมกราฟิก
- 🔧 **คู่มือติดตั้ง Visual C++ Runtime** - แก้ปัญหา DLL หายไป
- 🛡️ **วิธีปิด Windows Defender ถาวร** - ด้วย Dcontrol Sordum
- ⚙️ **วิธีเปิด/ปิด HVCI** - Memory Integrity แบบละเอียด
- 🔍 **แก้ปัญหาเบื้องต้น** - ขั้นตอนพื้นฐาน
- 🎨 **UI สวยงาม** - Glassmorphism + Particle Effects
- 🌙 **โทนสีน้ำเงินสว่าง** - สบายตา อ่านง่าย
- 📱 **Responsive Design** - ใช้งานได้ทุกอุปกรณ์

## 🚀 การติดตั้งและรัน

### ติดตั้ง Dependencies

```bash
npm install
```

### รันในโหมด Development

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

### Build สำหรับ Production

```bash
npm run build
npm start
```

### รันด้วย .bat (Windows)

```bash
# Double click ไฟล์เหล่านี้:
run.bat       # รันโปรเจกต์
install.bat   # ติดตั้ง dependencies
build.bat     # Build production
```

## 📦 Deploy บน Vercel (ฟรี)

### 🎯 Deploy เร็ว 5 นาที!

อ่านคู่มือ: **[QUICK-DEPLOY.md](./QUICK-DEPLOY.md)**

### 📚 คู่มือเต็ม

อ่านคู่มือละเอียด: **[DEPLOY-VERCEL.md](./DEPLOY-VERCEL.md)**

### วิธีสั้นๆ:

1. Push code ขึ้น GitHub
2. ไปที่ [vercel.com](https://vercel.com) สมัครฟรี
3. คลิก "Import Project" เลือก repo ของคุณ
4. Vercel จะ detect Next.js และ deploy ให้อัตโนมัติ
5. ได้ URL ฟรีทันที เช่น `https://lovecheat.vercel.app`

## 🛠️ เทคโนโลยีที่ใช้

- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vercel** - Hosting (ฟรี)

## 📁 โครงสร้างโปรเจกต์

```
├── app/
│   ├── layout.tsx              # Layout หลัก
│   ├── page.tsx                # หน้าแรก
│   ├── globals.css             # Global styles
│   └── guides/
│       └── [id]/
│           └── page.tsx        # หน้าคู่มือแต่ละหัวข้อ
├── components/
│   └── ParticlesBackground.tsx # Particle effects
├── public/
│   └── images/                 # รูปภาพ (ถ้ามี)
├── run.bat                     # รันโปรเจกต์ (Windows)
├── install.bat                 # ติดตั้ง dependencies
├── build.bat                   # Build production
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 การปรับแต่ง

### เพิ่มคู่มือใหม่

แก้ไขไฟล์ `app/guides/[id]/page.tsx` ในส่วน `guidesData`:

```typescript
{
  id: 'new-guide',
  title: 'ชื่อคู่มือ',
  description: 'คำอธิบาย',
  steps: [
    {
      title: 'ขั้นตอนที่ 1',
      content: 'รายละเอียด...',
    },
  ],
  tips: ['เคล็ดลับ 1', 'เคล็ดลับ 2'],
}
```

### เปลี่ยนสี Theme

แก้ไขไฟล์ `tailwind.config.ts` และ `app/globals.css`

### เพิ่มรูปภาพ

1. วางรูปใน `public/images/`
2. เพิ่ม `image: '/images/your-image.png'` ใน step

อ่านเพิ่มเติม: [README-IMAGES.md](./README-IMAGES.md)

## 🌐 ลิงก์

- **Discord**: https://discord.gg/hb2FY8H6
- **Website**: https://lovecheat.vercel.app (หลัง deploy)

## 📝 License

MIT License - ใช้งานได้ฟรี

## 🤝 Contributing

ยินดีรับ Pull Requests และ Issues!

---

## 📚 คู่มือเพิ่มเติม

- [DEPLOY-VERCEL.md](./DEPLOY-VERCEL.md) - คู่มือ Deploy แบบละเอียด
- [QUICK-DEPLOY.md](./QUICK-DEPLOY.md) - Deploy เร็ว 5 นาที
- [README-IMAGES.md](./README-IMAGES.md) - วิธีเพิ่มรูปภาพ

---

สร้างด้วย ❤️ โดย LOVECHEAT Team | © 2026
