import Header from "@/components/Header";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <div class="bg-[#1e40af] text-white p-4"></div> */}
      <body className="bg-[#181815] text-white p-4">      
        <Header />
        {children}
      </body>
    </html>
  );
}
