interface Step12Props {
  onNext?: () => void;
  onStepClick?: (step: number) => void;
}

export default function Step12({ onNext }: Step12Props) {
  return (
    <div className="relative w-full h-screen flex flex-col rounded-num-16 bg-whitesmoke-100 border-whitesmoke-200 border-solid border-[1px] box-border overflow-hidden text-center text-[42px] text-darkslategray-100 font-inter">
      {/* Main Content Section */}
      <main className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-24 md:pb-32 lg:pb-[200px] overflow-y-auto">
        <section className="flex flex-col items-center justify-center gap-6 sm:gap-8 w-full max-w-4xl">
          {/* Header Section */}
          <header className="flex flex-col items-center gap-4 sm:gap-6 w-full">
            <h1 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] tracking-[-0.07em] leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[48px] font-medium font-geist px-2 sm:px-0">
              Book Your Scaling Call With The Apptics Team
            </h1>
            <div className="rounded-[15px] bg-cornflowerblue-200 flex items-center justify-center py-3 sm:py-[15px] px-3 sm:px-2.5 text-sm sm:text-base text-cornflowerblue-100 font-inter w-full max-w-2xl">
              <p className="w-full tracking-[-0.02em] leading-5 sm:leading-6 font-medium">
                In a 25-minute session, we&apos;ll map your growth bottlenecks,
                identify revenue leaks, and show the exact system we use to
                scale for 7–8 figure brands.
              </p>
            </div>
          </header>

          {/* Form Section */}
          <form className="flex flex-col items-stretch gap-3 sm:gap-4 w-full max-w-md text-left text-sm sm:text-[15px]">
            {/* Name Input */}
            <div className="w-full rounded-num-16 bg-darkslategray-300 border-darkslategray-200 border-solid border-[1px] box-border overflow-hidden flex items-center py-3 px-4 gap-2.5">
              <svg
                className="h-5 w-5 shrink-0"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
                  fill="currentColor"
                  fillOpacity="0.5"
                />
                <path
                  d="M10 12C5.58172 12 2 14.6863 2 18V20H18V18C18 14.6863 14.4183 12 10 12Z"
                  fill="currentColor"
                  fillOpacity="0.5"
                />
              </svg>
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 bg-transparent border-none outline-none tracking-num--0_03 leading-[22px] font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] opacity-num-0_5 text-darkslategray-100 placeholder:text-darkslategray-100"
              />
            </div>

            {/* Email Input */}
            <div className="w-full rounded-num-16 bg-darkslategray-300 border-darkslategray-200 border-solid border-[1px] box-border overflow-hidden flex items-center py-3 px-4 gap-2.5">
              <svg
                className="h-5 w-5 shrink-0"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5L10 10L17.5 5M2.5 15H17.5V5H2.5V15Z"
                  stroke="currentColor"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="email"
                placeholder="hi@echodzns.com"
                className="flex-1 bg-transparent border-none outline-none tracking-num--0_03 leading-[22px] font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] opacity-num-0_5 text-darkslategray-100 placeholder:text-darkslategray-100"
              />
            </div>

            {/* Contact Method Selection */}
            <div className="w-full rounded-num-16 bg-darkslategray-300 border-darkslategray-200 border-solid border-[1px] flex items-center p-1 sm:p-[5px] gap-2 sm:gap-2.5 text-sm text-white">
              <button
                type="button"
                className="flex-1 rounded-xl bg-cornflowerblue-100 border-gray border-solid border-[1px] overflow-hidden flex items-center justify-center py-1.5 px-3 sm:px-4 gap-2 sm:gap-2.5 cursor-pointer transition-all duration-200 ease-in-out hover:brightness-105 active:scale-[0.98]"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM11.5 10.5L6.5 13L7 8L12 3.5L11.5 10.5Z"
                    fill="white"
                  />
                </svg>
                <span className="tracking-num--0_03 leading-5 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  Telegram
                </span>
              </button>
              <button
                type="button"
                className="flex-1 rounded-xl overflow-hidden flex items-center justify-center py-1.5 px-3 sm:px-4 gap-2 sm:gap-2.5 text-darkslategray-100 cursor-pointer transition-all duration-200 ease-in-out hover:bg-opacity-10 active:scale-[0.98]"
              >
                <svg
                  className="h-4 w-4 shrink-0 opacity-num-0_5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 11.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V2.5C1.5 1.94772 1.94772 1.5 2.5 1.5H4.5M14.5 1.5L8.5 7.5M14.5 1.5V5.5M14.5 1.5H10.5"
                    stroke="currentColor"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="tracking-num--0_03 leading-5 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] opacity-num-0_5">
                  Phone Number
                </span>
              </button>
            </div>

            {/* Username Input */}
            <div className="w-full rounded-num-16 bg-darkslategray-300 border-darkslategray-200 border-solid border-[1px] box-border overflow-hidden flex items-center py-3 px-4 gap-2.5">
              <svg
                className="h-5 w-5 shrink-0"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM10 5C11.6569 5 13 6.34315 13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5ZM10 13C12.67 13 18 14.33 18 17V18H2V17C2 14.33 7.33 13 10 13Z"
                  fill="currentColor"
                  fillOpacity="0.5"
                />
              </svg>
              <input
                type="text"
                placeholder="@username"
                className="flex-1 bg-transparent border-none outline-none tracking-num--0_03 leading-[22px] font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] opacity-num-0_5 text-darkslategray-100 placeholder:text-darkslategray-100"
              />
            </div>
          </form>

          {/* CTA Button */}
          <button
            onClick={onNext}
            className="w-full sm:w-[350px] min-h-[44px] h-auto sm:h-12 shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2.5 px-4 sm:px-5 text-sm sm:text-base text-white cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
          >
            <span className="tracking-num--0_03 leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
              Book Scaling Call
            </span>
          </button>
        </section>
      </main>
    </div>
  );
}
