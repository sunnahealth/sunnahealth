interface ReviewCardProps {
  rating: number;
  review: string;
  customerName: string;
  customerTitle: string;
  avatarSrc?: string;
}

export function ReviewCard({ 
  rating, 
  review, 
  customerName
}: ReviewCardProps) {
  return (
    <div className="w-full bg-white border border-[rgba(0,0,0,0.1)] rounded-[20px] p-6 md:p-7 lg:p-8">
      {/* Mobile Version (0-767px) */}
      <div className="flex flex-col gap-3 md:hidden">
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-[19px] h-[19px] ${i < rating ? 'bg-[#FFC633]' : 'bg-gray-300'}`}
              style={{
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              }}
            />
          ))}
        </div>
        
        {/* Review Content */}
        <p className="font-['Poppins'] font-normal text-sm leading-5 text-[rgba(0,0,0,0.6)]">
          {review}
        </p>
        
        {/* Customer Info */}
        <div className="flex items-center gap-1">
          <span className="font-['Poppins'] font-medium text-base leading-[22px] text-[#000000]">
            {customerName}
          </span>
          <div className="w-[19px] h-[19px] flex items-center justify-center">
            <svg width="15.38" height="15.38" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="8" fill="#01AB31"/>
              <path 
                d="M6 8l1.5 1.5L11 6" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Tablet Version (768-1023px) */}
      <div className="hidden md:flex lg:hidden flex-col gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-[20px] h-[20px] ${i < rating ? 'bg-[#FFC633]' : 'bg-gray-300'}`}
              style={{
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              }}
            />
          ))}
        </div>
        
        <p className="font-['Poppins'] font-normal text-base leading-[22px] text-[rgba(0,0,0,0.6)]">
          {review}
        </p>
        
        <div className="flex items-center gap-1">
          <span className="font-['Poppins'] font-medium text-[18px] leading-[24px] text-[#000000]">
            {customerName}
          </span>
          <div className="w-[20px] h-[20px] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="8" fill="#01AB31"/>
              <path 
                d="M6 8l1.5 1.5L11 6" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Desktop Version (1024px+) */}
      <div className="hidden lg:flex flex-col gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-[22px] h-[22px] ${i < rating ? 'bg-[#FFC633]' : 'bg-gray-300'}`}
              style={{
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              }}
            />
          ))}
        </div>
        
        <p className="font-['Poppins'] font-normal text-base leading-[22px] text-[rgba(0,0,0,0.6)]">
          {review}
        </p>
        
        <div className="flex items-center gap-1">
          <span className="font-['Poppins'] font-medium text-[20px] leading-[22px] text-[#000000]">
            {customerName}
          </span>
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
              <circle cx="9.5" cy="9.5" r="9.5" fill="#01AB31"/>
              <path 
                d="M6.5 9.5l2 2 4-4" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}