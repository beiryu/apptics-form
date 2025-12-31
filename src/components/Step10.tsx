import ProgressIndicators from './ProgressIndicators';

interface Step10Props {
  onNext?: () => void;
  onStepClick?: (step: number) => void;
}

export default function Step10({ onNext, onStepClick }: Step10Props) {
  return (
    <div className="relative w-full h-screen flex flex-col rounded-num-16 bg-whitesmoke-100 border-whitesmoke-200 border-solid border-[1px] box-border overflow-hidden text-center text-[42px] text-darkslategray font-geist">
      {/* Main Content Section */}
      <main className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-24 md:pb-32 lg:pb-[200px] overflow-y-auto">
        <section className="flex flex-col items-center justify-between gap-4 sm:gap-5 w-full max-w-4xl">
          {/* Question and Options */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
            {/* Question Header */}
            <div className="flex flex-col items-center">
              <h1 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] tracking-[-0.07em] leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[48px] font-medium px-2 sm:px-0">
                How soon are you looking to fix your problems?
              </h1>
            </div>

            {/* Options */}
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base text-white font-inter w-full">
              {/* Option 1 */}
              <button
                onClick={onNext}
                className="w-full sm:w-[400px] min-h-[44px] h-auto sm:h-12 shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center py-2.5 px-4 sm:px-5 gap-2 sm:gap-2.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
              >
                <span className="text-base sm:text-lg tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  🚀
                </span>
                <span className="text-base sm:text-lg tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  Immediately - we&apos;re ready to move fast
                </span>
              </button>

              {/* Option 2 */}
              <button
                onClick={onNext}
                className="w-full sm:w-[400px] min-h-[44px] h-auto sm:h-12 shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center py-2.5 px-4 sm:px-5 gap-2 sm:gap-2.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
              >
                <span className="text-base sm:text-lg tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  🗓️
                </span>
                <span className="text-base sm:text-lg tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  Within next 30 days
                </span>
              </button>

              {/* Option 3 */}
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={onNext}
                  className="w-full sm:w-[400px] min-h-[44px] h-auto sm:h-12 shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center py-2.5 px-4 sm:px-5 gap-2 sm:gap-2.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
                >
                  <span className="text-base sm:text-lg tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                    🔍
                  </span>
                  <span className="text-base sm:text-lg tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                    Just exploring currently
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ProgressIndicators currentStep={10} onStepClick={onStepClick} />
    </div>
  );
}
