import Image from 'next/image';
import ProgressIndicators from './ProgressIndicators';

interface Step07Props {
  onNext?: () => void;
}

export default function Step07({ onNext }: Step07Props) {
  return (
    <div className="relative w-full h-screen flex flex-col rounded-2xl bg-whitesmoke-100 border-whitesmoke-200 border-solid border-[1px] box-border overflow-hidden text-center text-[42px] text-darkslategray font-geist">
      {/* Header: Logo */}
      <header className="flex items-center justify-center pt-6">
        <Image
          src="/step/logo.png"
          className="w-24 h-[30px] object-cover"
          width={96}
          height={30}
          sizes="100vw"
          alt="Logo"
        />
      </header>

      {/* Main Content Section */}
      <main className="absolute top-40 left-0 right-0 flex items-center justify-center w-full px-4">
        <section className="flex flex-col items-center justify-between gap-5 w-full max-w-[640px]">
          {/* Question and Buttons */}
          <div className="flex flex-col items-center gap-8">
            <h1 className="w-full tracking-[-0.07em] leading-[48px] font-medium">
              Do you believe your business could scale faster with the right
              systems in place?
            </h1>
            <div className="flex items-start gap-4 text-base text-white font-inter">
              <button
                onClick={onNext}
                className="w-[350px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2.5 px-5 gap-2.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
              >
                <span className="tracking-[-0.03em] leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  ✅
                </span>
                <span className="tracking-[-0.03em] leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  Yes, we just need the right system
                </span>
              </button>
              <button
                onClick={onNext}
                className="w-[350px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2.5 px-5 gap-2.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
              >
                <span className="tracking-[-0.03em] leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  ❌
                </span>
                <span className="tracking-[-0.03em] leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  No, scaling isn&apos;t our goal
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <ProgressIndicators currentStep={7} />
    </div>
  );
}
