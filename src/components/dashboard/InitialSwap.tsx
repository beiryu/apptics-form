'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import NetworkDropdown from './NetworkDropdown';
import TokenSelectionPopup from './TokenSelectionPopup';
import SwapSettingsDropdown from './SwapSettingsDropdown';
import CountdownTimer from '../common/CountdownTimer';
import Footer from './Footer';
import Header from './Header';

interface Token {
  name: string;
  symbol: string;
  icon: string;
  price: number;
  decimals: number;
}

const ETH_TOKEN: Token = {
  name: 'Ethereum',
  symbol: 'ETH',
  icon: '/dashboard/eth.svg',
  price: 4348,
  decimals: 18,
};

const USDT_TOKEN: Token = {
  name: 'Tether USD',
  symbol: 'USDT',
  icon: '/dashboard/usdt.svg',
  price: 1,
  decimals: 6,
};

interface InitialSwapProps {
  isPlaceHolderMode?: boolean;
  onActivate?: () => void;
}

export default function InitialSwap({
  isPlaceHolderMode = false,
  onActivate,
}: InitialSwapProps) {

  // Token amounts state
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  // Swap direction state
  const [isSwapped, setIsSwapped] = useState(false);

  // Gas details dropdown state
  const [showGasDetails, setShowGasDetails] = useState(true);

  // Swap mode state
  const [isPrivateMode, setIsPrivateMode] = useState(false);

  // Input focus state
  const [isFromInputFocused, setIsFromInputFocused] = useState(false);

  // Settings dropdown state
  const [showSettings, setShowSettings] = useState(false);

  // Token selection popup state
  const [showTokenPopup, setShowTokenPopup] = useState(false);

  // Network dropdown state
  const [showNetworkDropdown, setShowNetworkDropdown] = useState(false);

  // Recipient address state
  const [recipientAddress, setRecipientAddress] = useState('');
  const [isRecipientFocused, setIsRecipientFocused] = useState(false);

  // Current token objects
  const fromToken: Token = isSwapped ? USDT_TOKEN : ETH_TOKEN;
  const toToken: Token = isSwapped ? ETH_TOKEN : USDT_TOKEN;

  // Calculate amounts based on token prices
  const calculatedAmount = useMemo(() => {
    if (!fromAmount || isNaN(Number(fromAmount))) return '0';
    const amount = Number(fromAmount);

    // Convert from token to USD, then to target token
    const usdValue = amount * fromToken.price;
    const result = usdValue / toToken.price;

    return result.toFixed(toToken.decimals > 6 ? 6 : toToken.decimals);
  }, [fromAmount, fromToken, toToken]);

  // Update to amount when from amount changes
  useMemo(() => {
    setToAmount(calculatedAmount);
  }, [calculatedAmount]);

  const handleSwapDirection = () => {
    setIsSwapped(!isSwapped);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleFromAmountChange = (value: string) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setFromAmount(value);
    }
  };

  // Handle token selection
  const handleTokenClick = () => {
    setShowTokenPopup(true);
    setShowSettings(false); // Close settings if open
  };

  const handleCloseTokenPopup = () => {
    setShowTokenPopup(false);
    setShowNetworkDropdown(false);
  };

  const handlePasteRecipient = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) setRecipientAddress(text.trim());
    } catch {
      // ignore clipboard errors silently for now
    }
  };

  // Handle click in placeholder mode
  const handleClick = () => {
    if (isPlaceHolderMode && onActivate) {
      onActivate();
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col overflow-hidden text-center text-sm sm:text-base font-inter text-white will-change-transform">
      <div className="fixed w-full h-full top-0 left-0 pointer-events-none z-0">
        <div className="mx-auto w-full [filter:blur(40px) sm:blur(60px) lg:blur(74.01px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(4,_5,_28,_0),_#5d34d6)] opacity-num-0_5" />
      </div>
      {!isPlaceHolderMode && <Header />}
      <main
        onClick={isPlaceHolderMode ? handleClick : undefined}
        className={`flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 z-10 ${isPlaceHolderMode ? 'cursor-pointer' : ''}`}
      >
        <section
          className={
            'w-full max-w-[553px] flex flex-col items-center gap-4 sm:gap-5 lg:gap-[30px]'
          }
        >
          {/* Section Header */}
          {!isPlaceHolderMode && (
            <div className="flex flex-col items-center gap-2">
              <div className="text-xl sm:text-2xl lg:text-[32px] tracking-num--0_01 leading-tight font-roobert-trial font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#dedede)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Swap using Cogpiece
              </div>
              <div className="text-base sm:text-[18px] tracking-num--0_02 leading-normal font-inter opacity-num-0_6">
                Trade with complete privacy and MEV protection.
              </div>
            </div>
          )}

          {/* Swap Interface */}
          <div className="w-full flex flex-col items-start gap-3 sm:gap-4 lg:gap-[15px] text-left relative">
            {/* Swap Card */}
            <div className="backdrop-blur-sm w-full rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] [background:linear-gradient(180deg,_rgba(93,_52,_214,_0.1),_rgba(93,_52,_214,_0)),_rgba(255,_255,_255,_0.03)] border-gray-700 border-solid border-[1px] box-border flex flex-col items-start justify-between p-4 sm:p-5 lg:p-6 gap-4">
              {/* Card Header */}
              <div className="w-full flex items-center justify-between gap-3 sm:gap-5 text-center">
                <div className="text-lg sm:text-xl lg:text-[26px] tracking-num--0_01 leading-tight font-semibold font-roobert-trial whitespace-pre-wrap">
                  {' '}
                  Secure Swap
                </div>
                <div className="relative">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="flex items-center justify-center transition-all duration-300 ease-out hover:rotate-45 hover:scale-105 cursor-pointer"
                  >
                    <Image
                      src="/dashboard/IconSettings.svg"
                      className="h-8 w-8 sm:h-9 sm:w-9 lg:h-[38px] lg:w-[38px]"
                      width={38}
                      height={38}
                      sizes="(max-width: 640px) 32px, (max-width: 768px) 36px, 38px"
                      alt="Settings"
                    />
                  </button>
                </div>
              </div>

              {/* Swap Mode Selection */}
              <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-start gap-2 sm:gap-2.5">
                <button
                  onClick={() => setIsPrivateMode(false)}
                  className={`h-12 sm:h-[46px] flex-1 sm:flex-[0.8619] rounded-full border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2 px-4 sm:py-[10.5px] sm:px-[27.3px] gap-2 sm:gap-[8.4px] transition-all duration-300 ease-out cursor-pointer ${
                    !isPrivateMode
                      ? 'bg-blueviolet-600 border-blueviolet-300'
                      : 'border-gray-700 opacity-num-0_5 hover:opacity-75'
                  }`}
                >
                  <Image
                    src="/dashboard/IconArrowsRepeatCircle.svg"
                    className="h-5 w-5 sm:h-num-18 sm:w-[18px]"
                    width={18}
                    height={18}
                    sizes="(max-width: 640px) 20px, 18px"
                    alt="Standard Mode Icon"
                  />
                  <div className="text-base sm:text-base lg:text-num-16 tracking-num--0_02 leading-normal sm:leading-num-26 font-semibold">
                    Standard Mode
                  </div>
                </button>
                <button
                  onClick={() => setIsPrivateMode(true)}
                  className={`h-12 sm:h-[46px] flex-1 rounded-full border-solid border-[1px] overflow-hidden flex items-center justify-center py-2 px-3 gap-2 transition-all duration-300 ease-out cursor-pointer ${
                    isPrivateMode
                      ? 'bg-blueviolet-600 border-blueviolet-300'
                      : 'border-gray-700 opacity-num-0_5 hover:opacity-75'
                  }`}
                >
                  <Image
                    src="/dashboard/IconShield.svg"
                    className="h-5 w-5 sm:h-num-18 sm:w-[18px]"
                    width={18}
                    height={18}
                    sizes="(max-width: 640px) 20px, 18px"
                    alt="Private Mode Icon"
                  />
                  <div className="text-base sm:text-base lg:text-num-16 tracking-num--0_02 leading-normal sm:leading-num-26 font-semibold">
                    Private Mode
                  </div>
                </button>
              </div>

              {/* Private Mode Features */}
              {isPrivateMode && (
                <div className="w-full relative rounded-[99px] bg-blueviolet-400 border-blueviolet-300 border-solid border-[1px] box-border overflow-hidden flex items-center justify-between py-2 px-4 gap-1 text-center text-[13px] text-white font-inter animate-fadeIn transition-transform duration-500 ease-out transform-gpu">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/dashboard/IconCoins.svg"
                      className="h-[18px] w-[18px] relative"
                      width={18}
                      height={18}
                      sizes="100vw"
                      alt=""
                    />
                    <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
                      MEV protected
                    </div>
                  </div>
                  <div className="w-0.25 h-3 relative max-w-full overflow-hidden bg-gray-1000" />
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/dashboard/IconChainLink4.svg"
                      className="h-[18px] w-[18px] relative"
                      width={18}
                      height={18}
                      sizes="100vw"
                      alt=""
                    />
                    <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
                      Unlinked transaction path
                    </div>
                  </div>
                  <div className="w-0.25 h-3 relative max-w-full overflow-hidden bg-gray-1000" />
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/dashboard/IconDollar.svg"
                      className="h-[18px] w-[18px] relative"
                      width={18}
                      height={18}
                      sizes="100vw"
                      alt=""
                    />
                    <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
                      Fair batch pricing
                    </div>
                  </div>
                </div>
              )}

              {/* Token Exchange Interface */}
              <div className="w-full flex flex-col items-center gap-2 sm:gap-2.5 text-center">
                {/* From Token */}
                <div
                  className={`w-full rounded-2xl sm:rounded-[30px] border-solid border-[1.5px] flex items-center justify-between py-3 sm:py-4 lg:py-[18px] px-4 sm:px-5 lg:px-6 gap-3 sm:gap-5 transition-all duration-400 ease-out ${
                    isFromInputFocused
                      ? 'shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.25)_inset] rounded-tl-[20px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[20px] bg-blueviolet-600 border-blueviolet-300'
                      : '[background:linear-gradient(180deg,_rgba(93,_52,_214,_0.25),_rgba(93,_52,_214,_0)),_rgba(0,_0,_0,_0.1)] border-gray-400'
                  }`}
                >
                  <div className="flex flex-col items-start gap-1 sm:gap-[5px]">
                    <div className="text-sm sm:text-base tracking-num--0_02 leading-normal sm:leading-num-24 opacity-num-0_75">
                      Send
                    </div>
                    <input
                      type="text"
                      value={fromAmount}
                      onChange={e => handleFromAmountChange(e.target.value)}
                      onFocus={() => setIsFromInputFocused(true)}
                      onBlur={() => setIsFromInputFocused(false)}
                      placeholder="0"
                      className="text-2xl sm:text-3xl lg:text-[38px] tracking-num--0_01 leading-tight sm:leading-9 font-semibold font-roobert-trial bg-transparent border-none outline-none text-white placeholder:text-white placeholder:opacity-50 w-full"
                    />
                    <div className="text-sm sm:text-base tracking-num--0_02 leading-normal sm:leading-num-24 opacity-num-0_75">
                      $
                      {fromAmount
                        ? (Number(fromAmount) * fromToken.price).toFixed(2)
                        : '0'}
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-left">
                    <button
                      onClick={handleTokenClick}
                      className="h-10 sm:h-[38px] shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-full bg-blueviolet-600 border-blueviolet-300 border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-center py-2 px-3 gap-2 sm:gap-[8.4px] hover:bg-blueviolet-500 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5 sm:gap-[7px]">
                        <Image
                          src={fromToken.icon}
                          className="h-5 w-5 sm:h-num-18 sm:w-[18px] rounded-[13.3px] flex-shrink-0"
                          width={18}
                          height={18}
                          sizes="(max-width: 640px) 20px, 18px"
                          alt={`${fromToken.name} Logo`}
                        />
                        <div className="text-sm sm:text-base tracking-num--0_02 leading-normal sm:leading-num-26 font-semibold">
                          {fromToken.symbol}
                        </div>
                      </div>
                      <Image
                        src="/dashboard/IconArrowDown.svg"
                        className="h-5 w-5 sm:h-num-18 sm:w-[18px] object-contain opacity-num-0_8 flex-shrink-0"
                        width={18}
                        height={18}
                        sizes="(max-width: 640px) 20px, 18px"
                        alt="Arrow Down"
                      />
                    </button>
                  </div>
                </div>

                {/* Swap Direction */}
                <div className="w-full flex items-center gap-2 sm:gap-[9px]">
                  <Image
                    src="/dashboard/Divider.svg"
                    className="flex-1 max-w-full overflow-hidden max-h-full py-2"
                    width={224.8}
                    height={1.5}
                    sizes="100vw"
                    alt="Line"
                  />
                  <button
                    className="flex items-center justify-center transition-all duration-300 hover:rotate-180 cursor-pointer"
                    onClick={handleSwapDirection}
                  >
                    <Image
                      src="/dashboard/IconSwap.svg"
                      className="h-8 w-8 sm:h-9 sm:w-9 lg:h-[37.5px] lg:w-[37.5px] rounded-full"
                      width={37.5}
                      height={37.5}
                      sizes="(max-width: 640px) 32px, (max-width: 768px) 36px, 37.5px"
                      alt="Swap Icon"
                    />
                  </button>
                  <Image
                    src="/dashboard/Divider.svg"
                    className="flex-1 max-w-full overflow-hidden max-h-full py-2"
                    width={224.8}
                    height={1.5}
                    sizes="100vw"
                    alt="Line"
                  />
                </div>

                {/* To Token */}
                <div className="w-full rounded-2xl sm:rounded-[30px] [background:linear-gradient(180deg,_rgba(93,_52,_214,_0),_rgba(93,_52,_214,_0.25)),_rgba(0,_0,_0,_0.1)] border-gray-400 border-solid border-[1.5px] flex items-center justify-between py-3 sm:py-4 lg:py-[18px] px-4 sm:px-5 lg:px-6 gap-3 sm:gap-5">
                  <div className="flex flex-col items-start gap-1 sm:gap-3 flex-1 min-w-0">
                    <div className="text-sm sm:text-base tracking-num--0_02 leading-normal sm:leading-num-24 opacity-num-0_75">
                      Receive
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-[38px] tracking-num--0_01 leading-tight sm:leading-9 font-semibold font-roobert-trial truncate w-full text-start">
                      {toAmount}
                    </div>
                    <div className="text-sm sm:text-base tracking-num--0_02 leading-normal sm:leading-num-24 opacity-num-0_75">
                      $
                      {toAmount
                        ? (Number(toAmount) * toToken.price).toFixed(2)
                        : '0'}
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-left flex-shrink-0">
                    <button
                      onClick={handleTokenClick}
                      className="h-10 sm:h-[38px] shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-full bg-blueviolet-600 border-blueviolet-300 border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-center py-2 px-3 gap-2 sm:gap-[8.4px] hover:bg-blueviolet-500 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5 sm:gap-[7px]">
                        {toToken.symbol === 'USDT' ? (
                          <div className="h-5 w-5 sm:h-num-18 sm:w-[18px] rounded-full bg-seagreen flex items-center justify-center">
                            <Image
                              src={toToken.icon}
                              className="h-5 w-5 sm:h-num-18 sm:w-[18px] rounded-[13.3px]"
                              width={18}
                              height={18}
                              sizes="(max-width: 640px) 20px, 18px"
                              alt={`${toToken.name} Logo`}
                            />
                          </div>
                        ) : (
                          <Image
                            src={toToken.icon}
                            className="h-5 w-5 sm:h-num-18 sm:w-[18px] rounded-[13.3px]"
                            width={18}
                            height={18}
                            sizes="(max-width: 640px) 20px, 18px"
                            alt={`${toToken.name} Logo`}
                          />
                        )}
                        <div className="text-sm sm:text-base tracking-num--0_02 leading-normal sm:leading-num-26 font-semibold">
                          {toToken.symbol}
                        </div>
                      </div>
                      <Image
                        src="/dashboard/IconArrowDown.svg"
                        className="h-5 w-5 sm:h-num-18 sm:w-[18px] object-contain opacity-num-0_8"
                        width={18}
                        height={18}
                        sizes="(max-width: 640px) 20px, 18px"
                        alt="Arrow Down"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Private Mode Enabled */}
              {isPrivateMode && (
                <div className="w-full relative flex items-start justify-between gap-5 text-center text-[13px] text-white font-inter animate-fadeIn transition-all duration-500 ease-in-out">
                  <div className="rounded-[30px] [background:linear-gradient(180deg,_rgba(93,_52,_214,_0),_rgba(93,_52,_214,_0.25)),_rgba(0,_0,_0,_0.1)] border-gray-400 border-solid border-[1.5px] overflow-hidden flex items-center py-2 px-3">
                    <div className="flex items-center gap-[5px]">
                      <Image
                        src="/dashboard/IconShield.svg"
                        className="h-[13.5px] w-[13.5px] relative"
                        width={13.5}
                        height={13.5}
                        sizes="100vw"
                        alt=""
                      />
                      <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
                        Private Mode Enabled
                      </div>
                    </div>
                  </div>
                  <CountdownTimer initialMinutes={1} />
                </div>
              )}

              {/* Divider */}
              <Image
                src="/dashboard/Divider.svg"
                className="w-full max-w-full overflow-hidden max-h-full py-2"
                width={505}
                height={1.5}
                sizes="100vw"
                alt="Divider"
              />

              {/* Recipient Address Field */}
              <div
                className={`w-full rounded-full border-solid border-[1px] box-border overflow-hidden flex items-center justify-between py-2 sm:py-2.5 px-3 sm:px-4 lg:px-[18px] gap-3 sm:gap-5 ${
                  isRecipientFocused
                    ? 'shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.25)_inset] bg-blueviolet-600 border-blueviolet-300'
                    : 'shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] bg-blueviolet-500 border-gray-1000'
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-2.5 flex-1 min-w-0">
                  <Image
                    src="/dashboard/IconCoins.svg"
                    className="h-5 w-5 sm:h-num-18 sm:w-[18px] opacity-num-0_75 flex-shrink-0"
                    width={18}
                    height={18}
                    sizes="(max-width: 640px) 20px, 18px"
                    alt="Coins Icon"
                  />
                  <input
                    type="text"
                    value={recipientAddress}
                    onChange={e => setRecipientAddress(e.target.value)}
                    onFocus={() => setIsRecipientFocused(true)}
                    onBlur={() => setIsRecipientFocused(false)}
                    placeholder="Enter Recipient Address"
                    className="bg-transparent border-none outline-none text-white placeholder:text-white placeholder:opacity-50 text-sm sm:text-base tracking-num--0_02 leading-normal sm:leading-num-24 font-medium w-full"
                  />
                </div>
                <button
                  type="button"
                  onClick={handlePasteRecipient}
                  className="rounded-full [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.1))] border-gray-700 border-solid border-[1px] overflow-hidden flex items-center justify-center py-2 px-3 min-h-[36px] cursor-pointer hover:bg-blueviolet-600 hover:border-blueviolet-300 transition-all duration-300 ease-out"
                >
                  <div className="flex items-center gap-1 sm:gap-[3px]">
                    <Image
                      src="/dashboard/IconClipboard.svg"
                      className="h-3 w-3"
                      width={12}
                      height={12}
                      sizes="12px"
                      alt="Clipboard Icon"
                    />
                    <div className="text-xs sm:text-sm md:text-[14px] tracking-num--0_02 leading-tight sm:leading-[14px] font-medium">
                      Paste
                    </div>
                  </div>
                </button>
              </div>

              {/* Swap Button */}
              <button
                className="w-full h-12 sm:h-14 lg:h-[57px] shadow-[0px_0px_10px_5px_rgba(93,_52,_214,_0.5)_inset] rounded-full border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-center py-2 sm:py-[10.5px] px-4 sm:px-[27.3px] transition-all duration-400 ease-out hover:shadow-[0px_0px_15px_8px_rgba(93,_52,_214,_0.6)_inset] cursor-pointer bg-blueviolet-400 border-blueviolet-300"
              >
                <div className="text-base sm:text-lg lg:text-[20px] tracking-num--0_02 leading-normal sm:leading-[39px] font-semibold">
                  Initiate Swap
                </div>
              </button>
            </div>

            {/* Swap Info Panel */}
            <div className="backdrop-blur-sm w-full rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] [background:linear-gradient(180deg,_rgba(93,_52,_214,_0.1),_rgba(93,_52,_214,_0)),_rgba(255,_255,_255,_0.03)] border-gray-700 border-solid border-[1px] box-border overflow-hidden transition-all duration-300">
              {/* Main info section */}
              <button
                onClick={() => setShowGasDetails(!showGasDetails)}
                className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 gap-3 sm:gap-5 text-center cursor-pointer"
              >
                <div className="text-sm sm:text-base tracking-num--0_02 leading-normal sm:leading-num-24 font-medium opacity-num-0_8">
                  {isSwapped
                    ? `1 ${USDT_TOKEN.symbol} = ${(USDT_TOKEN.price / ETH_TOKEN.price).toFixed(6)} ${ETH_TOKEN.symbol}`
                    : `1 ${ETH_TOKEN.symbol} = ${(ETH_TOKEN.price / USDT_TOKEN.price).toFixed(2)} ${USDT_TOKEN.symbol}`}
                </div>
                <div className="flex items-center gap-1 sm:gap-[5px] opacity-num-0_8">
                  <Image
                    hidden={showGasDetails}
                    src="/dashboard/IconGas.svg"
                    className="h-5 w-5 sm:h-num-18 sm:w-[18px]"
                    width={18}
                    height={18}
                    sizes="(max-width: 640px) 20px, 18px"
                    alt="Gas Icon"
                  />
                  <div
                    hidden={showGasDetails}
                    className="text-sm sm:text-base tracking-num--0_02 leading-normal sm:leading-num-24 font-medium"
                  >
                    {fromAmount
                      ? (
                          (Number(fromAmount) * fromToken.price * 0.25) /
                          100
                        ).toFixed(2)
                      : '0.00'}
                  </div>
                  <Image
                    src="/dashboard/IconArrowDown.svg"
                    className={`h-5 w-5 sm:h-num-18 sm:w-[18px] object-contain transition-transform duration-200 ${
                      showGasDetails ? 'rotate-180' : ''
                    }`}
                    width={18}
                    height={18}
                    sizes="(max-width: 640px) 20px, 18px"
                    alt="Arrow Down"
                  />
                </div>
              </button>

              {/* Gas Details Content - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  showGasDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
                  <div className="flex flex-col items-start gap-3 mt-0">
                    {/* Fee Details */}
                    <div className="flex flex-col items-start gap-2 w-full">
                      <div className="w-full flex items-center justify-between gap-5">
                        <div className="relative tracking-num--0_02 leading-num-24 font-medium opacity-num-0_8 text-sm sm:text-base">
                          Fee (0.25%)
                        </div>
                        <div className="flex items-center gap-[5px] opacity-num-0_8">
                          <Image
                            src="/dashboard/IconGas.svg"
                            className="h-[18px] w-[18px] relative"
                            width={18}
                            height={18}
                            sizes="100vw"
                            alt="Fee icon"
                          />
                          <div className="relative tracking-num--0_02 leading-num-24 font-medium text-sm sm:text-base">
                            {fromAmount
                              ? (
                                  (Number(fromAmount) *
                                    fromToken.price *
                                    0.25) /
                                  100
                                ).toFixed(2)
                              : '0.00'}
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between gap-5">
                        <div className="relative tracking-num--0_02 leading-num-24 font-medium opacity-num-0_8 text-sm sm:text-base">
                          Network Cost
                        </div>
                        <div className="flex items-center gap-[5px] opacity-num-0_8">
                          <Image
                            src="/dashboard/eth.svg"
                            className="h-[18px] w-[18px] relative rounded-[13.3px]"
                            width={18}
                            height={18}
                            sizes="100vw"
                            alt="ETH icon"
                          />
                          <div className="relative tracking-num--0_02 leading-num-24 font-medium text-sm sm:text-base">
                            N/A
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between gap-5">
                        <div className="relative tracking-num--0_02 leading-num-24 font-medium opacity-num-0_8 text-sm sm:text-base">
                          Order routing
                        </div>
                        <div className="flex items-center opacity-num-0_8">
                          <div className="relative tracking-num--0_02 leading-num-24 font-medium text-sm sm:text-base">
                            Cogpiece - Standard
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between gap-5">
                        <div className="relative tracking-num--0_02 leading-num-24 font-medium opacity-num-0_8 text-sm sm:text-base">
                          Price impact
                        </div>
                        <div className="flex items-center opacity-num-0_8">
                          <div className="relative tracking-num--0_02 leading-num-24 font-medium text-sm sm:text-base">
                            -0.09%
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between gap-5">
                        <div className="relative tracking-num--0_02 leading-num-24 font-medium opacity-num-0_8 text-sm sm:text-base">
                          Max slippage
                        </div>
                        <div className="flex items-center gap-[5px] opacity-num-0_8">
                          <Image
                            src="/dashboard/IconFilterCircle.svg"
                            className="h-5 w-5 relative"
                            width={20}
                            height={20}
                            sizes="100vw"
                            alt="Settings icon"
                          />
                          <div className="relative tracking-num--0_02 leading-num-24 font-medium text-sm sm:text-base">
                            0.5%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings Dropdown */}
            {showSettings && <SwapSettingsDropdown />}

            {/* Select Token Popup */}
            {showTokenPopup && (
              <TokenSelectionPopup onClose={handleCloseTokenPopup} />
            )}

            {/* Show Network Dropdown */}
            {showNetworkDropdown && <NetworkDropdown />}
          </div>
        </section>
      </main>
      {!isPlaceHolderMode && <Footer />}
    </div>
  );
}
