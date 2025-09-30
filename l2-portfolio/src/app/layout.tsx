import Header from "@/components/Header";
import '@/utils/fontawesome'; // ou de onde você salvou
import "./globals.css";

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-[#181915] text-white p-4">
        <Header />
        <div className="mt-4">
          {children}
        </div>
      </body>
    </html>
  );
}
