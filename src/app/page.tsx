'use client';

import { useState } from 'react';
import Step01 from '@/components/Step01';
import Step02 from '@/components/Step02';
import Step03 from '@/components/Step03';
import Step04 from '@/components/Step04';
import Step05 from '@/components/Step05';
import Step06 from '@/components/Step06';
import Step07 from '@/components/Step07';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  switch (currentStep) {
    case 1:
      return <Step01 onNext={handleNextStep} />;
    case 2:
      return <Step02 onNext={handleNextStep} />;
    case 3:
      return <Step03 onNext={handleNextStep} />;
    case 4:
      return <Step04 onNext={handleNextStep} />;
    case 5:
      return <Step05 onNext={handleNextStep} />;
    case 6:
      return <Step06 onNext={handleNextStep} />;
    case 7:
      return <Step07 onNext={handleNextStep} />;
    default:
      return <Step01 onNext={handleNextStep} />;
  }
}
