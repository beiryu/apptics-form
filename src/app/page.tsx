'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Step01 from '@/components/Step01';
import Step02 from '@/components/Step02';
import Step03 from '@/components/Step03';
import Step04 from '@/components/Step04';
import Step05 from '@/components/Step05';
import Step06 from '@/components/Step06';
import Step07 from '@/components/Step07';
import Step08 from '@/components/Step08';
import Step09 from '@/components/Step09';
import Step10 from '@/components/Step10';
import Step11 from '@/components/Step11';
import Step12 from '@/components/Step12';

function StepNavigator() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const stepFromUrl = searchParams.get('step');
  const initialStep = stepFromUrl ? parseInt(stepFromUrl, 10) : 1;
  const [currentStep, setCurrentStep] = useState(
    initialStep >= 1 && initialStep <= 12 ? initialStep : 1
  );
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  // Sync URL when step changes (from user action)
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const urlStep = params.get('step');
    const currentUrlStep = urlStep ? parseInt(urlStep, 10) : 1;

    // Only update URL if it's different from current step
    if (currentUrlStep !== currentStep) {
      if (currentStep === 1) {
        params.delete('step');
      } else {
        params.set('step', currentStep.toString());
      }
      const newUrl = params.toString()
        ? `${pathname}?${params.toString()}`
        : pathname;
      router.replace(newUrl, { scroll: false });
    }
  }, [currentStep, pathname, router, searchParams]);

  // Sync state when URL changes (e.g., browser back/forward)
  useEffect(() => {
    const stepFromUrl = searchParams.get('step');
    if (stepFromUrl) {
      const parsedStep = parseInt(stepFromUrl, 10);
      if (parsedStep >= 1 && parsedStep <= 12 && parsedStep !== currentStep) {
        setDirection(parsedStep > currentStep ? 1 : -1);
        setCurrentStep(parsedStep);
      }
    } else if (currentStep !== 1) {
      setDirection(-1);
      setCurrentStep(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleNextStep = () => {
    if (currentStep < 12) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepClick = (step: number) => {
    if (step >= 1 && step <= 12 && step !== currentStep) {
      setDirection(step > currentStep ? 1 : -1);
      setCurrentStep(step);
    }
  };

  // Animation variants for step transitions
  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const stepTransition = {
    x: { type: 'spring' as const, stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step01 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 2:
        return <Step02 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 3:
        return <Step03 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 4:
        return <Step04 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 5:
        return <Step05 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 6:
        return <Step06 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 7:
        return <Step07 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 8:
        return <Step08 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 9:
        return <Step09 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 10:
        return <Step10 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 11:
        return <Step11 onNext={handleNextStep} onStepClick={handleStepClick} />;
      case 12:
        return <Step12 onNext={handleNextStep} onStepClick={handleStepClick} />;
      default:
        return <Step01 onNext={handleNextStep} onStepClick={handleStepClick} />;
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col rounded-2xl bg-transparent box-border overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={stepTransition}
          className="w-full h-full"
        >
          <main className="flex-1 flex items-start justify-center w-full h-full px-4 sm:px-6 lg:px-8 py-4 md:py-8 lg:py-12 overflow-y-auto">
            {renderStep()}
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
          <div className="text-center">Loading...</div>
        </div>
      }
    >
      <StepNavigator />
    </Suspense>
  );
}
