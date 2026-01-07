import ProgressIndicators from './ProgressIndicators';
import { useQuizStore } from '@/store/quizStore';

interface Step06Props {
  onNext?: () => void;
  onStepClick?: (step: number) => void;
}

export default function Step06({ onNext, onStepClick }: Step06Props) {
  const updateAnswer = useQuizStore(state => state.updateAnswer);

  const handleAnswer = (answer: string) => {
    updateAnswer('step6', answer);
    if (onNext) onNext();
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center sm:justify-between gap-4 sm:gap-5 w-full max-w-2xl">
        {/* Question and Options */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 text-center">
          {/* Question Header */}
          <div className="flex flex-col items-center gap-2 sm:gap-2.5">
            <h1 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] tracking-[-0.07em] leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[48px] font-medium px-2 sm:px-0">
              How much do you spend on ads each month?
            </h1>
            <p className="w-full text-sm sm:text-base tracking-[-0.02em] leading-4 font-inter text-slategray">
              (select only one)
            </p>
          </div>

          {/* Options Grid */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 text-center sm:text-left text-xs sm:text-num-15 text-white font-inter">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
              <button
                onClick={() => handleAnswer('$10K - $50K monthly on ads')}
                className="flex-[1_1_calc(50%-0.375rem)] sm:flex-[1_1_calc(33.333%-0.667rem)] min-w-0 min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4 md:p-num-20 gap-2 sm:gap-[15px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M25.027 3.63304C25.8472 3.75544 26.7398 4.05155 27.2517 4.9381C27.7622 5.82246 27.5756 6.74402 27.2754 7.51775C26.9867 8.26235 26.4747 9.16302 25.8782 10.212L24.1579 13.2383C23.8326 13.8106 23.6231 14.1809 23.4898 14.4646C23.3897 14.6776 23.3712 14.7648 23.3682 14.7793C23.3734 14.9528 23.465 15.1095 23.6076 15.1978C23.6231 15.2028 23.7076 15.2289 23.9343 15.2466C24.2448 15.2709 24.7159 15.2717 25.3718 15.2717C26.1356 15.2717 26.7764 15.2717 27.2762 15.31C27.7593 15.347 28.3286 15.4291 28.8056 15.7463C29.7318 16.3619 30.2136 17.4608 30.0447 18.5583C29.9576 19.1228 29.6373 19.5991 29.3395 19.9833C29.0317 20.3805 28.6009 20.8569 28.087 21.4252L19.35 31.0863C18.5486 31.9727 17.8739 32.7188 17.325 33.1973C17.0459 33.4406 16.7161 33.6908 16.3482 33.84C15.9429 34.0045 15.4082 34.0744 14.8771 33.7977C14.3472 33.5216 14.0982 33.0447 13.9992 32.6209C13.909 32.235 13.9221 31.8217 13.959 31.4525C14.0316 30.7263 14.2492 29.7422 14.5078 28.5725L15.5988 23.637C15.8153 22.6581 15.9473 22.0473 15.9811 21.6003C16.0275 21.2319 15.7061 21.0738 15.5395 21.0409C15.0997 20.9772 14.4795 20.9744 13.4813 20.9744H12.675C11.5923 20.9744 10.6499 20.9745 9.92164 20.8661C9.1512 20.7513 8.32642 20.4756 7.80845 19.6744C7.29172 18.8752 7.37612 18.0097 7.58384 17.2584C7.78067 16.5467 8.16308 15.6819 8.6032 14.6866L11.4942 8.14763C11.9014 7.22669 12.2437 6.45229 12.5929 5.84597C12.9629 5.20339 13.3905 4.65697 14.0151 4.24893C14.6402 3.8406 15.3117 3.6693 16.0478 3.59016C16.7415 3.51558 17.5853 3.5156 18.5873 3.51563H22.0056C23.2065 3.51555 24.2395 3.51549 25.027 3.63304Z"
                    fill="#389E13"
                  />
                </svg>

                <div className="flex flex-col items-center">
                  <div className="text-xs sm:text-sm tracking-num--0_03 leading-5 sm:leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center">
                    $10K - $50K monthly
                  </div>
                  <div className="text-xs sm:text-sm tracking-num--0_03 leading-5 sm:leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center">
                    on ads
                  </div>
                </div>
              </button>
              <button
                onClick={() => handleAnswer('$50K - $150K monthly on ads')}
                className="flex-[1_1_calc(50%-0.375rem)] sm:flex-[1_1_calc(33.333%-0.667rem)] min-w-0 min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4 md:p-num-20 gap-2 sm:gap-[15px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9688 4.29834V8.98584C17.9688 9.71387 17.9688 10.0779 17.8498 10.365C17.6912 10.7479 17.3871 11.0521 17.0041 11.2107C16.7171 11.3296 16.353 11.3296 15.625 11.3296C14.897 11.3296 14.533 11.3296 14.2458 11.2107C13.863 11.0521 13.5588 10.7479 13.4002 10.365C13.2812 10.0779 13.2813 9.71387 13.2813 8.98584V4.29834C13.2813 3.57029 13.2812 3.20628 13.4002 2.91914C13.5588 2.53628 13.863 2.23211 14.2458 2.07353C14.533 1.95459 14.897 1.95459 15.625 1.95459C16.353 1.95459 16.7171 1.95459 17.0041 2.07353C17.3871 2.23211 17.6912 2.53628 17.8498 2.91914C17.9688 3.20628 17.9688 3.57029 17.9688 4.29834Z"
                    fill="#389E13"
                  />
                  <path
                    opacity="0.4"
                    d="M31.2973 27.298C30.0321 26.0326 28.5157 23.2583 28.5157 17.1889V17.0883C28.5157 14.9585 28.5157 13.241 28.334 11.8896C28.1449 10.4832 27.7395 9.2992 26.799 8.3587C25.8585 7.4182 24.6746 7.01276 23.2682 6.82367C21.9166 6.642 20.1991 6.64204 18.0693 6.64209H17.9688H13.2813H13.1807C11.0508 6.64204 9.33333 6.642 7.98188 6.82367C6.57547 7.01276 5.3915 7.4182 4.451 8.3587C3.5105 9.2992 3.10505 10.4832 2.91597 11.8896C2.7343 13.241 2.73433 14.9585 2.73438 17.0884V17.1889C2.73438 21.3992 3.62516 24.3701 4.82027 26.4526C6.01644 28.5367 7.48178 29.6687 8.5312 30.2551C8.63222 30.3115 8.76567 30.3855 8.97066 30.4626C9.15003 30.5301 9.36756 30.5942 9.66492 30.6717C10.3864 30.8595 10.7576 30.8608 11.3098 30.8608H33.5938C34.241 30.8608 34.7657 30.3362 34.7657 29.6889C34.7657 29.0417 34.241 28.517 33.5938 28.517H33.6013C33.5832 28.5159 33.5457 28.5126 33.4915 28.5048C33.3823 28.4892 33.207 28.4544 32.9881 28.3812C32.554 28.2367 31.9354 27.9361 31.2973 27.298Z"
                    fill="#389E13"
                  />
                  <path
                    d="M2.73828 26.6983C2.86394 26.9491 2.99305 27.1921 3.12738 27.4261C4.5233 29.8583 6.26581 31.2267 7.57989 31.961L7.58142 31.9625C7.71091 32.0349 7.94361 32.1642 8.28333 32.2922C8.56034 32.3964 8.85706 32.4814 9.17291 32.5638C10.1285 32.8127 10.6907 32.8155 11.3107 32.8155H27.688C27.4825 33.1794 27.2301 33.5175 26.9189 33.8288C25.9784 34.7691 24.7944 35.1747 23.388 35.3638C22.0367 35.5453 20.319 35.5453 18.1894 35.5453H13.1814C11.0516 35.5453 9.33414 35.5453 7.98272 35.3638C6.57633 35.1747 5.39233 34.7691 4.45184 33.8288C3.51137 32.8883 3.10591 31.7042 2.91681 30.2978C2.78303 29.3027 2.74755 28.1089 2.73828 26.6983Z"
                    fill="#389E13"
                  />
                </svg>

                <div className="flex flex-col items-center">
                  <div className="tracking-num--0_03 leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                    $50K - $150K monthly
                  </div>
                  <div className="tracking-num--0_03 leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                    on ads
                  </div>
                </div>
              </button>
              <button
                onClick={() => handleAnswer('$150K - $500K monthly on ads')}
                className="flex-[1_1_calc(50%-0.375rem)] sm:flex-[1_1_calc(33.333%-0.667rem)] min-w-0 min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4 md:p-num-20 gap-2 sm:gap-[15px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M25.2792 10.5438C27.3267 10.5439 28.9859 10.5488 30.2993 10.7254C31.7058 10.9145 32.8898 11.3199 33.8303 12.2604C34.7708 13.2009 35.1762 14.3849 35.3653 15.7912C35.547 17.1428 35.5468 18.8602 35.5468 20.99V24.3164C35.5468 26.4462 35.547 28.1636 35.3653 29.515C35.1881 30.8336 34.8212 31.9572 34.0012 32.8675L33.8303 33.0459C32.8898 33.9864 31.7058 34.3919 30.2993 34.5809C28.9479 34.7627 27.2304 34.7627 25.1008 34.7625H12.3993C10.2695 34.7627 8.55205 34.7627 7.20063 34.5809C5.88213 34.4037 4.75845 34.0369 3.84827 33.2169L3.66974 33.0459C2.72925 32.1055 2.32378 30.9216 2.1347 29.515C1.95305 28.1636 1.95308 26.4462 1.95313 24.3164V20.99C1.95308 18.8602 1.95305 17.1428 2.1347 15.7912C2.3238 14.3849 2.72924 13.2009 3.66974 12.2604C4.61024 11.3199 5.7942 10.9145 7.20063 10.7254C8.51963 10.5481 10.1873 10.5439 12.2467 10.5438C13.0298 11.4215 14.3912 11.7928 15.2359 11.6989V12.8937C15.2359 14.8353 16.81 16.4094 18.7515 16.4094C20.6928 16.4089 22.2672 14.835 22.2672 12.8937V11.6989C23.2425 11.807 24.5497 11.3425 25.2792 10.5438Z"
                    fill="#389E13"
                  />
                  <path
                    d="M23.4375 22.6531C23.4375 25.242 21.3389 27.3406 18.75 27.3406C16.1612 27.3406 14.0625 25.242 14.0625 22.6531C14.0625 20.0644 16.1612 17.9656 18.75 17.9656C21.3389 17.9656 23.4375 20.0644 23.4375 22.6531Z"
                    fill="#389E13"
                  />
                  <path
                    d="M33.8302 12.2925C32.8897 11.352 31.7057 10.9465 30.2993 10.7574C29.6814 10.6744 28.9871 10.6293 28.2119 10.6049C28.2119 14.6229 31.4988 17.8803 35.5168 17.8803C35.4921 17.1173 35.4472 16.4331 35.3652 15.8234C35.1761 14.4169 34.7707 13.233 33.8302 12.2925Z"
                    fill="#389E13"
                  />
                  <path
                    d="M3.63977 12.2925C4.58027 11.352 5.76423 10.9465 7.17066 10.7574C7.78848 10.6744 8.48281 10.6293 9.25806 10.6049C9.25806 14.6229 5.97122 17.8803 1.95312 17.8803C1.9778 17.1173 2.02278 16.4331 2.10473 15.8234C2.29383 14.4169 2.69928 13.233 3.63977 12.2925Z"
                    fill="#389E13"
                  />
                  <path
                    d="M33.8302 33.075C32.8897 34.0155 31.7057 34.4209 30.2993 34.61C29.6814 34.693 28.9871 34.7381 28.2119 34.7625C28.2119 30.7445 31.4988 27.4872 35.5168 27.4872C35.4921 28.2502 35.4472 28.9344 35.3652 29.5441C35.1761 30.9505 34.7707 32.1344 33.8302 33.075Z"
                    fill="#389E13"
                  />
                  <path
                    d="M3.63977 33.075C4.58025 34.0155 5.76423 34.4209 7.17064 34.61C7.78847 34.693 8.4828 34.7381 9.25805 34.7625C9.25805 30.7445 5.9712 27.4872 1.95312 27.4872C1.9778 28.2502 2.02277 28.9344 2.10473 29.5441C2.29381 30.9505 2.69927 32.1344 3.63977 33.075Z"
                    fill="#389E13"
                  />
                  <path
                    d="M17.1873 7.73469V12.8937C17.1873 13.7566 17.8869 14.4562 18.7498 14.4562C19.6128 14.4562 20.3123 13.7566 20.3123 12.8937V7.73469L21.4872 9.24379C22.0123 9.83679 22.9119 9.94677 23.5686 9.47419C24.225 9.00158 24.4062 8.11413 24.0111 7.42799L23.924 7.29371L23.9225 7.29218L23.9014 7.26452C23.59 6.85836 22.7323 5.73946 22.2975 5.23377C21.8594 4.72429 21.3506 4.17232 20.8525 3.73535C20.6047 3.51804 20.3225 3.296 20.0239 3.12043C19.7934 2.9849 19.4151 2.79394 18.9528 2.74811L18.7498 2.73743C18.1953 2.73743 17.739 2.96555 17.4758 3.12043C17.1772 3.296 16.895 3.51804 16.6472 3.73535C16.149 4.17232 15.6403 4.72429 15.2021 5.23377C14.7645 5.74271 13.8971 6.87419 13.5909 7.27376L13.5756 7.29371C13.0716 7.99402 13.2308 8.97007 13.9311 9.47419C14.6314 9.97816 15.609 9.81891 16.1131 9.11866L17.1873 7.73469Z"
                    fill="#389E13"
                  />
                </svg>

                <div className="flex flex-col items-center shrink-0">
                  <div className="tracking-num--0_03 leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                    $150K - $500K monthly
                  </div>
                  <div className="tracking-num--0_03 leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                    on ads
                  </div>
                </div>
              </button>
              <button
                onClick={() => handleAnswer('$500K - $1M monthly on ads')}
                className="flex-[1_1_calc(50%-0.375rem)] sm:flex-[1_1_calc(33.333%-0.667rem)] min-w-0 max-w-60 min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4 md:p-num-20 gap-2 sm:gap-[15px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9207 2.73438C22.9576 2.73438 24.6088 4.38561 24.6088 6.42242V10.1562H5.5918L19.433 3.04719C19.901 2.84089 20.4077 2.73439 20.9207 2.73438Z"
                    fill="#389E13"
                  />
                  <path
                    opacity="0.4"
                    d="M33.9844 24.3194V24.2188V22.6563V22.5556C33.9844 20.4258 33.9845 18.7083 33.8028 17.3569C33.6138 15.9505 33.2083 14.7665 32.2678 13.826C31.3273 12.8855 30.1433 12.48 28.7369 12.291C27.3855 12.1093 25.668 12.1093 23.5381 12.1094H23.4375H4.6875C4.081 12.1094 3.58208 12.5701 3.52174 13.1607L3.51563 13.2813V24.2188V24.3194C3.51558 26.4492 3.51555 28.1667 3.6972 29.5181C3.8863 30.9245 4.29175 32.1086 5.23224 33.0491C6.17274 33.9895 7.3567 34.395 8.76313 34.5841C10.1146 34.7658 11.832 34.7656 13.9618 34.7656H14.0625H23.4375H23.5381C25.668 34.7656 27.3855 34.7658 28.7369 34.5841C30.1433 34.395 31.3273 33.9895 32.2678 33.0491C33.2083 32.1086 33.6138 30.9245 33.8028 29.5181C33.9845 28.1667 33.9844 26.4492 33.9844 24.3194Z"
                    fill="#389E13"
                  />
                  <path
                    d="M29.2969 23.4375C29.2969 22.3587 28.4225 21.4844 27.3438 21.4844C26.265 21.4844 25.3906 22.3587 25.3906 23.4375C25.3906 24.5162 26.265 25.3906 27.3438 25.3906C28.4225 25.3906 29.2969 24.5162 29.2969 23.4375Z"
                    fill="#389E13"
                  />
                </svg>

                <div className="flex flex-col items-center">
                  <div className="text-xs sm:text-sm tracking-num--0_03 leading-5 sm:leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center">
                    $500K - $1M monthly
                  </div>
                  <div className="text-xs sm:text-sm tracking-num--0_03 leading-5 sm:leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center">
                    on ads
                  </div>
                </div>
              </button>
              <button
                onClick={() => handleAnswer('$1M+ monthly on ads')}
                className="flex-[1_1_calc(50%-0.375rem)] sm:flex-[1_1_calc(33.333%-0.667rem)] min-w-0 max-w-60 min-h-[44px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-3 sm:p-4 md:p-num-20 gap-2 sm:gap-[15px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M32.2194 2.77247C32.8419 2.85108 33.4197 3.07094 33.9236 3.57479C34.4273 4.07863 34.6472 4.65639 34.7258 5.27899C34.7923 5.80524 34.758 6.50257 34.7267 7.13821C34.5402 10.9522 33.3895 14.6867 30.51 17.5663L28.1887 19.8875C27.1758 20.9005 26.7294 21.3661 26.5091 21.7964C26.3562 22.095 26.2814 22.4413 26.4513 23.3347C26.6375 24.0791 26.8709 25.0116 26.8725 25.8819C26.8744 26.8406 26.6086 27.8395 25.7627 28.6855C24.9556 29.4925 24.0067 30.0764 22.8998 30.0764C21.7931 30.0764 20.8441 29.4925 20.037 28.6855L8.81289 17.4613C8.00581 16.6542 7.42189 15.7052 7.42188 14.5985C7.42186 13.4917 8.00578 12.5427 8.81289 11.7356C9.6588 10.8897 10.6576 10.624 11.6164 10.6258C12.4868 10.6274 13.4193 10.8608 14.1637 11.0471C15.057 11.2169 15.4033 11.1421 15.7019 10.9893C16.1322 10.7689 16.5978 10.3225 17.6109 9.3095L19.932 6.98829C22.8116 4.10872 26.5461 2.95814 30.3602 2.77157C30.9958 2.74032 31.6931 2.70604 32.2194 2.77247Z"
                    fill="#389E13"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.9941 10.9375C24.9941 10.0746 25.6937 9.375 26.5566 9.375H26.5707C27.4337 9.375 28.1332 10.0746 28.1332 10.9375C28.1332 11.8004 27.4337 12.5 26.5707 12.5H26.5566C25.6937 12.5 24.9941 11.8004 24.9941 10.9375Z"
                    fill="#389E13"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.23711 20.3536C8.8168 20.9333 8.8168 21.8731 8.23711 22.4528L5.26836 25.4216C4.68867 26.0012 3.74883 26.0012 3.16914 25.4216C2.58945 24.8419 2.58945 23.902 3.16914 23.3223L6.13789 20.3536C6.71758 19.7739 7.65742 19.7739 8.23711 20.3536ZM10.591 24.8067C11.1707 24.227 12.1105 24.227 12.6902 24.8067C13.2699 25.3864 13.2699 26.3262 12.6902 26.9059L5.26836 34.3278C4.68867 34.9075 3.74883 34.9075 3.16914 34.3278C2.58945 33.7481 2.58945 32.8083 3.16914 32.2286L10.591 24.8067ZM17.1434 29.2598C17.723 29.8395 17.723 30.7794 17.1434 31.3591L14.1746 34.3278C13.5949 34.9075 12.6551 34.9075 12.0754 34.3278C11.4957 33.7481 11.4957 32.8083 12.0754 32.2286L15.0441 29.2598C15.6238 28.6802 16.5637 28.6802 17.1434 29.2598Z"
                    fill="#389E13"
                  />
                </svg>

                <div className="flex flex-col items-center">
                  <div className="text-xs sm:text-sm tracking-num--0_03 leading-5 sm:leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center">
                    $1M+ monthly
                  </div>
                  <div className="text-xs sm:text-sm tracking-num--0_03 leading-5 sm:leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] text-center">
                    on ads
                  </div>
                </div>
              </button>
            </div>
            {/* No Ads Option */}
            <button
              onClick={() => handleAnswer("We don't run any ads")}
              className="w-fit sm:w-[350px] min-h-[44px] h-auto sm:h-12 shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2.5 px-4 sm:px-num-20 text-center text-sm sm:text-[16px] text-white cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset]"
            >
              <div className="tracking-num--0_03 leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] space-x-2">
                <span>❌</span>
                <span>We don&apos;t run any ads</span>
              </div>
            </button>
          </div>
        </div>
      </section>
      <ProgressIndicators currentStep={6} onStepClick={onStepClick} />
    </>
  );
}
