import Image from 'next/image';
import ProgressIndicators from './ProgressIndicators';

interface Step08Props {
  onNext?: () => void;
}

export default function Step08({ onNext }: Step08Props) {
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
                What kind of help are you looking for?
              </h1>
              <p className="w-full text-base tracking-[-0.02em] leading-4 font-inter text-slategray">
                (select only one)
              </p>
            </div>

            {/* Options Grid */}
            <div className="flex flex-col items-center justify-center text-left text-[22.5px] font-inter">
              <div className="flex flex-col items-start gap-4">
                {/* First Row */}
                <div className="flex items-start gap-4">
                  <button
                    onClick={onNext}
                    className="w-[400px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center p-5 gap-[15px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.99] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
                  >
                    <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                      🚀
                    </div>
                    <div className="flex-1 text-[15px] tracking-num--0_03 leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                      I want your team to build the systems + manage this for me
                      and help me scale
                    </div>
                  </button>
                  <button
                    onClick={onNext}
                    className="w-[400px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center p-5 gap-[15px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.99] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
                  >
                    <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                      🧩
                    </div>
                    <div className="flex-1 text-[15px] tracking-num--0_03 leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                      Done-with-you
                      <br />
                      (strategy + help, we implement)
                    </div>
                  </button>
                </div>
                {/* Second Row */}
                <div className="flex items-start gap-4">
                  <button
                    onClick={onNext}
                    className="w-[400px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center p-5 gap-[15px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.99] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
                  >
                    <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                      🛠️
                    </div>
                    <div className="flex-1 text-[15px] tracking-num--0_03 leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                      Self-service software + connections (just need the tools
                      or intro&apos;s to the right people)
                    </div>
                  </button>
                  <button
                    onClick={onNext}
                    className="w-[400px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center p-5 gap-[15px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.99] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
                  >
                    <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                      📞
                    </div>
                    <div className="flex-1 text-[15px] tracking-num--0_03 leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                      1-on-1 help and consulting from the Apptics Team
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ProgressIndicators currentStep={8} />
    </div>
  );
}
