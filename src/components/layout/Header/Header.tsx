import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../Container";
import sunnahHealthLogo from "../../../assets/images/sunnah-health-logo.svg";
import hamburgerMenuIcon from "../../../assets/images/hamburger-menu.svg";

export interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Land Here", href: "/" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header className={`w-full bg-[#FAFAFA] relative ${className}`}>
      <Container>
        {/* Main Header - 3 Breakpoints: Mobile/Tablet/Desktop */}
        <div className="flex justify-between items-center py-6 md:py-8 lg:py-12 relative">
          
          {/* Logo Section - 3 Breakpoint sizing */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 lg:gap-2.5">
            <img
              src={sunnahHealthLogo}
              alt="Sunnah Health Logo"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-[45px] lg:h-11 object-contain"
            />
            <h1 className="font-['Poppins'] font-bold text-[22px] md:text-[28px] lg:text-[32px] leading-tight text-[#171717]">
              SUNNAHEALTH
            </h1>
          </Link>

          {/* Navigation - Tablet: in flex, Desktop: absolutely positioned */}
          <nav className="hidden md:flex lg:hidden items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="font-['Poppins'] font-normal text-base leading-6 text-[#171717] hover:text-[#666] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Icons Section - 3 Breakpoint system */}
          <div className="flex items-center gap-3 md:gap-4 lg:gap-[14px]">
            {/* Hamburger Menu - Mobile Only (0-767px) */}
            <button 
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <img
                src={hamburgerMenuIcon}
                alt="Menu"
                className="w-8 h-8 object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation - Absolutely positioned in center */}
          <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="font-['Poppins'] font-normal text-base leading-6 text-[#171717] hover:text-[#666] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>

      {/* Mobile Menu Overlay - Mobile Only (0-767px) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-[rgba(0,0,0,0.1)] z-50">
          <div className="px-4 py-6 space-y-6">
            
            {/* Mobile Navigation */}
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block font-['Poppins'] font-normal text-lg leading-6 text-[#171717] hover:text-[#666] transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

          </div>
        </div>
      )}
    </header>
  );
}

export default Header;