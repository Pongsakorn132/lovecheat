import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOVECHEAT - ศูนย์ช่วยเหลือแก้ปัญหาคอมพิวเตอร์",
  description: "คู่มือแก้ปัญหาคอมพิวเตอร์ ติดตั้ง DirectX, VC Runtime, ปิด HVCI และอื่นๆ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
