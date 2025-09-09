export interface TestimonialCardProps {
  id: string;
  customerName: string;
  rating: number;
  content: string;
  verified?: boolean;
  className?: string;
}

export function TestimonialCard({
  customerName,
  rating,
  content,
  verified = false,
  className = '',
}: TestimonialCardProps) {
  // Generate star rating (5 stars as shown in design)
  const starRating = Array.from({ length: 5 }, (_, i) => (
    <div
      key={i}
      className={`w-[22.58px] h-[22.58px] ${i < rating ? 'bg-[#FFC633]' : 'bg-gray-300'}`}
      style={{
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
      }}
    />
  ));

  return (
    <div
      className={`
        flex flex-row flex-wrap items-start content-start 
        p-[28px_32px] gap-6 w-[400px] h-[240px]
        border border-[rgba(0,0,0,0.1)] rounded-[20px]
        ${className}
      `}
    >
      <div className="flex flex-row justify-between items-start gap-6 w-[336px]">
        <div className="flex flex-col items-start gap-[15px] flex-1 w-[336px]">
          {/* Star Rating */}
          <div className="flex flex-row items-start gap-[6.49px] w-[138.84px] h-[22.58px]">
            {starRating}
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-start gap-3 w-[336px]">
            {/* Customer Name and Verification */}
            <div className="flex flex-row items-center gap-1 h-6">
              <span className="font-['Satoshi'] font-bold text-[20px] leading-[22px] text-[#171717]">
                {customerName}
              </span>
              
              {verified && (
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#01AB31"/>
                    <path 
                      d="M9 12l2 2 4-4" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Testimonial Content */}
            <p className="
              w-[336px] font-['Poppins'] font-light text-base leading-[22px] 
              text-[rgba(0,0,0,0.6)]
            ">
              "{content}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;