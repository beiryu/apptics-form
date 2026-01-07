'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
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
    <div
      className="relative w-[calc(100%-2rem)] h-[calc(100vh-2rem)] flex flex-col rounded-2xl border border-[#F1F1F1] box-border overflow-hidden my-4 mx-4"
      style={{
        backgroundColor: '#F5F7FA',
        backgroundImage: 'url(/visual.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',
      }}
    >
      {/* Logo Header */}
      <header className="w-full flex items-center justify-center p-4 md:p-8 !pb-0 shrink-0 z-10">
        <Link
          href="/"
          className="cursor-pointer transition-opacity hover:opacity-80 active:opacity-70"
        >
          <svg
            width="97"
            height="30"
            viewBox="0 0 97 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-6 sm:h-7 md:h-8"
          >
            <g clipPath="url(#clip0_2023_820)">
              <mask
                id="mask0_2023_820"
                style={{ maskType: 'luminance' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="97"
                height="30"
              >
                <path
                  d="M0.000976562 0H96.3646V29.9382H0.000976562V0Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_2023_820)">
                <path
                  d="M8.04383 23.8927C3.36656 23.8927 0.423828 20.32 0.423828 16.1209C0.423828 11.9227 3.36656 8.35002 8.04383 8.35002C9.54656 8.35002 10.842 8.95002 11.9302 9.7482V8.55093H14.8247V11.6982C14.8247 13.5709 12.6575 14.2346 11.4666 13.1909L11.3538 13.0846C10.1911 11.8918 9.10837 11.2437 8.04474 11.2437C5.14565 11.2437 3.31837 13.3346 3.31837 16.1209C3.31837 18.9082 5.14565 20.9982 8.04383 20.9982C8.59383 20.9982 9.25747 20.7618 10.0156 20.2546C10.7629 19.7537 11.4966 19.0591 12.1575 18.3191C12.9081 17.473 13.5908 16.569 14.1993 15.6155L14.3984 15.2937C14.6058 14.9601 14.8217 14.6318 15.0456 14.3091C15.6034 13.5018 16.2093 12.7289 16.8602 11.9946C17.612 11.1537 18.5284 10.2673 19.5511 9.58275C20.5611 8.90548 21.7884 8.35002 23.1329 8.35002C27.8102 8.35002 30.752 11.9227 30.752 16.1209C30.752 20.3191 27.8102 23.8927 23.1329 23.8927C21.6302 23.8927 20.3347 23.2927 19.2456 22.4946V29.7491H16.3511V20.5437C16.3511 18.6109 18.662 17.9655 19.8229 19.1573L20.0393 19.3746C21.1202 20.4291 22.1347 20.9982 23.1329 20.9982C26.0302 20.9982 27.8584 18.9073 27.8584 16.1209C27.8584 13.3346 26.0311 11.2446 23.1329 11.2437C22.5829 11.2437 21.9193 11.48 21.1611 11.9882C20.4138 12.4882 19.6802 13.1846 19.0193 13.9246C18.2688 14.7705 17.5861 15.6742 16.9775 16.6273L16.6411 17.17C15.9486 18.2555 15.1713 19.2844 14.3166 20.2473C13.5647 21.0882 12.6484 21.9746 11.6256 22.6591C10.6147 23.3364 9.38746 23.8927 8.04383 23.8927ZM35.4629 29.9373H32.2493V16.1191C32.2493 14.6973 32.5802 13.4209 33.242 12.2918C33.911 11.1745 34.8569 10.2486 35.9884 9.60366C37.1575 8.94184 38.472 8.61093 39.9329 8.61093C41.3929 8.61093 42.6984 8.95184 43.8475 9.63366C44.9775 10.2958 45.9143 11.2423 46.5647 12.3791C47.2466 13.5091 47.5866 14.7555 47.5866 16.1191C47.5866 17.58 47.2656 18.8846 46.6229 20.0337C45.9927 21.1509 45.0748 22.0791 43.9647 22.7218C42.8347 23.3837 41.5393 23.7146 40.0784 23.7146C38.9957 23.7217 37.9295 23.4502 36.982 22.9264C36.0275 22.3809 35.2584 21.6791 34.6738 20.8228C34.1093 19.9655 33.8266 19.0409 33.8266 18.0473L35.4629 18.69V29.9373ZM39.9329 20.6764C40.7893 20.6764 41.5493 20.4718 42.2111 20.0627C42.8804 19.6667 43.4344 19.1026 43.8184 18.4264C44.2064 17.7301 44.4075 16.9453 44.402 16.1482C44.41 15.3598 44.2086 14.5833 43.8184 13.8982C43.4343 13.2221 42.8802 12.658 42.2111 12.2618C41.5493 11.8527 40.7893 11.6491 39.9329 11.6491C39.0756 11.6491 38.3056 11.8537 37.6238 12.2627C36.9678 12.6657 36.4251 13.2288 36.0466 13.8991C35.6565 14.584 35.4551 15.3601 35.4629 16.1482C35.4629 16.9664 35.6575 17.7255 36.0466 18.4264C36.4252 19.097 36.9683 19.6601 37.6247 20.0627C38.3066 20.4718 39.0756 20.6764 39.9329 20.6764ZM54.5856 23.7155C53.3584 23.7155 52.3256 23.4818 51.4884 23.0146C50.6687 22.5465 50.0074 21.8444 49.5893 20.9982C49.1611 20.1409 48.9466 19.1582 48.9466 18.0473V5.28184H52.1311V17.9609C52.1311 18.8564 52.3847 19.5582 52.8911 20.0646C53.3975 20.5709 54.0593 20.8237 54.8775 20.8237C55.3519 20.8197 55.8235 20.7509 56.2793 20.6191C56.7278 20.4824 57.1518 20.2756 57.5356 20.0064V22.9273C57.1656 23.1609 56.7084 23.3455 56.1629 23.4818C55.6513 23.6358 55.12 23.7139 54.5856 23.7155ZM57.5356 11.7373H49.5266V8.99093H57.5356V11.7364V11.7373ZM59.322 9.52548C59.798 9.84229 60.357 10.0113 60.9288 10.0113C61.5006 10.0113 62.0597 9.84229 62.5356 9.52548V23.3355H59.322V9.52548ZM60.9284 8.82548C60.5584 8.82548 60.2075 8.7382 59.8766 8.56366C59.5684 8.37207 59.3087 8.11199 59.1175 7.80366C58.9438 7.48029 58.8533 7.11887 58.8538 6.75184C58.8538 6.36275 58.942 6.01184 59.1175 5.70002C59.312 5.38911 59.5656 5.14548 59.8766 4.97002C60.2075 4.77548 60.5584 4.6782 60.9284 4.6782C61.3184 4.6782 61.6593 4.77548 61.9511 4.96911C62.2629 5.14548 62.5056 5.38911 62.6811 5.70002C62.8765 6.01184 62.9738 6.36275 62.9738 6.75184C62.9738 7.12184 62.8765 7.47275 62.6811 7.80366C62.5065 8.11548 62.2629 8.3682 61.9511 8.56366C61.6408 8.74341 61.2869 8.83339 60.9284 8.82548ZM71.4211 23.6855C70.4179 23.6914 69.4241 23.4928 68.5002 23.1018C67.5988 22.7216 66.7762 22.1765 66.0747 21.4946C65.3932 20.7933 64.8484 19.9711 64.4684 19.07C64.077 18.1459 63.8781 17.1517 63.8838 16.1482C63.8838 15.0964 64.0784 14.1227 64.4684 13.2264C64.844 12.3316 65.3895 11.5181 66.0747 10.8309C66.7698 10.1338 67.5935 9.57806 68.5002 9.19457C69.4241 8.80359 70.4179 8.605 71.4211 8.61093C72.7279 8.62058 74.0123 8.95152 75.1611 9.57457C76.3102 10.1782 77.2156 11.1427 77.8775 12.4673L75.2193 13.9282C74.8102 13.1873 74.2738 12.6227 73.6129 12.2337C72.9693 11.8437 72.2402 11.6491 71.422 11.6491C70.622 11.6491 69.892 11.8537 69.2302 12.2627C68.5842 12.6557 68.0509 13.2091 67.682 13.8691C67.292 14.5509 67.0975 15.3109 67.0975 16.1482C67.0975 16.9664 67.292 17.7164 67.682 18.3973C68.0711 19.0791 68.5875 19.6246 69.2302 20.0337C69.892 20.4427 70.6229 20.6473 71.4211 20.6473C72.2393 20.6473 72.9693 20.4527 73.612 20.0627C74.2747 19.6737 74.8102 19.1082 75.2193 18.3682L77.8775 19.8291C77.2156 21.1337 76.3102 22.0982 75.1611 22.7218C74.0123 23.3449 72.7279 23.6759 71.4211 23.6855ZM84.0147 23.6855C82.6329 23.6855 81.4347 23.4227 80.422 22.8973C79.4284 22.3518 78.6402 21.5427 78.0556 20.4718L80.4802 19.1282C80.8502 19.81 81.3075 20.2964 81.8529 20.5891C82.4175 20.8809 83.0893 21.0273 83.8693 21.0273C84.3445 21.0348 84.8178 20.9657 85.2711 20.8228C85.6802 20.6673 86.002 20.4627 86.2347 20.2091C86.4693 19.9364 86.5856 19.6055 86.5856 19.2155C86.5856 18.7291 86.3811 18.3691 85.9729 18.1346C85.5829 17.9009 85.0766 17.7164 84.4529 17.58C83.8493 17.4437 83.1975 17.2982 82.4957 17.1418C81.8245 16.9895 81.1692 16.7743 80.5384 16.4991C79.9433 16.214 79.4231 15.7937 79.0193 15.2718C78.6302 14.7264 78.4347 13.9964 78.4347 13.0809C78.4347 12.2437 78.6684 11.4937 79.1366 10.8309C79.6038 10.1691 80.2456 9.64275 81.0638 9.25366C81.882 8.86366 82.8275 8.66911 83.8984 8.66911C84.8329 8.66911 85.6511 8.80548 86.3529 9.0782C87.0729 9.33184 87.6866 9.68184 88.1929 10.13C88.6778 10.5512 89.0833 11.0558 89.3902 11.62L86.9656 12.9927C86.6929 12.3891 86.2838 11.9609 85.7384 11.7073C85.2129 11.4546 84.6193 11.3282 83.9566 11.3282C83.5475 11.3282 83.1675 11.4055 82.8175 11.5618C82.4903 11.6817 82.1988 11.8825 81.9702 12.1455C81.7556 12.38 81.6484 12.6718 81.6484 13.0227C81.6484 13.47 81.8438 13.8209 82.2329 14.0737C82.642 14.3082 83.1484 14.5027 83.752 14.6582C84.3756 14.7946 85.0284 14.94 85.7093 15.0964C86.3856 15.244 87.0424 15.4697 87.6665 15.7691C88.2682 16.0438 88.7907 16.4659 89.1856 16.9964C89.5766 17.5209 89.7702 18.2418 89.7702 19.1573C89.7702 20.0727 89.5075 20.8718 88.982 21.5527C88.4556 22.2346 87.7547 22.7609 86.8784 23.1309C86.002 23.5009 85.0475 23.6855 84.0147 23.6855ZM89.5502 3.92911C89.5502 2.20729 90.8638 0.908203 92.5865 0.908203C94.3229 0.908203 95.6366 2.20729 95.6366 3.91457C95.6366 5.62275 94.3229 6.90638 92.5865 6.90638C90.8638 6.90638 89.5502 5.62275 89.5502 3.92911ZM94.9802 3.91457C94.9802 2.51366 93.9729 1.49184 92.5865 1.49184C91.2147 1.49184 90.2075 2.51366 90.2075 3.92911C90.2075 5.31548 91.2147 6.32275 92.5865 6.32275C93.9729 6.32275 94.9802 5.30093 94.9802 3.91457ZM91.4475 5.5782V2.25093H92.7175C93.5056 2.25093 94.002 2.67457 94.002 3.30184C94.002 3.78366 93.7102 4.13366 93.2284 4.26548L94.0166 5.5782H93.3011L92.6011 4.39638H92.0902V5.5782H91.4475ZM92.6884 2.79093H92.0902V3.85638H92.6884C93.0529 3.85638 93.3302 3.65184 93.3302 3.30184C93.3302 2.96548 93.0675 2.79093 92.6884 2.79093Z"
                  fill="black"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2023_820">
                <rect width="96.3636" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </header>

      {/* Content Area with Animation */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={stepTransition}
            className="absolute inset-0 w-full h-full"
          >
            <main className="flex items-center justify-center w-full h-full p-4 md:p-8 -mt-8 md:-mt-20 lg:-mt-24 overflow-y-auto">
              {renderStep()}
            </main>
          </motion.div>
        </AnimatePresence>
      </div>
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
