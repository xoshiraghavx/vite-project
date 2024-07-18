import { Inter } from "next/font/google";
import "./globals.css";

import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Herbal Locks",
  description:
    "Delays premature greying Keeps the scalp healthy Guranteed hair growth Nourishes the roots Hair loss control",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="Herbal Locks" />
        <meta
          name="description"
          content="Delays premature greying Keeps the scalp healthy Guranteed hair growth Nourishes the roots Hair loss control"
        />
        <meta name="keywords" content="hair oil, herbal hair oil, ayurvedic hair oil, homemade hair oil" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Herbal Locks" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://herballocks.vercel.app" />
        <meta property="og:title" content="Herbal Locks" />
        <meta
          property="og:description"
          content="Delays premature greying Keeps the scalp healthy Guranteed hair growth Nourishes the roots Hair loss control"
        />
        <meta property="og:image" content="https://herballocks.vercel.app/banner.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://herballocks.vercel.app" />
        <meta property="twitter:title" content="Herbal Locks" />
        <meta
          property="twitter:description"
          content="Delays premature greying Keeps the scalp healthy Guranteed hair growth Nourishes the roots Hair loss control"
        />
        <meta
          property="twitter:image"
          content="https://herballocks.vercel.app/banner.png"
        />
        
        <link rel='icon' href='/logo.png' />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-V9RCP5437H" />
    </html>
  );
}
