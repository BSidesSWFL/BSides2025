"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X, ScrollText, Calendar, User2, Users, Computer, Handshake, Tickets, Award } from "lucide-react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 backdrop-blur-lg border-b border-purple-500/20 shadow-2xl fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-48 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:bg-white">
              <Image
                src="/bsideslogo.png"
                alt="BSides SWFL Logo"
                width={180}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex flex-col mb-2 pt-2 md:pt-0 sm:flex-row gap-2 justify-center md:hidden">
            <Link
              href="https://lu.ma/btwze03o"
              className="group flex items-center px-4 py-2.5 text-white/90 hover:text-white font-medium transition-all duration-200 hover:bg-white/10 rounded-xl backdrop-blur-sm border border-transparent hover:border-white/20 hover:scale-105"
            >
              <Image src="/kindpng_278375.png" alt="Kindpng" width={20} height={20} className="mr-2 opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:to-yellow-100 transition-all duration-200">
                Tickets
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/aboutus" icon={ScrollText} label="About Us" />
            <NavLink href="/volunteer" icon={Handshake} label="Volunteer" />
            <NavLink href="https://lu.ma/btwze03o" icon={Tickets} label="Tickets" />
            <NavLink href="/sponsors" icon={Award} label="Sponsors" />
            <NavLink href="/speakers" icon={User2} label="Speakers" />
            <NavLink href="/workshops" icon={Computer} label="Workshops" />
            <NavLink href="/villages" icon={Users} label="Villages" />
            <NavLink href="/schedule" icon={Calendar} label="Schedule" />
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-purple-900/95 to-pink-900/95 backdrop-blur-xl border-t border-purple-500/20">
          <div className="container mx-auto px-4 py-6 space-y-2">
            <MobileNavLink href="/aboutus" icon={ScrollText} label="About Us" onClick={toggleMobileMenu} />
            <MobileNavLink href="/volunteer" icon={Handshake} label="Volunteer" onClick={toggleMobileMenu} />
            <MobileNavLink href="https://lu.ma/btwze03o" icon={Tickets} label="Tickets" onClick={toggleMobileMenu} />
            <MobileNavLink href="/sponsors" icon={Award} label="Sponsors" onClick={toggleMobileMenu} />
            <MobileNavLink href="/speakers" icon={User2} label="Speakers" onClick={toggleMobileMenu} />
            <MobileNavLink href="/workshops" icon={Computer} label="Workshops" onClick={toggleMobileMenu} />
            <MobileNavLink href="/villages" icon={Users} label="Villages" onClick={toggleMobileMenu} />
            <MobileNavLink href="/schedule" icon={Calendar} label="Schedule" onClick={toggleMobileMenu} />
          </div>
        </div>
      )}
    </nav>
  )
}

// Desktop Navigation Link Component
const NavLink = ({ href, icon: Icon, label }) => (
  <Link
    href={href}
    className="group flex items-center px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-200 hover:bg-white/10 rounded-xl backdrop-blur-sm border border-transparent hover:border-white/20 hover:scale-105"
  >
    <Icon size={18} className="mr-2 opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
    <span className="bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:to-yellow-100 transition-all duration-200">
      {label}
    </span>
  </Link>
)

// Mobile Navigation Link Component
const MobileNavLink = ({ href, icon: Icon, label, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="group flex items-center px-4 py-3 text-white/90 hover:text-white font-medium transition-all duration-200 hover:bg-white/10 rounded-xl backdrop-blur-sm border border-transparent hover:border-white/20"
  >
    <Icon size={20} className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
    <span className="bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:to-yellow-100 transition-all duration-200">
      {label}
    </span>
  </Link>
)

export default Navbar