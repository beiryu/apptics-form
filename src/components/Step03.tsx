import { useState } from 'react';
import ProgressIndicators from './ProgressIndicators';
import { useQuizStore } from '@/store/quizStore';

interface Step03Props {
  onNext?: () => void;
  onStepClick?: (step: number) => void;
}

const UncheckIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10.5"
      cy="10.5"
      r="9.75"
      stroke="#292D33"
      strokeOpacity="0.1"
      strokeWidth="1.5"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10.5"
      cy="10.5"
      r="9.75"
      fill="#4EA8F7"
      stroke="#0073D9"
      strokeWidth="1.5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.225 7.14379C15.5598 7.43675 15.5938 7.94567 15.3008 8.28049L9.66197 14.7249C9.51512 14.8927 9.30535 14.9921 9.08253 14.9996C8.85969 15.007 8.64375 14.9217 8.48609 14.764L6.06943 12.3474C5.75485 12.0328 5.75485 11.5227 6.06943 11.2082C6.38403 10.8936 6.89407 10.8936 7.20866 11.2082L9.01647 13.016L14.0883 7.21956C14.3813 6.88474 14.8903 6.85081 15.225 7.14379Z"
      fill="white"
    />
  </svg>
);

export default function Step03({ onNext, onStepClick }: Step03Props) {
  const updateAnswer = useQuizStore(state => state.updateAnswer);
  const [selectedOptions, setSelectedOptions] = useState<Set<number>>(
    new Set()
  );

  const toggleOption = (optionId: number) => {
    setSelectedOptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(optionId)) {
        newSet.delete(optionId);
      } else {
        newSet.add(optionId);
      }
      // Save selected options to context
      const selectedTexts = options
        .filter(opt => newSet.has(opt.id))
        .map(opt => opt.text);
      updateAnswer('step3', selectedTexts);
      return newSet;
    });
  };

  const handleNext = () => {
    // Ensure we save the current selections before moving on
    const selectedTexts = options
      .filter(opt => selectedOptions.has(opt.id))
      .map(opt => opt.text);
    updateAnswer('step3', selectedTexts);
    if (onNext) onNext();
  };

  const options = [
    {
      id: 1,
      icon: '💳',
      text: "We don't have subscriptions or MRR setup yet",
    },
    {
      id: 2,
      icon: '📉',
      text: "We can't produce enough winning creatives / ads don't scale profitably",
    },
    {
      id: 3,
      icon: '🚫',
      text: 'Chargebacks or failed payments are killing margins',
    },
    {
      id: 4,
      icon: '🏦',
      text: 'We need payment processing',
    },
    {
      id: 5,
      icon: '🛑',
      text: 'We just got banned on Shopify payments/Stripe',
    },
    {
      id: 6,
      icon: '💰',
      text: "We aren't maximizing for AOV & LTV",
    },
    {
      id: 7,
      icon: '🔐',
      text: 'We want data security and ownership of our subscribers (MRR)',
    },
    {
      id: 8,
      icon: '📦',
      text: 'We have operational bottlenecks (fulfillment, shipping, sourcing issues)',
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center sm:justify-between gap-4 sm:gap-5 w-full max-w-5xl">
        {/* Question and Options */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 text-center">
          {/* Question Header */}
          <div className="flex flex-col items-center gap-2 sm:gap-2.5">
            <h1 className="w-full text-2xl md:text-3xl lg:text-4xl xl:text-[42px] tracking-[-0.07em] leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[48px] font-medium px-2 sm:px-0">
              What&apos;s holding your growth back the most right now?
            </h1>
            <p className="w-full text-sm sm:text-base tracking-[-0.02em] leading-4 font-inter text-slategray">
              (select all that apply)
            </p>
          </div>

          {/* Options Grid */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 text-center sm:text-left text-base sm:text-lg md:text-num-22_5 font-inter w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-3xl">
              {options.map(option => {
                const isSelected = selectedOptions.has(option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => toggleOption(option.id)}
                    className={`w-full min-h-[44px] rounded-num-16 box-border overflow-hidden flex items-center justify-center sm:justify-start py-2 sm:py-num-12 px-3 sm:px-num-20 gap-2 sm:gap-2.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-sm active:scale-[0.99] ${
                      isSelected
                        ? 'bg-dodgerblue-200 border-dodgerblue-100 border-solid border-[2px]'
                        : '[background:linear-gradient(180deg,_rgba(235,_237,_240,_0.25),_rgba(235,_237,_240,_0))] border-gray border-solid border-[1px] hover:bg-opacity-40'
                    }`}
                  >
                    <div className="text-lg sm:text-xl tracking-num--0_03 leading-num-33 font-medium [text-shadow:0px_1.5px_2.25px_rgba(0,_0,_0,_0.12)] shrink-0">
                      {option.icon}
                    </div>
                    <div className="flex-1 text-sm sm:text-num-15 tracking-num--0_03 leading-5 sm:leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center sm:text-left">
                      {option.text}
                    </div>
                    <div className="shrink-0">
                      {isSelected ? <CheckIcon /> : <UncheckIcon />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              className="w-full sm:w-[350px] min-h-[44px] h-auto sm:h-12 shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2.5 px-4 sm:px-num-20 gap-[5px] cursor-pointer text-center text-sm sm:text-[16px] text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] z-50"
              onClick={handleNext}
            >
              <span className="tracking-num--0_03 leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                Next Question
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.50592 4.41076C8.1805 4.08533 7.653 4.08533 7.3275 4.41076C7.00208 4.7362 7.00208 5.26371 7.3275 5.58915L11.7383 9.99994L7.3275 14.4108C7.00208 14.7362 7.00208 15.2637 7.3275 15.5892C7.653 15.9146 8.1805 15.9146 8.50592 15.5892L13.5059 10.5892C13.8314 10.2637 13.8314 9.73619 13.5059 9.41077L8.50592 4.41076Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <ProgressIndicators currentStep={3} onStepClick={onStepClick} />
    </>
  );
}
