import type { Metadata } from "next";
import { DM_Sans} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Aura fintech dashboard",
  description: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${dmsans.className}  antialiased`}
      >
       <Header/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
