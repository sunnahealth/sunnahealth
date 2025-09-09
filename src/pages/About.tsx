import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Container } from "../components/layout/Container";
import { Newsletter } from "../components/ui/Newsletter";


function About() {

  const sectionData = [
    {
      id: 1,
      title: "Developing Confident and Healthy Individuals",
      description: "At SUNNAHEALTH, we believe that wellness begins with trust. Our halal-certified protein powder is designed to empower your fitness journey—supporting muscle growth, recovery, and overall vitality. Whether you're training hard or simply staying active, our clean, high-quality formula helps you feel strong, energized, and proud of what fuels you."
    },
    {
      id: 2,
      title: "Enjoy a Unique and Delicious Experience",
      description: "Healthy choices should never feel like a compromise. That's why our protein powder blends premium nutrition with rich, satisfying flavors. From creamy vanilla to bold chocolate, each scoop is crafted to delight your taste buds while delivering the protein your body needs. No artificial additives, no shortcuts—just pure, halal-certified goodness."
    },
    {
      id: 3,
      title: "Passionate Commitment to Quality",
      description: "We're not just a supplement—we're a commitment to clean, halal-certified nutrition. Made with responsibly sourced ingredients and transparent processes, our protein powder reflects your values while supporting your goals with confidence."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />

      {/* Breadcrumb */}
      <section className="hidden lg:block">
        <Container>
          <div className="flex items-center gap-3 py-4">
            <Link to="/" className="font-['Poppins'] font-normal text-base text-[rgba(0,0,0,0.6)]">
              Home
            </Link>
            <svg className="w-4 h-4 text-[rgba(0,0,0,0.6)]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
            <span className="font-['Poppins'] font-normal text-base text-[#000000]">About Us</span>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="hidden lg:block border-t border-[rgba(0,0,0,0.1)]"></div>

      {/* About Us Hero Section */}
      <section className="py-8 lg:py-16">
        <Container>
          <div className="flex flex-col items-center gap-6 lg:gap-9">
            <div className="flex flex-col items-center text-center max-w-[317px] lg:max-w-[663px]">
              <h1 className="font-['Poppins'] font-bold text-[24px] leading-[36px] lg:text-[40px] lg:leading-[60px] text-[#000000] mb-4 lg:mb-6">
                About Us
              </h1>
              <p className="font-['Poppins'] font-semibold text-[14px] leading-[21px] lg:text-[24px] lg:leading-[36px] text-[#171717]">
                Lorem ipsum dolor sit amet consectetur. Non at arcu nisl et egestas. Facilisis velit cras tristique vitae cras nulla. In ultrices et id gravida adipiscing congue nec.
              </p>
            </div>
            <button className="bg-[#171717] text-white font-['Poppins'] font-medium text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] px-[54px] py-4 rounded-[62px] hover:bg-[#333] transition-colors">
              See More
            </button>
          </div>
        </Container>
      </section>

      {/* Main Tagline */}
      <section className="py-8 lg:py-16">
        <Container>
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-['Poppins'] font-semibold text-[30px] leading-[45px] lg:text-[45px] lg:leading-[68px] text-center text-[#000000] max-w-[352px] lg:max-w-[876px]">
              Preparing Athletes to Achieve Success
            </h2>
            <div className="w-[283.63px] lg:w-[283.63px] h-[3px] lg:h-[40px] bg-[#C1C1C1] rounded-full"></div>
          </div>
        </Container>
      </section>

      {/* Content Sections */}
      <section className="py-8 lg:py-16">
        <Container>
          <div className="flex flex-col gap-12 lg:gap-24">
            {sectionData.map((section, index) => (
              <div key={section.id} className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Placeholder */}
                <div className="w-full lg:w-1/2">
                  <div className="w-full aspect-square lg:aspect-[450/450] bg-[#E0E0E0] rounded-[20px] lg:rounded-[20px] flex items-center justify-center">
                    <div className="w-[300px] h-[300px] lg:w-[370px] lg:h-[370px] bg-[#C1C1C1] rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6">
                  <div className="flex flex-col gap-6 lg:gap-6">
                    <div className="relative">
                      <h3 className={`font-['Poppins'] font-semibold text-[28px] leading-[42px] lg:text-[36px] lg:leading-[54px] text-[#000000] ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                        {section.title}
                      </h3>
                      <div className={`w-[309px] h-[3px] bg-[#E0E0E0] mt-2 ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}></div>
                    </div>
                    <p className={`font-['Poppins'] font-normal text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px] text-[#848383] ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                      {section.description}
                    </p>
                  </div>
                  <div className={`flex ${index % 2 === 1 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <button className="bg-[#171717] text-white font-['Poppins'] font-medium text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] px-[54px] py-4 rounded-[62px] hover:bg-[#333] transition-colors">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <div className="bg-[#F0F0F0] lg:bg-[#F0F0F0]">
        <Container>
          <div className="py-12 lg:py-16">
            {/* Footer Content */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Company Info */}
              <div className="flex flex-col gap-6 lg:max-w-[291px]">
                <h3 className="font-['Poppins'] font-bold text-[22px] lg:text-[32px] leading-[33px] lg:leading-[48px] text-[#171717]">
                  SUNNAHEALTH
                </h3>
                <p className="font-['Poppins'] font-light text-[14px] leading-[20px] lg:leading-[22px] text-[rgba(0,0,0,0.6)]">
                  Fuel your body with clean, halal-certified protein you can trust—crafted for every lifestyle, from gym-goers to wellness seekers. Made for men and women who take pride in what powers them.
                </p>
                
              </div>

              {/* Footer Links - Mobile: 2 columns, Desktop: 4 columns */}
              <div className="flex flex-wrap gap-12 lg:gap-16 flex-1">
                <div className="flex flex-col gap-4">
                  <h4 className="font-['Poppins'] font-normal text-[14px] lg:text-[16px] leading-[18px] uppercase tracking-[3px] text-[#000000] lg:text-[#171717]">
                    Company
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="font-['Poppins'] font-light text-[14px] lg:text-[16px] leading-[16px] lg:leading-[19px] text-[rgba(0,0,0,0.6)]">About</a>
                    <a href="#" className="font-['Poppins'] font-light text-[14px] lg:text-[16px] leading-[16px] lg:leading-[19px] text-[rgba(0,0,0,0.6)]">Features</a>
                    <a href="#" className="font-['Poppins'] font-light text-[14px] lg:text-[16px] leading-[16px] lg:leading-[19px] text-[rgba(0,0,0,0.6)]">Works</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="font-['Poppins'] font-normal text-[14px] lg:text-[16px] leading-[18px] uppercase tracking-[3px] text-[#000000] lg:text-[#171717]">
                    Help
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="font-['Poppins'] font-light text-[14px] lg:text-[16px] leading-[16px] lg:leading-[19px] text-[rgba(0,0,0,0.6)]">Customer Support</a>
                    <a href="#" className="font-['Poppins'] font-light text-[14px] lg:text-[16px] leading-[16px] lg:leading-[19px] text-[rgba(0,0,0,0.6)]">Delivery Details</a>
                    <a href="#" className="font-['Poppins'] font-light text-[14px] lg:text-[16px] leading-[16px] lg:leading-[19px] text-[rgba(0,0,0,0.6)]">Terms & Conditions</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4 lg:hidden">
                  <h4 className="font-['Poppins'] font-normal text-[14px] leading-[18px] uppercase tracking-[3px] text-[#000000]">
                    FAQ
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="font-['Poppins'] font-light text-[14px] leading-[16px] text-[rgba(0,0,0,0.6)]">Account</a>
                    <a href="#" className="font-['Poppins'] font-light text-[14px] leading-[16px] text-[rgba(0,0,0,0.6)]">Manage Deliveries</a>
                    <a href="#" className="font-['Poppins'] font-light text-[14px] leading-[16px] text-[rgba(0,0,0,0.6)]">Orders</a>
                  </div>
                </div>

                <div className="flex flex-col gap-4 lg:hidden">
                  <h4 className="font-['Poppins'] font-normal text-[14px] leading-[18px] uppercase tracking-[3px] text-[#000000]">
                    Resources
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="font-['Poppins'] font-light text-[14px] leading-[16px] text-[rgba(0,0,0,0.6)]">Free eBooks</a>
                    <a href="#" className="font-['Poppins'] font-light text-[14px] leading-[16px] text-[rgba(0,0,0,0.6)]">Development Tutorial</a>
                    <a href="#" className="font-['Poppins'] font-light text-[14px] leading-[16px] text-[rgba(0,0,0,0.6)]">How to - Blog</a>
                  </div>
                </div>

                {/* Desktop additional columns */}
                <div className="hidden lg:flex flex-col gap-4">
                  <h4 className="font-['Poppins'] font-medium text-[16px] leading-[18px] uppercase tracking-[3px] text-[#171717]">
                    FAQ
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="font-['Poppins'] font-light text-[16px] leading-[19px] text-[rgba(0,0,0,0.6)]">Account</a>
                    <a href="#" className="font-['Poppins'] font-light text-[16px] leading-[19px] text-[rgba(0,0,0,0.6)]">Manage Deliveries</a>
                    <a href="#" className="font-['Poppins'] font-light text-[16px] leading-[19px] text-[rgba(0,0,0,0.6)]">Orders</a>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col gap-4">
                  <h4 className="font-['Poppins'] font-medium text-[16px] leading-[18px] uppercase tracking-[3px] text-[#171717]">
                    Resources
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="font-['Poppins'] font-light text-[16px] leading-[19px] text-[rgba(0,0,0,0.6)]">Free eBooks</a>
                    <a href="#" className="font-['Poppins'] font-light text-[16px] leading-[19px] text-[rgba(0,0,0,0.6)]">Development Tutorial</a>
                    <a href="#" className="font-['Poppins'] font-light text-[16px] leading-[19px] text-[rgba(0,0,0,0.6)]">How to - Blog</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[rgba(0,0,0,0.1)] my-8 lg:my-12"></div>

            {/* Bottom Footer */}
            <div className="flex justify-center">
              <p className="font-['Poppins'] font-light text-[14px] leading-[21px] text-[rgba(0,0,0,0.6)] text-right lg:text-left">
                © 2000-2021, All rights reserved
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default About;