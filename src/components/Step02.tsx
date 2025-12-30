import Image from 'next/image';

export default function Step02() {
  return (
    <div className="w-full h-[868px] flex flex-col rounded-2xl bg-whitesmoke-100 border-whitesmoke-200 border-solid border-[1px] box-border overflow-hidden text-center text-[42px] text-darkslategray font-geist">
      {/* Header: Logo */}
      <header className="flex items-center justify-center pt-6">
        <Image
          src="/step/logo.png"
          className="w-24 h-[30px] object-cover"
          width={96}
          height={30}
          sizes="100vw"
          alt="Logo"
        />
      </header>

      {/* Main Content Section */}
      <main className="flex-1 flex items-center justify-center w-full px-4">
        <section className="flex flex-col items-center justify-between gap-5 w-full max-w-[640px]">
          {/* Question and Buttons */}
          <div className="flex flex-col items-center gap-8">
            <h1 className="w-full tracking-[-0.07em] leading-[48px] font-medium">
              Want a Predictable Way to Scale Your Business & MRR?
            </h1>
            <div className="flex items-start gap-4 text-base text-white font-inter">
              <button className="w-[350px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2.5 px-5 gap-2.5 cursor-pointer">
                <span className="tracking-[-0.03em] leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  ✅
                </span>
                <span className="tracking-[-0.03em] leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  Yes, I want to scale
                </span>
              </button>
              <button className="w-[350px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2.5 px-5 gap-2.5">
                <span className="tracking-[-0.03em] leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  ❌
                </span>
                <span className="tracking-[-0.03em] leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  No, we&apos;re fine at this stage
                </span>
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <footer className="flex items-center gap-[7.7px]">
            <div className="h-2.5 w-[29.2px] shadow-[0px_1.538461446762085px_0.77px_rgba(0,_0,_0,_0.35),_0px_4.615384101867676px_7.69px_rgba(0,_0,_0,_0.3),_0px_1.153846025466919px_0.77px_rgba(255,_255,_255,_0.97)_inset] rounded-[12.31px] [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border" />
            <div className="h-2.5 w-2.5 shadow-[0px_1.538461446762085px_0.77px_rgba(0,_0,_0,_0.35),_0px_4.615384101867676px_7.69px_rgba(0,_0,_0,_0.3),_0px_1.153846025466919px_0.77px_rgba(255,_255,_255,_0.97)_inset] rounded-num-50 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border opacity-[0.25]" />
            <div className="h-2.5 w-2.5 shadow-[0px_1.538461446762085px_0.77px_rgba(0,_0,_0,_0.35),_0px_4.615384101867676px_7.69px_rgba(0,_0,_0,_0.3),_0px_1.153846025466919px_0.77px_rgba(255,_255,_255,_0.97)_inset] rounded-num-50 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border opacity-[0.25]" />
            <div className="h-2.5 w-2.5 shadow-[0px_1.538461446762085px_0.77px_rgba(0,_0,_0,_0.35),_0px_4.615384101867676px_7.69px_rgba(0,_0,_0,_0.3),_0px_1.153846025466919px_0.77px_rgba(255,_255,_255,_0.97)_inset] rounded-num-50 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border opacity-[0.25]" />
            <div className="h-2.5 w-2.5 shadow-[0px_1.538461446762085px_0.77px_rgba(0,_0,_0,_0.35),_0px_4.615384101867676px_7.69px_rgba(0,_0,_0,_0.3),_0px_1.153846025466919px_0.77px_rgba(255,_255,_255,_0.97)_inset] rounded-num-50 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border opacity-[0.25]" />
            <div className="h-2.5 w-2.5 shadow-[0px_1.538461446762085px_0.77px_rgba(0,_0,_0,_0.35),_0px_4.615384101867676px_7.69px_rgba(0,_0,_0,_0.3),_0px_1.153846025466919px_0.77px_rgba(255,_255,_255,_0.97)_inset] rounded-num-50 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border opacity-[0.25]" />
            <div className="h-2.5 w-2.5 shadow-[0px_1.538461446762085px_0.77px_rgba(0,_0,_0,_0.35),_0px_4.615384101867676px_7.69px_rgba(0,_0,_0,_0.3),_0px_1.153846025466919px_0.77px_rgba(255,_255,_255,_0.97)_inset] rounded-num-50 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border opacity-[0.25]" />
            <div className="h-2.5 w-2.5 shadow-[0px_1.538461446762085px_0.77px_rgba(0,_0,_0,_0.35),_0px_4.615384101867676px_7.69px_rgba(0,_0,_0,_0.3),_0px_1.153846025466919px_0.77px_rgba(255,_255,_255,_0.97)_inset] rounded-num-50 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border opacity-[0.25]" />
            <div className="h-2.5 w-2.5 shadow-[0px_1.538461446762085px_0.77px_rgba(0,_0,_0,_0.35),_0px_4.615384101867676px_7.69px_rgba(0,_0,_0,_0.3),_0px_1.153846025466919px_0.77px_rgba(255,_255,_255,_0.97)_inset] rounded-num-50 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border opacity-[0.25]" />
            <div className="h-2.5 w-2.5 shadow-[0px_1.538461446762085px_0.77px_rgba(0,_0,_0,_0.35),_0px_4.615384101867676px_7.69px_rgba(0,_0,_0,_0.3),_0px_1.153846025466919px_0.77px_rgba(255,_255,_255,_0.97)_inset] rounded-num-50 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[0.8px] box-border opacity-[0.25]" />
          </footer>
        </section>
      </main>
    </div>
  );
}
