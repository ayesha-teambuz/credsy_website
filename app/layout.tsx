import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import ApplyModal from "@/components/ApplyModal";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://credsyfinance.com'),
  title: "Credsy Finance | Smart Personal & Business Loans in India",
  description: "Credsy Finance compares top lenders (HDFC, ICICI, SBI) to get you the lowest interest rates on Personal, Home, and Business loans. Faster approvals, better choices.",
  keywords: ["Personal Loan", "Home Loan", "Business Loan", "Loan Comparison India", "Credsy Finance", "Best Interest Rates", "Quick Loan Approval"],
  authors: [{ name: "Credsy Finance" }],
  openGraph: {
    title: "Credsy Finance | Smart Loans Simplified",
    description: "Compare and apply for the best loans in India. We work for you, not the banks.",
    url: "https://credsyfinance.com",
    siteName: "Credsy Finance",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Credsy Finance - High Performance Loan Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credsy Finance | Smart Loan Solutions",
    description: "Compare 40+ lenders and get the best rates on loans today.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo-square.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${jakarta.variable} antialiased bg-slate-50 text-slate-900 font-sans`}
      >
        <ModalProvider>
          {children}
          <ApplyModal />
        </ModalProvider>
      </body>
    </html>
  );
}
