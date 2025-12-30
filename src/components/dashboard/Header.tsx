import Image from 'next/image';
import {
  DiscordIconActive,
  DiscordIconInactive,
  TelegramIconActive,
  TelegramIconInactive,
  TwitterIconActive,
  TwitterIconInactive,
} from '../common/SvgIcon';

export default function Header() {
  return (
    <header className="flex justify-center md:justify-between items-center px-16 py-10 z-10">
      {/* Logo */}
      <div className="hidden md:flex items-center gap-16">
        {/* Navigation Links */}
        <nav className="flex items-center gap-[30px]">
          <div className="tracking-num--0_02 leading-num-24 font-medium hover:text-[#9571FF] cursor-pointer">
            Swap
          </div>
          <div className="tracking-num--0_02 leading-num-24 font-medium hover:text-[#9571FF] cursor-pointer">
            Docs
          </div>
          <div className="tracking-num--0_02 leading-num-24 font-medium hover:text-[#9571FF] cursor-pointer">
            Learn
          </div>
        </nav>
      </div>

      <Image
        src="/dashboard/Main - Dark.svg"
        className="w-[162px] h-[37.2px]"
        width={162}
        height={37.2}
        sizes="100vw"
        alt="CogPiece Logo"
      />

      {/* Social Links */}
      <div className="hidden md:flex items-center gap-3.5 text-right">
        <div className="flex items-center gap-2 ml-20">
          <div className="relative h-[34px] w-[34px] group cursor-pointer">
            <span className="absolute inset-0 transition-opacity group-hover:opacity-0">
              <TwitterIconInactive />
            </span>
            <span className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
              <TwitterIconActive />
            </span>
          </div>
          <div className="relative h-[34px] w-[34px] group cursor-pointer">
            <span className="absolute inset-0 transition-opacity group-hover:opacity-0">
              <TelegramIconInactive />
            </span>
            <span className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
              <TelegramIconActive />
            </span>
          </div>
          <div className="relative h-[34px] w-[34px] group cursor-pointer">
            <span className="absolute inset-0 transition-opacity group-hover:opacity-0">
              <DiscordIconInactive />
            </span>
            <span className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
              <DiscordIconActive />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
