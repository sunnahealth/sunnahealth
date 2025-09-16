import { Header } from "../components/layout/Header";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { Product } from "../components/ui/Product";
import { ReviewCard } from "../components/ui/ReviewCard";
import { Newsletter } from "../components/ui/Newsletter";
import { Footer } from "../components/ui/Footer";

// Import product images
import mapleIceCreamProtein from "../assets/images/product/Maple_Ice_Cream_Protein.png";
import collagenLogo from "../assets/images/product/Collagen_Logo.png";

function Home() {
  // Sample review data
  const reviews = [
    {
      id: "1",
      rating: 5,
      review:
        "I'm blown away by the quality of these protein products! As someone who follows a halal lifestyle, finding high-quality supplements has always been challenging. This brand delivers on both purity and performance.",
      customerName: "Sarah M.",
      customerTitle: "Verified Buyer",
    },
    {
      id: "2",
      rating: 5,
      review:
        "The chocolate flavor is absolutely delicious! I've tried many protein powders before, but this one actually tastes great and mixes perfectly. Plus, knowing it's halal certified gives me complete peace of mind.",
      customerName: "Ahmed K.",
      customerTitle: "Verified Buyer",
    },
    {
      id: "3",
      rating: 5,
      review:
        "Fast shipping and excellent customer service! The strawberry flavor exceeded my expectations. I've already recommended this to my gym buddies. Will definitely be ordering again!",
      customerName: "Fatima R.",
      customerTitle: "Verified Buyer",
    },
  ];


  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Container>
          {/* Hero Section - Mobile First Responsive */}
          <div className="lg:hidden w-full max-w-[1240px] mx-auto px-4 py-8">
            {/* Parent Container */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-8 p-4 max-w-[1200px] mx-auto">
              {/* Content Container - Mobile: full width, Tablet+: flexible */}
              <div className="w-full md:flex-1 p-4 mb-8 md:mb-0">
                {/* Heading - Mobile: 36px, stays same on tablet+ */}
                <h1 className="font-['Poppins'] font-bold text-[36px] leading-[34px] text-[#000000] mb-5">
                  Where purity meets performance
                </h1>

                {/* Description - Mobile: 14px, stays same */}
                <p className="font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.6)] mb-7">
                  Explore our carefully formulated range of halal protein
                  products, crafted to support your wellness journey and align
                  with your values for clean, conscious living
                </p>

                {/* Button - Mobile: full width-ish, Tablet+: auto width */}
                <button 
                  onClick={() => document.getElementById('shop-now')?.scrollIntoView({ behavior: 'smooth' })}
                  className="h-[52px] bg-[#000000] rounded-[62px] flex items-center justify-center px-14 py-4 mb-6 md:max-w-[300px] cursor-pointer"
                >
                  <span className="font-['Poppins'] font-medium text-[14px] leading-[21px] text-[#FFFFFF]">
                    Shop Now
                  </span>
                </button>
              </div>

              {/* Images Container - Mobile: full width below content, Tablet+: fixed width beside content */}
              <div className="w-full md:w-[300px] md:flex-shrink-0 p-4 flex items-center justify-center">
                <img
                  src={mapleIceCreamProtein}
                  alt="Maple Ice Cream Protein"
                  className="h-[200px] md:h-[250px] w-auto object-contain"
                />
              </div>
            </div>

          </div>

          {/* Desktop Layout (992px+) */}
          <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 py-8 md:py-16 max-w-[1200px] mx-auto">
            <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
              <h1 className="text-[36px] leading-[34px] md:text-hero text-[#171717] font-bold">
                Where purity meets performance
              </h1>
              <p className="text-sm md:text-body text-[rgba(0,0,0,0.6)] max-w-[545px] leading-5 md:leading-normal mx-auto lg:mx-0">
                Explore our carefully formulated range of halal protein
                products, crafted to support your wellness journey and align
                with your values for clean, conscious living
              </p>
              <Button
                variant="primary"
                size="lg"
                className=""
                onClick={() => document.getElementById('shop-now')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Now
              </Button>
            </div>

            <div className="hidden lg:block flex-1">
              <div className="relative max-w-[600px] mx-auto">
                <div className="flex items-center justify-center">
                  <img
                    src={mapleIceCreamProtein}
                    alt="Maple Ice Cream Protein"
                    className="w-auto h-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* Top Selling Section */}
      <section className="py-8 md:py-16">
        <Container>
          <div className="w-full max-w-[1240px] mx-auto">
            {/* Section Title */}
            <h2 className="font-['Poppins'] font-bold text-[32px] leading-[48px] text-center text-[#000000] mb-8">
              TOP SELLING
            </h2>

            {/* Single Product - Centered */}
            <div className="flex justify-center px-4">
              <Product
                name="Maple Ice Cream Protein"
                imageUrl={mapleIceCreamProtein}
              />
            </div>
          </div>
        </Container>
      </section>


      {/* Shop Now Section */}
      <section id="shop-now" className="py-8 md:py-16">
        <Container>
          <div className="w-full max-w-[1240px] mx-auto">
            {/* Section Title */}
            <h2 className="font-['Poppins'] font-bold text-[32px] leading-[48px] text-center text-[#000000] mb-8">
              Shop Now
            </h2>

            {/* Products Grid */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 px-4">
              {/* Protein Powder */}
              <Product
                name="Protein Powder"
                imageUrl={mapleIceCreamProtein}
              />
              
              {/* Collagen / Gelatin */}
              <Product
                name="Collagen / Gelatin"
                imageUrl={collagenLogo}
              />
              
              {/* Bone Broth Supplement */}
              <Product
                name="Bone Broth Supplement"
                imageUrl={mapleIceCreamProtein}
              />
            </div>
          </div>
        </Container>
      </section>


      {/* Reviews Section */}
      <section className="py-8 md:py-16">
        <Container>
          <div className="flex flex-col items-center gap-6 w-full max-w-[1241px] mx-auto">
            <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-tight text-center text-black">
              Actual Reviews
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
              {reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  rating={review.rating}
                  review={review.review}
                  customerName={review.customerName}
                  customerTitle={review.customerTitle}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
