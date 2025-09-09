export function Newsletter() {
  return (
    <div className="w-[90%] mx-auto mb-10 max-w-[1240px] bg-[#171717] rounded-[20px]">
      {/* Mobile Version (0-767px) */}
      <div className="flex flex-col items-center px-4 py-8 gap-6 text-center md:hidden">
        {/* Newsletter Title */}
        <h2 className="font-['Poppins'] font-bold text-[28px] leading-[32px] text-white">
          STAY UP TO DATE ABOUT OUR LATEST RELEASES
        </h2>

        {/* Newsletter Form */}
        <div className="flex flex-col items-center gap-3 w-full max-w-[280px]">
          {/* Email Input */}
          <div className="flex flex-row items-center px-4 py-3 gap-3 w-full h-[42px] bg-white rounded-[62px]">
            <div className="w-5 h-5 flex-none">
              <img
                src="/src/assets/images/newlestter-mail.svg"
                alt="Email icon"
                className="w-5 h-5"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 font-['Poppins'] font-normal text-sm leading-[21px] text-[rgba(0,0,0,0.4)] border-none outline-none bg-transparent placeholder:text-[rgba(0,0,0,0.4)] min-w-0"
            />
          </div>

          {/* Subscribe Button */}
          <button className="flex justify-center items-center px-4 py-3 w-full h-[42px] bg-white rounded-[62px] hover:bg-gray-50 transition-colors">
            <span className="font-['Poppins'] font-medium text-sm leading-[21px] text-[#171717]">
              Be a part of the community
            </span>
          </button>
        </div>
      </div>

      {/* Tablet Version (768-1023px) */}
      <div className="hidden md:flex lg:hidden flex-col items-center px-6 py-10 gap-8 text-center">
        <h2 className="font-['Poppins'] font-bold text-[36px] leading-[40px] text-white max-w-full">
          STAY UP TO DATE ABOUT OUR LATEST RELEASES
        </h2>

        <div className="flex flex-col items-center gap-4 w-full max-w-[350px]">
          <div className="flex flex-row items-center px-4 py-3 gap-3 w-full h-[48px] bg-white rounded-[62px]">
            <div className="w-6 h-6 flex-none">
              <img
                src="/src/assets/images/newlestter-mail.svg"
                alt="Email icon"
                className="w-6 h-6"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 font-['Poppins'] font-normal text-base leading-[22px] text-[rgba(0,0,0,0.4)] border-none outline-none bg-transparent placeholder:text-[rgba(0,0,0,0.4)] min-w-0"
            />
          </div>

          <button className="flex justify-center items-center px-4 py-3 w-full h-[48px] bg-white rounded-[62px] hover:bg-gray-50 transition-colors">
            <span className="font-['Poppins'] font-medium text-base leading-[22px] text-[#171717]">
              Be a part of the community
            </span>
          </button>
        </div>
      </div>

      {/* Desktop Version (1024px+) */}
      <div className="hidden lg:flex flex-row justify-between items-center px-8 lg:px-16 py-9 gap-8">
        <h2 className="flex-1 max-w-[551px] font-['Poppins'] font-bold text-[40px] leading-[45px] text-white">
          STAY UP TO DATE ABOUT OUR LATEST RELEASES
        </h2>

        <div className="flex flex-col items-start gap-[14px] w-full max-w-[349px] flex-shrink-0">
          <div className="flex flex-row items-center px-4 py-3 gap-3 w-full h-12 bg-white rounded-[62px]">
            <div className="w-6 h-6 flex-none">
              <img
                src="/src/assets/images/newlestter-mail.svg"
                alt="Email icon"
                className="w-6 h-6"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 font-['Poppins'] font-normal text-base leading-[22px] text-[rgba(0,0,0,0.4)] border-none outline-none bg-transparent placeholder:text-[rgba(0,0,0,0.4)] min-w-0"
            />
          </div>

          <button className="flex justify-center items-center px-4 py-3 w-full h-[46px] bg-white rounded-[62px] hover:bg-gray-50 transition-colors">
            <span className="font-['Poppins'] font-medium text-base leading-[22px] text-[#171717]">
              Be a part of the community
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
