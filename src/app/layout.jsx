import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BSides SWFL 2025- Get Your Tickets Now!",
  description: "For the BSides SWFL 2025 cybersecurity conference.",
  icons: {
    icon: "icon.ico",
    shortcut: "icon.ico",
    apple: "icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://js-na2.hsforms.net/forms/embed/242985282.js"></script>
        <script src="https://animatedicons.co/scripts/embed-animated-icons.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-purple-800 via-purple-400 to-blue-500 h-auto lg:h-[100vh] overflow-x-hidden`}>
        {/* Removed background video as per new design */}
        <Navbar />
        <main className="max-w-5xl w-auto min-h-screen md:w-[100vw] bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 mx-auto rounded-t-2xl opacity-92 md:opacity-98">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
