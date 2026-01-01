interface ProgressIndicatorsProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export default function ProgressIndicators({
  currentStep,
  onStepClick,
}: ProgressIndicatorsProps) {
  return (
    <footer className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[200px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 md:gap-[7.7px] px-4 z-10">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(step => {
        const isActive = step === currentStep;
        const isPast = step < currentStep;
        const isActiveOrPast = isActive || isPast;
        const isClickable = isPast || isActive;

        return (
          <button
            key={step}
            onClick={() => {
              if (onStepClick && isClickable) {
                onStepClick(step);
              }
            }}
            disabled={!isClickable}
            className={`h-2.5 ${isActive ? 'w-[29.2px]' : 'w-2.5'} ${
              isActive ? 'rounded-[12.31px]' : 'rounded-num-50'
            } [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border transition-all duration-200 ${
              isActiveOrPast
                ? 'cursor-pointer hover:scale-110 hover:brightness-110'
                : 'opacity-[0.25] cursor-not-allowed'
            }`}
            aria-label={`Go to step ${step}`}
          />
        );
      })}
    </footer>
  );
}
