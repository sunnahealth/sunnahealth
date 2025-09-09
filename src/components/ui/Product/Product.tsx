export interface ProductProps {
  name: string;
  imageUrl: string;
  className?: string;
}

export function Product({ name, imageUrl, className = "" }: ProductProps) {
  return (
    <div className={`flex flex-col gap-1.5 w-[160px] sm:w-[180px] md:w-[220px] lg:w-[280px] group cursor-pointer ${className}`}>
      {/* Product Image */}
      <div className="w-full aspect-square bg-[#F0EEED] rounded-[13px] md:rounded-[16px] lg:rounded-[20px] relative flex items-center justify-center transition-all duration-300 group-hover:bg-[#E8E6E5] group-hover:scale-105">
        <img
          src={imageUrl}
          alt={name}
          className="w-[120px] h-[180px] sm:w-[140px] sm:h-[210px] md:w-[160px] md:h-[240px] lg:w-[200px] lg:h-[300px] object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Name */}
      <h3 className="font-['Poppins'] font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-tight text-[#000000] w-full group-hover:text-[#666] transition-colors duration-300">
        {name}
      </h3>
    </div>
  );
}

export default Product;