# 🚀 คู่มือ Deploy บน Vercel

## 📋 ขั้นตอนการ Deploy

### วิธีที่ 1: Deploy ผ่าน Vercel Dashboard (แนะนำ)

#### 1. เตรียม GitHub Repository
```bash
# สร้าง Git Repository
git init
git add .
git commit -m "Initial commit"

# Push ขึ้น GitHub
git remote add origin https://github.com/username/repo-name.git
git branch -M main
git push -u origin main
```

#### 2. Deploy บน Vercel
1. ไปที่ [vercel.com](https://vercel.com)
2. คลิก **"Sign Up"** หรือ **"Log In"** (ใช้ GitHub Account)
3. คลิก **"Add New Project"**
4. เลือก Repository ของคุณ
5. คลิก **"Import"**
6. Vercel จะ detect Next.js อัตโนมัติ
7. คลิก **"Deploy"**
8. รอ 1-2 นาที ✅ เสร็จแล้ว!

#### 3. ได้ URL ฟรี
- `https://your-project.vercel.app`
- สามารถเปลี่ยน Domain ได้ในภายหลัง

---

### วิธีที่ 2: Deploy ผ่าน Vercel CLI

#### 1. ติดตั้ง Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login
```bash
vercel login
```

#### 3. Deploy
```bash
# Deploy ครั้งแรก
vercel

# Deploy Production
vercel --prod
```

---

## 🖼️ การเพิ่มรูปภาพ

### ก่อน Deploy:
1. วางรูปภาพใน `public/images/`
2. แก้ไข `app/guides/[id]/page.tsx` เพิ่ม `image: '/images/...'`
3. Commit และ Push

```bash
git add .
git commit -m "Add images"
git push
```

4. Vercel จะ Deploy อัตโนมัติ (Auto Deploy)

---

## ⚙️ การตั้งค่า Vercel

### Environment Variables (ถ้ามี)
1. ไปที่ Project Settings
2. เลือก **Environment Variables**
3. เพิ่มตัวแปรที่ต้องการ

### Custom Domain
1. ไปที่ Project Settings
2. เลือก **Domains**
3. เพิ่ม Domain ของคุณ
4. ตั้งค่า DNS ตามที่ Vercel แนะนำ

---

## 🔄 Auto Deploy

Vercel จะ Deploy อัตโนมัติทุกครั้งที่:
- ✅ Push code ขึ้น GitHub (main branch)
- ✅ Merge Pull Request
- ✅ แก้ไขไฟล์ใดๆ

---

## 📊 ฟีเจอร์ฟรีของ Vercel

- ✅ Unlimited Deployments
- ✅ SSL Certificate (HTTPS) ฟรี
- ✅ CDN ทั่วโลก
- ✅ Auto Deploy จาก GitHub
- ✅ Preview Deployments
- ✅ Analytics (Basic)
- ✅ 100 GB Bandwidth/เดือน

---

## 🐛 แก้ปัญหา

### Build Failed?
```bash
# ลองรันในเครื่องก่อน
npm run build

# ถ้า build ผ่าน แต่ Vercel ไม่ผ่าน
# ตรวจสอบ Node.js version
```

### รูปภาพไม่แสดง?
- ตรวจสอบว่ารูปอยู่ใน `public/images/`
- ใช้ path `/images/...` (ไม่ใช่ `./images/...`)
- ตรวจสอบชื่อไฟล์ (case-sensitive)

### 404 Not Found?
- ตรวจสอบ route ใน `app/guides/[id]/page.tsx`
- ตรวจสอบ `generateStaticParams()`

---

## 📱 ตัวอย่าง URL หลัง Deploy

- **Production**: `https://tech-support.vercel.app`
- **Preview**: `https://tech-support-git-feature-username.vercel.app`

---

## 🎯 Checklist ก่อน Deploy

- [ ] ทดสอบ `npm run build` ในเครื่อง
- [ ] ตรวจสอบรูปภาพใน `public/images/`
- [ ] ตรวจสอบลิงก์ทั้งหมด
- [ ] ทดสอบ Dark Mode
- [ ] ทดสอบ Responsive (Mobile/Tablet)
- [ ] อัพเดท README.md
- [ ] Commit และ Push ขึ้น GitHub

---

## 🔗 ลิงก์ที่เป็นประโยชน์

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel CLI](https://vercel.com/docs/cli)

---

**สร้างโดย:** Tech Support Website
**อัพเดทล่าสุด:** 2026
