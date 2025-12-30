import Image from 'next/image';

interface TokenSelectionPopupProps {
  onClose: () => void;
}

export default function TokenSelectionPopup({
  onClose,
}: TokenSelectionPopupProps) {
  return (
    <div
      className="absolute -top-40 left-0 w-full z-50"
      style={{ transform: 'translateY(200px)' }}
    >
      <div className="max-w-[85%] mx-auto backdrop-blur-md w-full relative shadow-[0px_0px_20px_rgba(255,_255,_255,_0.1)_inset] rounded-xl bg-gray-600 border-gray-700 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[15px] px-num-0 gap-3.5 text-center text-num-18 text-white font-inter">
        <div className="self-stretch flex items-center py-num-0 px-5">
          <div className="flex-1 flex flex-col items-start">
            <div className="self-stretch flex items-center justify-between gap-5">
              <div className="relative tracking-num--0_02 font-medium">
                Select a token
              </div>
              <button
                onClick={onClose}
                className="hover:opacity-75 transition-opacity duration-200 cursor-pointer"
              >
                <Image
                  src="/dashboard/IconCrossLarge.svg"
                  className="h-[18px] w-[18px] relative hover:opacity-75 transition-opacity duration-200"
                  width={18}
                  height={18}
                  sizes="100vw"
                  alt="Close"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Image
          src="/dashboard/Divider.svg"
          className="w-full max-w-full overflow-hidden max-h-full"
          width={505}
          height={1.5}
          sizes="100vw"
          alt="Divider"
        />

        <div className="self-stretch flex items-start py-num-0 px-5 gap-2.5 text-left text-num-16">
          <div className="h-full flex-1 shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-[103.89px] bg-blueviolet-500 border-gray-1000 border-solid border-[1px] box-border flex items-center py-num-10 px-3.5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/dashboard/IconMagnifyingGlass2.svg"
                className="h-[18px] w-[18px] relative"
                width={18}
                height={18}
                sizes="100vw"
                alt=""
              />
              <div className="relative font-medium opacity-[0.25]">
                Search for a token
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-[103.89px] bg-blueviolet-600 border-blueviolet-300 border-solid border-[1px] flex items-center justify-center py-num-10 px-num-12 gap-[8.4px] hover:bg-blueviolet-500 transition-colors duration-200">
              <div className="h-5 w-5 relative">
                <Image
                  src="/dashboard/eth.svg"
                  className="absolute top-[calc(50%_-_9.5px)] left-[calc(50%_-_9.6px)] w-full h-5 object-cover"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-0.5">
                <div className="relative font-medium">ETH</div>
                <Image
                  src="/dashboard/IconArrowDown.svg"
                  hidden
                  className="h-[18px] w-[18px] relative object-contain opacity-[0.8]"
                  width={18}
                  height={18}
                  sizes="100vw"
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>

        {/* Divider */}
        <Image
          src="/dashboard/Divider.svg"
          className="w-full max-w-full overflow-hidden max-h-full"
          width={505}
          height={1.5}
          sizes="100vw"
          alt="Divider"
        />

        <div className="self-stretch flex items-center justify-between py-num-0 px-5 gap-[7.4px] text-left text-num-16">
          <div className="w-num-66 shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-num-15 bg-blueviolet-500 border-gray-1000 border-solid border-[1px] box-border flex flex-col items-center justify-center p-num-10 gap-[8.4px]">
            <Image
              src="/dashboard/eth.svg"
              className="w-5 relative max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium opacity-num-0_75">ETH</div>
          </div>
          <div className="w-num-66 shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-num-15 bg-blueviolet-500 border-gray-1000 border-solid border-[1px] box-border flex flex-col items-center justify-center p-num-10 gap-[8.4px]">
            <Image
              src="/dashboard/usdc.svg"
              className="w-5 relative max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium opacity-num-0_75">USDC</div>
          </div>
          <div className="w-num-66 shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-num-15 bg-blueviolet-500 border-gray-1000 border-solid border-[1px] box-border flex flex-col items-center justify-center p-num-10 gap-[8.4px]">
            <Image
              src="/dashboard/usdt.svg"
              className="w-5 relative rounded-[66.6px] max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium opacity-num-0_75">USDT</div>
          </div>
          <div className="w-num-66 shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-num-15 bg-blueviolet-500 border-gray-1000 border-solid border-[1px] box-border flex flex-col items-center justify-center p-num-10 gap-[8.4px]">
            <Image
              src="/dashboard/wbtc.svg"
              className="w-5 relative max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium opacity-num-0_75">WBTC</div>
          </div>
          <div className="w-num-66 shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-num-15 bg-blueviolet-500 border-gray-1000 border-solid border-[1px] box-border flex flex-col items-center justify-center p-num-10 gap-[8.4px]">
            <Image
              src="/dashboard/weth.svg"
              className="w-5 relative max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium opacity-num-0_75">WETH</div>
          </div>
          <div className="w-num-66 shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-num-15 bg-blueviolet-500 border-gray-1000 border-solid border-[1px] box-border flex flex-col items-center justify-center p-num-10 gap-[8.4px]">
            <Image
              src="/dashboard/sol.svg"
              className="w-5 relative rounded-[999px] max-h-full object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
            />
            <div className="relative font-medium opacity-num-0_75">SOL</div>
          </div>
        </div>

        {/* Divider */}
        <Image
          src="/dashboard/Divider.svg"
          className="w-full max-w-full overflow-hidden max-h-full"
          width={505}
          height={1.5}
          sizes="100vw"
          alt="Divider"
        />

        <div className="flex flex-col items-start py-num-0 px-[30px] text-num-16">
          <div className="flex items-center gap-[5px]">
            <Image
              src="/dashboard/IconTrending3.svg"
              className="h-[18px] w-[18px] relative"
              width={18}
              height={18}
              sizes="100vw"
              alt=""
            />
            <div className="relative tracking-num--0_02 font-medium">
              Tokens by 24H Volume
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center py-num-0 px-num-24">
          <div className="flex-1 rounded-num-25 flex items-center p-num-12 gap-[15px] hover:bg-gray-600 hover:shadow-[0px_0px_20px_rgba(255,_255,_255,_0.1)_inset] hover:border-gray-700 hover:border-solid cursor-pointer">
            <Image
              src="/dashboard/eth.svg"
              className="h-[45px] w-num-45 relative rounded-[33.26px]"
              width={45}
              height={45}
              sizes="100vw"
              alt=""
            />
            <div className="flex flex-col items-start gap-0.5">
              <div className="relative tracking-num--0_02 leading-num-22 font-medium">
                Ethereum
              </div>
              <div className="relative text-num-16 tracking-num--0_02 leading-6 opacity-num-0_75">
                ETH
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center py-num-0 px-num-24">
          <div className="flex-1 rounded-num-25 flex items-center p-num-12 gap-[15px] hover:bg-gray-600 hover:shadow-[0px_0px_20px_rgba(255,_255,_255,_0.1)_inset] hover:border-gray-700 hover:border-solid cursor-pointer">
            <Image
              src="/dashboard/usdt.svg"
              className="w-num-45 relative rounded-num-99 max-h-full object-cover"
              width={45}
              height={45}
              sizes="100vw"
              alt=""
            />
            <div className="flex flex-col items-start gap-0.5">
              <div className="relative tracking-num--0_02 leading-num-22 font-medium">
                Tether
              </div>
              <div className="flex items-center gap-[5px] text-num-16">
                <div className="relative tracking-num--0_02 leading-6 opacity-num-0_75">
                  USDT
                </div>
                <div className="relative text-num-14 tracking-num--0_02 leading-6 opacity-num-0_5">
                  0xdAC1...1ec7
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center py-num-0 px-num-24">
          <div className="flex-1 rounded-num-25 flex items-center p-num-12 gap-[15px] hover:bg-gray-600 hover:shadow-[0px_0px_20px_rgba(255,_255,_255,_0.1)_inset] hover:border-gray-700 hover:border-solid cursor-pointer">
            <Image
              src="/dashboard/usdc.svg"
              className="w-num-45 relative rounded-num-99 max-h-full object-cover"
              width={45}
              height={45}
              sizes="100vw"
              alt=""
            />
            <div className="flex flex-col items-start gap-0.5">
              <div className="relative tracking-num--0_02 leading-num-22 font-medium">
                USDC
              </div>
              <div className="flex items-center gap-[5px] text-num-16">
                <div className="relative tracking-num--0_02 leading-6 opacity-num-0_75">
                  USDT
                </div>
                <div className="relative text-num-14 tracking-num--0_02 leading-6 opacity-num-0_5">
                  0xA0b8...eB48
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center py-num-0 px-num-24">
          <div className="flex-1 rounded-num-25 flex items-center p-num-12 gap-[15px] hover:bg-gray-600 hover:shadow-[0px_0px_20px_rgba(255,_255,_255,_0.1)_inset] hover:border-gray-700 hover:border-solid cursor-pointer">
            <Image
              src="/dashboard/wbtc.svg"
              className="w-num-45 relative rounded-num-99 max-h-full object-cover"
              width={45}
              height={45}
              sizes="100vw"
              alt=""
            />
            <div className="flex flex-col items-start gap-0.5">
              <div className="relative tracking-num--0_02 leading-num-22 font-medium">
                Wrapped Bitcoin
              </div>
              <div className="flex items-center gap-[5px] text-num-16">
                <div className="relative tracking-num--0_02 leading-6 opacity-num-0_75">
                  WBTC
                </div>
                <div className="relative text-num-14 tracking-num--0_02 leading-6 opacity-num-0_5">
                  0x2260...C599
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center py-num-0 px-num-24">
          <div className="flex-1 rounded-num-25 flex items-center p-num-12 gap-[15px] hover:bg-gray-600 hover:shadow-[0px_0px_20px_rgba(255,_255,_255,_0.1)_inset] hover:border-gray-700 hover:border-solid cursor-pointer">
            <Image
              src="/dashboard/usde.svg"
              className="w-num-45 relative rounded-num-99 max-h-full object-cover"
              width={45}
              height={45}
              sizes="100vw"
              alt=""
            />
            <div className="flex flex-col items-start gap-0.5">
              <div className="relative tracking-num--0_02 leading-num-22 font-medium">
                Ethena USDe
              </div>
              <div className="flex items-center gap-[5px] text-num-16">
                <div className="relative tracking-num--0_02 leading-6 opacity-num-0_75">
                  USDe
                </div>
                <div className="relative text-num-14 tracking-num--0_02 leading-6 opacity-num-0_5">
                  0x4c9E...68B3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center py-num-0 px-num-24">
          <div className="flex-1 rounded-num-25 flex items-center p-num-12 gap-[15px] hover:bg-gray-600 hover:shadow-[0px_0px_20px_rgba(255,_255,_255,_0.1)_inset] hover:border-gray-700 hover:border-solid cursor-pointer">
            <Image
              src="/dashboard/paxg.svg"
              className="w-num-45 relative rounded-num-99 max-h-full object-cover"
              width={45}
              height={45}
              sizes="100vw"
              alt=""
            />
            <div className="flex flex-col items-start gap-0.5">
              <div className="relative tracking-num--0_02 leading-num-22 font-medium">
                PAX Gold
              </div>
              <div className="flex items-center gap-[5px] text-num-16">
                <div className="relative tracking-num--0_02 leading-6 opacity-num-0_75">
                  PAXG
                </div>
                <div className="relative text-num-14 tracking-num--0_02 leading-6 opacity-num-0_5">
                  0x4580...Af78
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
