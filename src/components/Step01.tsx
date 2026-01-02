import Image from 'next/image';

interface Step01Props {
  onNext?: () => void;
  onStepClick?: (step: number) => void;
}

export default function Step01({ onNext, onStepClick }: Step01Props) {
  return (
    <section className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full">
      {/* Badge */}
      <div className="rounded-[14px] bg-transparent overflow-hidden flex items-center py-1.5 px-3 sm:py-2 sm:px-4 shrink-0 font-inter">
        <div className="text-xs sm:text-sm tracking-[-0.02em] leading-4 sm:leading-5 capitalize">
          Book a call with the team
        </div>
      </div>

      {/* Heading with Image */}
      <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-2 shrink-0 text-left text-7xl xl:text-[88px] text-darkslategray font-geist">
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
      <div className="flex flex-col items-center gap-2 sm:gap-3 shrink-0 text-sm sm:text-base text-white">
        <div className="flex items-start w-full sm:w-auto">
          <button
            className="w-full sm:w-[325px] min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-center py-2.5 px-5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
            onClick={onNext}
          >
            <div className="text-sm sm:text-base tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
              Help me Scale
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
