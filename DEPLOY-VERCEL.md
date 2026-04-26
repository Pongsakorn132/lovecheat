# 🚀 คู่มือ Deploy LOVECHEAT บน Vercel

## 📋 ขั้นตอนการ Deploy (ง่ายมาก!)

### วิธีที่ 1: Deploy ผ่าน Vercel Dashboard (แนะนำ - ไม่ต้องใช้ Command)

#### ขั้นตอนที่ 1: เตรียม GitHub Repository

1. **สร้าง GitHub Account** (ถ้ายังไม่มี)
   - ไปที่ https://github.com
   - คลิก "Sign up" สมัครฟรี

2. **สร้าง Repository ใหม่**
   - คลิก "+" มุมขวาบน → "New repository"
   - ตั้งชื่อ: `lovecheat` (หรือชื่ออื่นที่ชอบ)
   - เลือก "Public" (ฟรี)
   - คลิก "Create repository"

3. **Upload โค้ดขึ้น GitHub**
   
   **วิธีที่ 1: ใช้ Git (แนะนำ)**
   ```bash
   # เปิด Command Prompt ในโฟลเดอร์โปรเจกต์
   git init
   git add .
   git commit -m "Initial commit - LOVECHEAT"
   git branch -M main
   git remote add origin https://github.com/username/lovecheat.git
   git push -u origin main
   ```
   
   **วิธีที่ 2: Upload ผ่านเว็บ (ง่ายกว่า)**
   - คลิก "uploading an existing file"
   - ลากไฟล์ทั้งหมดมาวาง (ยกเว้น node_modules)
   - คลิก "Commit changes"

---

#### ขั้นตอนที่ 2: Deploy บน Vercel

1. **สร้าง Vercel Account**
   - ไปที่ https://vercel.com
   - คลิก "Sign Up"
   - เลือก "Continue with GitHub" (แนะนำ)
   - อนุญาตให้ Vercel เข้าถึง GitHub

2. **Import โปรเจกต์**
   - คลิก "Add New..." → "Project"
   - เลือก Repository "lovecheat" ที่สร้างไว้
   - คลิก "Import"

3. **ตั้งค่าโปรเจกต์**
   - **Project Name**: `lovecheat` (หรือชื่อที่ต้องการ)
   - **Framework Preset**: Next.js (Vercel จะ detect อัตโนมัติ)
   - **Root Directory**: `./` (ค่าเริ่มต้น)
   - **Build Command**: `npm run build` (ค่าเริ่มต้น)
   - **Output Directory**: `.next` (ค่าเริ่มต้น)
   
   ✅ **ไม่ต้องแก้อะไร ใช้ค่าเริ่มต้นได้เลย!**

4. **Deploy!**
   - คลิก "Deploy"
   - รอ 1-2 นาที ⏳
   - เสร็จแล้ว! 🎉

5. **ได้ URL ฟรี**
   - `https://lovecheat.vercel.app`
   - หรือ `https://lovecheat-username.vercel.app`

---

### วิธีที่ 2: Deploy ผ่าน Vercel CLI (สำหรับคนชอบใช้ Command)

#### 1. ติดตั้ง Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login
```bash
vercel login
```
- เลือก "Continue with GitHub"
- ยืนยันในเบราว์เซอร์

#### 3. Deploy
```bash
# Deploy ครั้งแรก (Preview)
vercel

# Deploy Production
vercel --prod
```

#### 4. เสร็จแล้ว!
- Vercel จะแสดง URL ให้ทันที
- เช่น: `https://lovecheat.vercel.app`

---

## 🎯 หลัง Deploy แล้ว

### ✅ สิ่งที่ได้:
- ✅ URL ฟรี: `https://lovecheat.vercel.app`
- ✅ SSL/HTTPS อัตโนมัติ (ปลอดภัย)
- ✅ CDN ทั่วโลก (โหลดเร็ว)
- ✅ Auto Deploy (Push GitHub = Deploy อัตโนมัติ)

### 🔄 การอัพเดทเว็บไซต์

**ง่ายมาก! แค่ Push GitHub:**
```bash
git add .
git commit -m "Update website"
git push
```
- Vercel จะ Deploy อัตโนมัติทันที!
- ไม่ต้องทำอะไรเพิ่ม

---

## ⚙️ การตั้งค่าเพิ่มเติม

### 1. เปลี่ยน Domain เป็นของตัวเอง

1. ไปที่ Project Settings → Domains
2. คลิก "Add Domain"
3. ใส่ domain ของคุณ เช่น `lovecheat.com`
4. ตั้งค่า DNS ตามที่ Vercel บอก
5. เสร็จแล้ว!

### 2. Environment Variables (ถ้ามี)

1. ไปที่ Project Settings → Environment Variables
2. เพิ่มตัวแปรที่ต้องการ
3. Redeploy

---

## 🐛 แก้ปัญหา

### ❌ Build Failed?

**ตรวจสอบ:**
1. ลองรัน `npm run build` ในเครื่องก่อน
2. ถ้า build ผ่าน แต่ Vercel ไม่ผ่าน:
   - ตรวจสอบ Node.js version
   - ลบ `node_modules` และ `.next`
   - รัน `npm install` ใหม่
   - Push อีกครั้ง

**แก้ไข:**
```bash
# ลบ cache
rm -rf node_modules .next

# ติดตั้งใหม่
npm install

# ทดสอบ build
npm run build

# ถ้าผ่าน push ขึ้น GitHub
git add .
git commit -m "Fix build"
git push
```

### ❌ รูปภาพไม่แสดง?

- ตรวจสอบว่ารูปอยู่ใน `public/images/`
- ใช้ path `/images/...` (ไม่ใช่ `./images/...`)
- ตรวจสอบชื่อไฟล์ (case-sensitive)

### ❌ 404 Not Found?

- ตรวจสอบ route ใน `app/guides/[id]/page.tsx`
- ตรวจสอบ `generateStaticParams()`

---

## 📊 ฟีเจอร์ฟรีของ Vercel

- ✅ **Unlimited Deployments** - Deploy ไม่จำกัด
- ✅ **SSL Certificate** - HTTPS ฟรี
- ✅ **CDN Global** - เร็วทั่วโลก
- ✅ **Auto Deploy** - Push = Deploy
- ✅ **Preview Deployments** - ทดสอบก่อน Deploy จริง
- ✅ **Analytics** - ดูสถิติการเข้าชม (Basic)
- ✅ **100 GB Bandwidth/เดือน** - เพียงพอสำหรับเว็บเล็ก

---

## 🎓 เคล็ดลับ

### 1. Preview Deployment
- ทุกครั้งที่ Push branch อื่น (ไม่ใช่ main)
- Vercel จะสร้าง Preview URL ให้ทดสอบ
- เช่น: `https://lovecheat-git-feature-username.vercel.app`

### 2. Rollback
- ถ้า Deploy แล้วมีปัญหา
- ไปที่ Deployments → เลือก version เก่า → Promote to Production

### 3. Custom Domain
- ซื้อ domain จาก Namecheap, GoDaddy
- เพิ่มใน Vercel (ฟรี)
- ได้ `https://lovecheat.com`

---

## 📱 ตัวอย่าง URL หลัง Deploy

- **Production**: `https://lovecheat.vercel.app`
- **Preview**: `https://lovecheat-git-dev-username.vercel.app`
- **Custom Domain**: `https://lovecheat.com` (ถ้าตั้งค่า)

---

## 🔗 ลิงก์ที่เป็นประโยชน์

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel CLI](https://vercel.com/docs/cli)
- [GitHub Desktop](https://desktop.github.com/) - ใช้ Git แบบ GUI

---

## ✅ Checklist ก่อน Deploy

- [ ] ทดสอบ `npm run build` ในเครื่อง
- [ ] ตรวจสอบลิงก์ทั้งหมด
- [ ] ทดสอบ Responsive (Mobile/Tablet)
- [ ] ตรวจสอบ Discord link
- [ ] อัพเดท README.md
- [ ] Commit และ Push ขึ้น GitHub
- [ ] Deploy บน Vercel

---

## 🎉 เสร็จแล้ว!

หลัง Deploy แล้ว เว็บไซต์ LOVECHEAT จะออนไลน์และใช้งานได้ทันที!

**แชร์ลิงก์ได้เลย:** `https://lovecheat.vercel.app`

---

**สร้างโดย:** LOVECHEAT Team  
**อัพเดทล่าสุด:** 2026  
**Discord:** https://discord.gg/hb2FY8H6
