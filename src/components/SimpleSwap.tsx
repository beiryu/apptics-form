'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';

interface Token {
  name: string;
  symbol: string;
  icon: string;
  price: number;
}

const ETH_TOKEN: Token = {
  name: 'Ethereum',
  symbol: 'ETH',
  icon: '/dashboard/eth.svg',
  price: 4348,
};

const USDT_TOKEN: Token = {
  name: 'Tether USD',
  symbol: 'USDT',
  icon: '/dashboard/usdt.svg',
  price: 1,
};

export default function SimpleSwap() {
  const [fromAmount, setFromAmount] = useState('');
  const [isSwapped, setIsSwapped] = useState(false);

  const fromToken: Token = isSwapped ? USDT_TOKEN : ETH_TOKEN;
  const toToken: Token = isSwapped ? ETH_TOKEN : USDT_TOKEN;

  const toAmount = useMemo(() => {
    if (!fromAmount || isNaN(Number(fromAmount))) return '0';
    const amount = Number(fromAmount);
    const usdValue = amount * fromToken.price;
    const result = usdValue / toToken.price;
    return result.toFixed(6);
  }, [fromAmount, fromToken, toToken]);

  const handleSwapDirection = () => {
    setIsSwapped(!isSwapped);
  };

  const handleFromAmountChange = (value: string) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setFromAmount(value);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white font-inter p-4">
      {/* Background Effect */}
      <div className="fixed w-full h-full top-0 left-0 pointer-events-none z-0">
        <div className="mx-auto w-full [filter:blur(74.01px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(4,_5,_28,_0),_#865dff)] opacity-50" />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[553px] flex flex-col items-center gap-6 z-10">
        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-semibold">Swap using Cogpiece</h1>
          <p className="text-lg opacity-60">
            Trade with complete privacy and MEV protection.
          </p>
        </div>

        {/* Swap Card */}
        <div className="backdrop-blur-sm w-full rounded-[25px] [background:linear-gradient(180deg,_rgba(93,_52,_214,_0.1),_rgba(93,_52,_214,_0)),_rgba(255,_255,_255,_0.03)] border-gray-700 border-solid border-[1px] p-6 flex flex-col gap-4">
          {/* From Token */}
          <div className="w-full rounded-[30px] [background:linear-gradient(180deg,_rgba(93,_52,_214,_0.25),_rgba(93,_52,_214,_0)),_rgba(0,_0,_0,_0.1)] border-gray-400 border-solid border-[1.5px] flex items-center justify-between py-4 px-6 gap-5">
            <div className="flex flex-col items-start gap-1">
              <div className="text-base opacity-75">Send</div>
              <input
                type="text"
                value={fromAmount}
                onChange={e => handleFromAmountChange(e.target.value)}
                placeholder="0"
                className="text-4xl font-semibold bg-transparent border-none outline-none text-white placeholder:text-white placeholder:opacity-50 w-full"
              />
              <div className="text-base opacity-75">
                $
                {fromAmount
                  ? (Number(fromAmount) * fromToken.price).toFixed(2)
                  : '0'}
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-blueviolet-600 border-blueviolet-300 border-[1px]">
              <Image
                src={fromToken.icon}
                className="h-5 w-5 rounded-full"
                width={20}
                height={20}
                alt={fromToken.name}
              />
              <span className="font-semibold">{fromToken.symbol}</span>
            </div>
          </div>

          {/* Swap Button */}
          <div className="w-full flex items-center gap-2">
            <div className="flex-1 h-[1.5px] bg-gray-400" />
            <button
              onClick={handleSwapDirection}
              className="flex items-center justify-center transition-all duration-300 hover:rotate-180 cursor-pointer"
            >
              <Image
                src="/dashboard/IconSwap.svg"
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
                alt="Swap"
              />
            </button>
            <div className="flex-1 h-[1.5px] bg-gray-400" />
          </div>

          {/* To Token */}
          <div className="w-full rounded-[30px] [background:linear-gradient(180deg,_rgba(93,_52,_214,_0),_rgba(93,_52,_214,_0.25)),_rgba(0,_0,_0,_0.1)] border-gray-400 border-solid border-[1.5px] flex items-center justify-between py-4 px-6 gap-5">
            <div className="flex flex-col items-start gap-1 flex-1">
              <div className="text-base opacity-75">Receive</div>
              <div className="text-4xl font-semibold">{toAmount}</div>
              <div className="text-base opacity-75">
                $
                {toAmount ? (Number(toAmount) * toToken.price).toFixed(2) : '0'}
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-blueviolet-600 border-blueviolet-300 border-[1px]">
              <Image
                src={toToken.icon}
                className="h-5 w-5 rounded-full"
                width={20}
                height={20}
                alt={toToken.name}
              />
              <span className="font-semibold">{toToken.symbol}</span>
            </div>
          </div>

          {/* Swap Button */}
          <button className="w-full h-14 rounded-full bg-blueviolet-600 border-blueviolet-300 border-[1px] flex items-center justify-center font-semibold text-lg hover:bg-blueviolet-500 transition-all duration-300">
            Initiate Swap
          </button>
        </div>
      </main>
    </div>
  );
}
