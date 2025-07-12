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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-purple-800 via-purple-400 to-blue-500 h-auto lg:h-[100vh] overflow-x-hidden`}>
        <video
          autoPlay
          loop
          muted
          className="fixed -z-10 min-w-full h-auto cover max-w-[1200px] md:max-w-[100vw] md:h-[870px] lg:h-[1080px] xl:h-[870px] 2xl:h-[1080px] opacity-45"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <Navbar />
        <main className="max-w-5xl w-auto h-auto md:h-[90vh] md:w-[100vw] bg-gradient-to-br from-amber-50 via-orange-50 to-red-50  mx-auto rounded-t-2xl opacity-92 md:opacity-98">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
