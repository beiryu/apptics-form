import Image from 'next/image';
import ProgressIndicators from './ProgressIndicators';

interface Step04Props {
  onNext?: () => void;
}

export default function Step04({ onNext }: Step04Props) {
  return (
    <div className="relative w-full h-screen flex flex-col rounded-num-16 bg-whitesmoke-100 border-whitesmoke-200 border-solid border-[1px] box-border overflow-hidden text-center text-[42px] text-darkslategray font-geist">
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
        <section className="flex flex-col items-center justify-between gap-5 w-full max-w-4xl">
          {/* Question and Options */}
          <div className="flex flex-col items-center gap-8">
            {/* Question Header */}
            <div className="flex flex-col items-center gap-2.5">
              <h1 className="w-full tracking-[-0.07em] leading-[48px] font-medium">
                What best describes your current business model?
              </h1>
              <p className="w-full text-base tracking-[-0.02em] leading-4 font-inter text-slategray">
                (select only one)
              </p>
            </div>

            {/* Options Grid */}
            <div className="flex flex-col items-center justify-center text-left text-[22.5px] font-inter w-full max-w-4xl">
              <div className="grid grid-cols-2 gap-4 w-full">
                {/* Option 1 */}
                <button
                  className="w-full shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-start p-5 gap-[15px] cursor-pointer text-left"
                  onClick={onNext}
                >
                  <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                    📦
                  </div>
                  <div className="flex-1 text-[15px] tracking-num--0_03 leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                    DTC brand selling one time physical products
                  </div>
                </button>

                {/* Option 2 */}
                <button className="w-full shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-start p-5 gap-[15px] cursor-pointer text-left">
                  <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                    💳
                  </div>
                  <div className="flex-1 text-[15px] tracking-num--0_03 leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                    Subscription based brand (refill consumable, member credits,
                    or VIP/Rewards Club)
                  </div>
                </button>

                {/* Option 3 */}
                <button className="w-full shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-start p-5 gap-[15px] cursor-pointer text-left">
                  <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                    💻
                  </div>
                  <div className="flex-1 text-[15px] tracking-num--0_03 leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                    Digital store selling online downloads, files, community,
                    agency, etc
                  </div>
                </button>

                {/* Option 4 */}
                <button className="w-full shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-start p-5 gap-[15px] cursor-pointer text-left">
                  <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                    🌱
                  </div>
                  <div className="flex-1 text-[15px] tracking-num--0_03 leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                    I&apos;m just starting out
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ProgressIndicators currentStep={4} />
    </div>
  );
}
