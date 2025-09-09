interface FlavorCardProps {
  name: string;
  backgroundColor: string;
  textColor: string;
  vectorUrl: string;
  imageUrl: string;
  width?: string;
  height?: string;
  imageWidth?: string;
  imageHeight?: string;
  imagePosition?: {
    left: string;
    top: string;
  };
  vectorPosition?: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
  isMobile?: boolean;
}

export function FlavorCard({
  name,
  backgroundColor,
  textColor,
  vectorUrl,
  imageUrl,
  width = "407px",
  height = "289px",
  isMobile = false
}: FlavorCardProps) {
  return (
    <div
      className="relative rounded-[20px] overflow-hidden"
      style={{
        width,
        height,
        backgroundColor
      }}
    >
      {/* Vector Background */}
      <img
        src={vectorUrl}
        alt={`${name} vector background`}
        className="absolute object-contain max-[768px]:min-[451px]:-right-[80%] min-[769px]:-right-[25%]"
        style={{
          width: isMobile ? "180px" : "80%",
          height: isMobile ? "140px" : "70%",
          right: isMobile ? "10%" : undefined,
          top: isMobile ? "-10px" : "-5%",
          transform: "rotate(0deg)",
          zIndex: 1
        }}
      />
      
      {/* Flavor Name */}
      <h3
        className="absolute font-['Poppins'] font-medium text-[36px] leading-[54px] max-[450px]:text-[24px] max-[450px]:leading-[36px] max-[450px]:!left-[24px] max-[450px]:!top-[50%] max-[450px]:transform max-[450px]:-translate-y-1/2 flex items-center z-10"
        style={{
          left: isMobile ? "24px" : "8%",
          top: isMobile ? "50%" : "11%",
          transform: isMobile ? "translateY(-50%)" : "none",
          color: textColor
        }}
      >
        {name}
      </h3>
      
      {/* Product Image */}
      <img
        src={imageUrl}
        alt={`${name} flavor`}
        className="absolute object-contain z-10"
        style={{
          width: isMobile ? "70px" : "35%",
          height: isMobile ? "110px" : "75%",
          right: isMobile ? "15%" : "12%",
          top: isMobile ? "50%" : "55%",
          transform: isMobile ? "translate(50%, -50%)" : "translateY(-50%)"
        }}
      />
    </div>
  );
}