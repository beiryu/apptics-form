import ProgressIndicators from './ProgressIndicators';
import { useQuizStore } from '@/store/quizStore';

interface Step08Props {
  onNext?: () => void;
  onStepClick?: (step: number) => void;
}

export default function Step08({ onNext, onStepClick }: Step08Props) {
  const updateAnswer = useQuizStore(state => state.updateAnswer);

  const handleAnswer = (answer: string) => {
    updateAnswer('step8', answer);
    if (onNext) onNext();
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center sm:justify-between gap-4 sm:gap-5 w-full max-w-4xl -mt-60 md:-mt-12">
        {/* Question and Options */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 text-center">
          {/* Question Header */}
          <div className="flex flex-col items-center gap-2 sm:gap-2.5">
            <h1 className="w-full text-2xl md:text-3xl lg:text-4xl xl:text-[42px] tracking-[-0.07em] leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[48px] font-medium px-2 sm:px-0">
              What kind of help are you looking for?
            </h1>
            <p className="w-full text-sm sm:text-base tracking-[-0.02em] leading-4 font-inter text-slategray">
              (select only one)
            </p>
          </div>

          {/* Options Grid */}
          <div className="flex flex-col items-center justify-center text-center sm:text-left text-base sm:text-lg md:text-[22.5px] font-inter w-full">
            <div className="flex flex-col items-center sm:items-stretch sm:items-start gap-3 sm:gap-4 w-full">
              {/* First Row */}
              <div className="flex flex-col md:flex-row items-center md:items-stretch sm:items-start gap-3 sm:gap-4 w-full">
                <button
                  onClick={() =>
                    handleAnswer(
                      'I want your team to build the systems + manage this for me and help me scale'
                    )
                  }
                  className="w-full sm:w-[400px] min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center p-3 sm:p-4 md:p-5 gap-2 sm:gap-3 md:gap-[15px] cursor-pointer text-center sm:text-left transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.99] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
                >
                  <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                    🚀
                  </div>
                  <div className="flex-1 text-sm sm:text-[15px] tracking-num--0_03 leading-5 sm:leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center sm:text-left">
                    I want your team to build the systems + manage this for me
                    and help me scale
                  </div>
                </button>
                <button
                  onClick={() =>
                    handleAnswer(
                      'Done-with-you (strategy + help, we implement)'
                    )
                  }
                  className="w-full sm:w-[400px] min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center p-3 sm:p-4 md:p-5 gap-2 sm:gap-3 md:gap-[15px] cursor-pointer text-center sm:text-left transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.99] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
                >
                  <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                    🧩
                  </div>
                  <div className="flex-1 text-sm sm:text-[15px] tracking-num--0_03 leading-5 sm:leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center sm:text-left">
                    Done-with-you
                    <br />
                    (strategy + help, we implement)
                  </div>
                </button>
              </div>
              {/* Second Row */}
              <div className="flex flex-col md:flex-row items-center md:items-stretch sm:items-start gap-3 sm:gap-4 w-full">
                <button
                  onClick={() =>
                    handleAnswer(
                      "Self-service software + connections (just need the tools or intro's to the right people)"
                    )
                  }
                  className="w-full sm:w-[400px] min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center p-3 sm:p-4 md:p-5 gap-2 sm:gap-3 md:gap-[15px] cursor-pointer text-center sm:text-left transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.99] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
                >
                  <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                    🛠️
                  </div>
                  <div className="flex-1 text-sm sm:text-[15px] tracking-num--0_03 leading-5 sm:leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center sm:text-left">
                    Self-service software + connections (just need the tools or
                    intro&apos;s to the right people)
                  </div>
                </button>
                <button
                  onClick={() =>
                    handleAnswer(
                      '1-on-1 help and consulting from the Apptics Team'
                    )
                  }
                  className="w-full sm:w-[400px] min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center p-3 sm:p-4 md:p-5 gap-2 sm:gap-3 md:gap-[15px] cursor-pointer text-center sm:text-left transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.99] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
                >
                  <div className="tracking-num--0_03 leading-[33px] font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)]">
                    📞
                  </div>
                  <div className="flex-1 text-sm sm:text-[15px] tracking-num--0_03 leading-5 sm:leading-[22px] font-medium text-white [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center sm:text-left">
                    1-on-1 help and consulting from the Apptics Team
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProgressIndicators currentStep={8} onStepClick={onStepClick} />
    </>
  );
}
