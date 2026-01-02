import ProgressIndicators from './ProgressIndicators';
import { useQuizStore } from '@/store/quizStore';

interface Step02Props {
  onNext?: () => void;
  onStepClick?: (step: number) => void;
}

export default function Step02({ onNext, onStepClick }: Step02Props) {
  const updateAnswer = useQuizStore(state => state.updateAnswer);

  const handleAnswer = (answer: string) => {
    updateAnswer('step2', answer);
    if (onNext) onNext();
  };

  return (
    <>
      <section className="flex flex-col items-center justify-between gap-4 sm:gap-5 w-full max-w-4xl">
        {/* Question and Buttons */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 text-center">
          <h1 className="w-full text-2xl md:text-3xl lg:text-4xl xl:text-[42px] tracking-[-0.07em] leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[48px] font-medium px-2 sm:px-0">
            Want a Predictable Way to Scale Your Business & MRR?
          </h1>
          <div className="flex flex-col md:flex-row items-stretch sm:items-start gap-3 sm:gap-4 w-full sm:w-auto text-sm sm:text-base text-white font-inter">
            <button
              onClick={() => handleAnswer('Yes, I want to scale')}
              className="w-full sm:w-[350px] min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2.5 px-4 sm:px-5 gap-2 sm:gap-2.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
            >
              <span className="text-base sm:text-lg tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                ✅
              </span>
              <span className="text-sm sm:text-base tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                Yes, I want to scale
              </span>
            </button>
            <button
              onClick={() => handleAnswer("No, we're fine at this stage")}
              className="w-full sm:w-[350px] min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2.5 px-4 sm:px-5 gap-2 sm:gap-2.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
            >
              <span className="text-base sm:text-lg tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                ❌
              </span>
              <span className="text-sm sm:text-base tracking-[-0.03em] leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                No, we&apos;re fine at this stage
              </span>
            </button>
          </div>
        </div>
      </section>
      <ProgressIndicators currentStep={2} onStepClick={onStepClick} />
    </>
  );
}
