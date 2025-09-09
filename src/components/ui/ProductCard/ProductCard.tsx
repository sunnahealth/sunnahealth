// Component for product display cards

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  image: string;
  imageAlt?: string;
  className?: string;
  onCardClick?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  discount,
  rating,
  image,
  imageAlt = "",
  className = "",
  onCardClick,
}: ProductCardProps) {
  const handleClick = () => {
    onCardClick?.(id);
  };

  // Generate star rating (4 stars as shown in design)
  const starRating = Array.from({ length: 4 }, (_, i) => (
    <div
      key={i}
      className={`w-[18.49px] h-[18.49px] ${
        i < rating ? "bg-[#FFC633]" : "bg-gray-300"
      }`}
      style={{
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
      }}
    />
  ));

  return (
    <div
      className={`
        flex flex-col justify-center items-start 
        p-8 gap-6 w-[377px] h-[444px]
        bg-white rounded-[24px] cursor-pointer 
        hover:shadow-lg transition-shadow duration-200
        ${className}
      `}
      onClick={handleClick}
    >
      {/* Product Image Container */}
      <div className="flex flex-row items-center justify-center p-[46px_80px] w-[297px] h-[301px] bg-[#F1F1F1] rounded-[24px]">
        <img
          src={image}
          alt={imageAlt || name}
          className="w-[137px] h-[209px] object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-start gap-4 w-[297px]">
        {/* Product Name */}
        <h3 className="font-['Poppins'] font-normal text-[20px] leading-[30px] text-black">
          {name}
        </h3>

        {/* Rating and Price Row */}
        <div className="flex flex-row items-start gap-2.5 w-[297px]">
          {/* Rating */}
          <div className="flex flex-col items-start gap-2.5 flex-1">
            <div className="flex flex-row items-start gap-[5.31px]">
              {starRating}
            </div>
          </div>

          {/* Price Section */}
          <div className="flex flex-row items-center gap-2.5">
            <span className="font-['Poppins'] font-medium text-[22px] leading-[33px] text-black">
              ${price}
            </span>

            {originalPrice && (
              <span className="font-['Poppins'] font-normal text-[22px] leading-[33px] text-[rgba(0,0,0,0.4)] line-through">
                ${originalPrice}
              </span>
            )}

            {discount && (
              <div className="flex flex-row justify-center items-center px-[14px] py-[6px] gap-3 bg-[rgba(255,51,51,0.1)] rounded-[62px]">
                <span className="font-['Poppins'] font-normal text-[12px] leading-[18px] text-[#FF3333]">
                  -{discount}%
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
