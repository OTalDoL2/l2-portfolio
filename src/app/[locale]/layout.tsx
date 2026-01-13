import Header from "@/components/Header";
import '@/utils/fontawesome';
import "./globals.css";

import { Poppins } from 'next/font/google';
import { Locale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default async function LocaleLayout({
  children, params
}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)){
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={poppins.className}>
      <body className="bg-[#181915] text-white p-4 lg:p-0">
        <NextIntlClientProvider messages={messages}>
        <Header />
        <div className="mt-8">
          {children}
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
