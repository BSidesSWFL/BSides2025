import { useState } from 'react';
import { Menu, X, ScrollText, Award } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

const navItems: NavItem[] = [
  { href: '/aboutus', icon: ScrollText, label: 'About Us' },
  { href: '/sponsors', icon: Award, label: 'Sponsors' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200"
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-gradient-to-b from-purple-900/95 to-pink-900/95 backdrop-blur-xl border-t border-purple-500/20">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center px-4 py-3 text-white/90 hover:text-white font-medium transition-all duration-200 hover:bg-white/10 rounded-xl backdrop-blur-sm border border-transparent hover:border-white/20"
                >
                  <Icon size={20} className="mr-3 opacity-80 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:to-yellow-100 transition-all duration-200">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
