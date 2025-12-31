import ProgressIndicators from './ProgressIndicators';

interface Step11Props {
  onNext?: () => void;
  onStepClick?: (step: number) => void;
}

export default function Step11({ onNext, onStepClick }: Step11Props) {
  return (
    <div className="relative w-full h-screen flex flex-col rounded-2xl bg-whitesmoke-100 border-whitesmoke-200 border-solid border-[1px] box-border overflow-hidden text-center text-[42px] text-darkslategray font-geist">
      {/* Main Content Section */}
      <main className="flex-1 flex items-start justify-center w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 lg:pt-[200px] pb-20 sm:pb-24 md:pb-32 lg:pb-[200px] overflow-y-auto">
        <section className="flex flex-col items-center justify-between gap-4 sm:gap-5 w-full max-w-4xl">
          {/* Question and Buttons */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
            {/* Question Header */}
            <div className="flex flex-col items-center">
              <h1 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] tracking-[-0.07em] leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[48px] font-medium px-2 sm:px-0">
                Do you want us to diagnose your problems & map out a plan for
                you to scale FAST for free?
              </h1>
            </div>

            {/* Options */}
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base text-white font-inter w-full">
              {/* Option 1 */}
              <button
                onClick={onNext}
                className="w-full sm:w-[400px] min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-3 sm:py-4 px-4 sm:px-5 gap-2 sm:gap-[15px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
              >
                <span className="tracking-[-0.03em] leading-[22px] font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.62802 2.5C3.94837 2.5 2.38792 3.90332 2.70804 5.75837C3.72298 11.6398 8.36133 16.2782 14.2427 17.2931C16.0978 17.6132 17.5012 16.0528 17.5012 14.3732C17.5012 12.9923 16.5954 11.7749 15.2727 11.3782L14.444 11.1295C13.6145 10.8807 12.7153 11.1073 12.1029 11.7197C11.8807 11.9419 11.5952 11.9558 11.414 11.8437C10.0924 11.026 8.97517 9.90875 8.15738 8.58717C8.04529 8.406 8.05927 8.12039 8.28141 7.89826C8.89383 7.28586 9.1205 6.38666 8.87167 5.55712L8.623 4.72837C8.22624 3.40576 7.00887 2.5 5.62802 2.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="flex-1 text-sm sm:text-base tracking-[-0.03em] leading-5 sm:leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-left">
                  Yes! – Show me exactly where I&apos;m losing money + show me
                  the plan to help me scale.
                  <br />
                  (Book a Call)
                </span>
              </button>

              {/* Option 2 */}
              <button
                onClick={onNext}
                className="w-full sm:w-[350px] min-h-[44px] rounded-2xl [background:linear-gradient(180deg,_rgba(235,_237,_240,_0.25),_rgba(235,_237,_240,_0))] border-gray border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-3 px-4 sm:px-5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-sm hover:bg-opacity-40 active:scale-[0.98]"
              >
                <span className="text-sm sm:text-base tracking-[-0.03em] leading-6 sm:leading-7 font-medium text-black [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  Maybe Later
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <ProgressIndicators currentStep={11} onStepClick={onStepClick} />
    </div>
  );
}
