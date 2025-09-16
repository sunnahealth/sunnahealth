import { Container } from "../layout/Container";
import sunnahHealthLogo from "../../assets/images/sunnah-health-logo.svg";

export function Footer() {
  return (
    <footer className="w-full bg-[#F0F0F0]">
      <Container>
        <div className="py-8">
          {/* Main Content: Brand + Navigation */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="flex flex-col items-start gap-5">
              {/* Logo and Brand Name */}
              <div className="flex items-center gap-3">
                <img 
                  src={sunnahHealthLogo} 
                  alt="Sunnah Health Logo"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
                <h3 className="font-['Poppins'] font-bold text-[22px] md:text-[28px] leading-tight text-[#171717]">
                  SUNNAHEALTH
                </h3>
              </div>
              
              {/* Mobile: Description + Social Icons Side by Side / Desktop: Description then Social Icons */}
              <div className="flex flex-row md:flex-col items-start md:items-start md:gap-5 w-full">
                {/* Brand Description */}
                <p className="font-['Poppins'] font-light text-sm md:text-base leading-5 md:leading-6 text-[rgba(0,0,0,0.6)] max-w-[300px]">
                  Fuel your body with clean, halal-certified protein you can trust—crafted for every lifestyle, from gym-goers to wellness seekers.
                </p>
                
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="flex flex-wrap justify-start gap-x-8 gap-y-6">
              {/* Company */}
              <div className="flex flex-col gap-3 flex-shrink-0">
                <h4 className="font-['Poppins'] font-medium text-sm md:text-base leading-4 tracking-[2px] uppercase text-[#171717]">
                  COMPANY
                </h4>
                <div className="flex flex-col gap-2">
                  <a href="/about" className="font-['Poppins'] font-light text-sm md:text-base leading-4 md:leading-5 text-[rgba(0,0,0,0.6)]">About Us</a>
                  <a href="#" className="font-['Poppins'] font-light text-[14px] lg:text-[16px] leading-[16px] lg:leading-[19px] text-[rgba(0,0,0,0.6)]">Contact Us</a>
                </div>
              </div>
              
              {/* Help */}
              <div className="flex flex-col gap-3 flex-shrink-0">
                <h4 className="font-['Poppins'] font-medium text-sm md:text-base leading-4 tracking-[2px] uppercase text-[#171717]">
                  HELP
                </h4>
                <div className="flex flex-col gap-2">
                  <a href="/about" className="font-['Poppins'] font-light text-sm md:text-base leading-4 md:leading-5 text-[rgba(0,0,0,0.6)]">Customer Support</a>
                </div>
              </div>

            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-[rgba(0,0,0,0.1)] mb-5"></div>
          
          {/* Bottom Section */}
          <div className="flex justify-center">
            {/* Copyright */}
            <p className="font-['Poppins'] font-light text-sm leading-5 text-[rgba(0,0,0,0.6)] text-center">
              © 2025, All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
