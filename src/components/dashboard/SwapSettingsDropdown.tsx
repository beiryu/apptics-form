import Image from 'next/image';
import { useState } from 'react';

export default function SwapSettingsDropdown() {
  const [orderRate, setOrderRate] = useState<'fixed' | 'float'>('float');

  return (
    <div
      className="absolute top-0 right-0 w-72 z-50"
      style={{ transform: 'translateY(80px) translateX(-20px)' }}
    >
      <div className="backdrop-blur-sm w-full relative rounded-[20px] [background:linear-gradient(180deg,_rgba(93,_52,_214,_0.1),_rgba(93,_52,_214,_0)),_rgba(255,_255,_255,_0.03)] border-gray-700 border-solid border-[1px] box-border flex flex-col items-start py-3 px-0 text-center text-sm text-white font-inter">
        <div className="self-stretch flex flex-col items-start justify-center gap-2">
          <div className="self-stretch flex items-center py-0 px-[15px] opacity-[0.9]">
            <div className="relative tracking-[-0.02em] font-medium opacity-[0.75]">
              Order Rate
            </div>
          </div>
          <div className="flex items-center w-full justify-between py-0 px-[15px]">
            <button
              onClick={() => setOrderRate('fixed')}
              className={`rounded-[103.89px] border-gray-700 border-solid border-[1px] overflow-hidden flex flex-col items-center justify-center p-2 transition-all duration-200 cursor-pointer ${
                orderRate === 'fixed'
                  ? 'shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] bg-blueviolet-300 border-blueviolet-600'
                  : 'opacity-[0.5] hover:opacity-75'
              }`}
            >
              <div className="flex items-center gap-[5px]">
                <Image
                  src="/dashboard/IconFilterCircle.svg"
                  className="h-5 w-5 relative"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt="Fixed Rate Icon"
                />
                <div className="relative tracking-[-0.02em] leading-5 font-medium">
                  Fixed (1.0%)
                </div>
              </div>
            </button>
            <button
              onClick={() => setOrderRate('float')}
              className={`rounded-[103.89px] border-gray-700 border-solid border-[1px] overflow-hidden flex flex-col items-center justify-center p-2 transition-all duration-200 cursor-pointer ${
                orderRate === 'float'
                  ? 'shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] bg-blueviolet-400 border-blueviolet-300'
                  : 'opacity-[0.5] hover:opacity-75'
              }`}
            >
              <div className="flex items-center gap-[5px]">
                <Image
                  src="/dashboard/IconArrowsRepeatCircle.svg"
                  className="h-5 w-5 relative"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt="Float Rate Icon"
                />
                <div className="relative tracking-[-0.02em] leading-5 font-medium">
                  Float (0.5%)
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
