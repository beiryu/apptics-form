'use client';

import { useState } from 'react';
import Step01 from '@/components/Step01';
import Step02 from '@/components/Step02';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  if (currentStep === 1) {
    return <Step01 onNext={handleNextStep} />;
  }

  return <Step02 />;
}
