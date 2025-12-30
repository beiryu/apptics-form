import Image from 'next/image';

export default function NetworkDropdown() {
  return (
    <div className="backdrop-blur-md absolute top-44 left-1/2 z-50 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.1)_inset] rounded-xl bg-gray-600 border-gray-700 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-num-12 px-0 text-left text-num-16 text-white font-inter">
      <div className="flex flex-col items-start py-0 px-num-12 gap-2.5">
        <div className="self-stretch shadow-[0px_0px_20px_rgba(255,_255,_255,_0.1)_inset] rounded-num-15 bg-gray-600 border-gray-700 border-solid border-[1px] flex items-center p-num-12 gap-[15px]">
          <div className="flex items-center gap-2.5">
            <Image
              src="/dashboard/NetworkGroup.svg"
              className="w-5 relative max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium">All Networks</div>
          </div>
          <Image
            src="/dashboard/IconCircleCheck.svg"
            className="h-5 w-5 relative"
            width={20}
            height={20}
            sizes="100vw"
            alt=""
          />
        </div>
        <div className="self-stretch rounded-num-15 flex items-center justify-between py-num-8 px-num-12 gap-5">
          <div className="flex items-center gap-2.5">
            <Image
              src="/dashboard/network-etherum.svg"
              className="w-5 relative rounded-num-999 max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium">Ethereum</div>
          </div>
        </div>
        <div className="self-stretch rounded-num-15 flex items-center justify-between py-num-8 px-num-12 gap-5">
          <div className="flex items-center gap-2.5">
            <Image
              src="/dashboard/network-solana.svg"
              className="w-5 relative rounded-num-999 max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium">Solana</div>
          </div>
        </div>
        <div className="self-stretch rounded-num-15 flex items-center justify-between py-num-8 px-num-12 gap-5">
          <div className="flex items-center gap-2.5">
            <Image
              src="/dashboard/network-polygon.svg"
              className="w-5 relative rounded-num-999 max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium">Polygon</div>
          </div>
        </div>
        <div className="self-stretch rounded-num-15 flex items-center justify-between py-num-8 px-num-12 gap-5">
          <div className="flex items-center gap-2.5">
            <Image
              src="/dashboard/network-avalanche.svg"
              className="w-5 relative rounded-num-999 max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium">Avalanche</div>
          </div>
        </div>
        <div className="self-stretch rounded-num-15 flex items-center justify-between py-num-8 px-num-12 gap-5">
          <div className="flex items-center gap-2.5">
            <Image
              src="/dashboard/network-base.svg"
              className="w-5 relative rounded-num-999 max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium">Base</div>
          </div>
        </div>
        <div className="self-stretch rounded-num-15 flex items-center justify-between py-num-8 px-num-12 gap-5">
          <div className="flex items-center gap-2.5">
            <Image
              src="/dashboard/network-arbitrum.svg"
              className="w-5 relative rounded-num-999 max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium">Arbitrum</div>
          </div>
        </div>
      </div>
    </div>
  );
}
