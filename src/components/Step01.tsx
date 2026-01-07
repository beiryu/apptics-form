import Image from 'next/image';

interface Step01Props {
  onNext?: () => void;
  onStepClick?: (step: number) => void;
}

export default function Step01({ onNext, onStepClick }: Step01Props) {
  return (
    <section className="flex flex-col items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 w-full">
      {/* Badge */}
      <div className="rounded-[14px] bg-white border border-[#F1F1F1] overflow-hidden flex items-center py-1.5 px-3 sm:py-2 sm:px-4 shrink-0 font-inter">
        <div className="text-xs sm:text-sm tracking-[-0.02em] leading-4 sm:leading-5 capitalize">
          Book a call with the team
        </div>
      </div>

      {/* Heading with Image */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 shrink-0 text-center sm:text-left text-7xl xl:text-[88px] text-darkslategray font-geist">
        <div className="tracking-[-0.04em] leading-[1.1] sm:leading-[1.1] md:leading-[1.1] lg:leading-[80px] font-medium">
          Scale with
        </div>
        <Image
          src="/step/logo-title.png"
          className="h-20 w-auto object-cover md:[transform:scale(0.92)] xl:[transform:scale(1.2)] mx-auto mt-2 md:-mx-2 xl:mx-6"
          width={292}
          height={80}
          sizes="100vw"
          alt=""
        />
      </div>

      {/* Description */}
      <div className="w-full max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl tracking-[-0.02em] leading-5 sm:leading-6 text-slategray shrink-0 px-2 sm:px-0 text-center">
        The Apptics team has spent the last 5 years building and scaling
        eCommerce and drop shipping brands, generating over $50 million in
        revenue.
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-2 sm:gap-3 shrink-0 text-sm sm:text-base w-full px-4 sm:px-0">
        <div className="flex items-center justify-center w-full sm:w-auto">
          <button
            className="h-[50px] shadow-[0px_145px_41px_rgba(54,_116,_217,_0.01),_0px_93px_37px_rgba(54,_116,_217,_0.04),_0px_52px_31px_rgba(54,_116,_217,_0.15),_0px_23px_23px_rgba(54,_116,_217,_0.26),_0px_6px_13px_rgba(54,_116,_217,_0.29)] rounded-2xl bg-white w-full sm:w-auto overflow-hidden shrink-0 flex items-center justify-center box-border isolate cursor-pointer transition-all duration-200 ease-in-out group p-0"
            onClick={onNext}
          >
            <div className="text-center w-full h-full rounded-2xl bg-[linear-gradient(147deg,rgba(78,168,247,1)_0%,rgba(58,56,153,1)_100%)] group-hover:bg-[linear-gradient(147deg,#EAA9C2_0%,#F04986_100%)] flex items-center justify-center transition-all duration-200 ease-in-out [box-shadow:inset_0px_0px_40px_rgba(255,255,255,0.6),inset_0px_0px_20px_rgba(255,255,255,0.5),inset_0px_2px_0px_rgba(255,255,255,0.7)]">
              <div className="flex items-center justify-center gap-3 px-6 py-0">
                <span className="text-white text-base tracking-[-0.03em] leading-6 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] whitespace-nowrap">
                  HELP ME SCALE
                </span>
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M8.293 0.292732C8.6591 -0.0733776 9.2381 -0.0959775 9.6309 0.224373L9.707 0.292732L15.707 6.2927L15.7754 6.3689C16.0957 6.7617 16.0731 7.3407 15.707 7.7068L9.707 13.7068C9.3165 14.0973 8.6835 14.0973 8.293 13.7068C7.9025 13.3163 7.9025 12.6833 8.293 12.2927L12.5859 7.9998H1C0.44772 7.9998 0 7.552 0 6.9998C0 6.4475 0.44772 5.9998 1 5.9998H12.5859L8.293 1.7068L8.2246 1.63063C7.9043 1.23785 7.9269 0.658852 8.293 0.292732Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="text-xs sm:text-sm tracking-[-0.02em] leading-5 sm:leading-6 text-slategray">
          Takes less than 30 seconds
        </div>
      </div>
    </section>
  );
}
