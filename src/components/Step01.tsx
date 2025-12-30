import Image from 'next/image';

export default function Step01() {
  const handleScaleClick = () => {
    // TODO: Implement navigation or action handler
    console.log('Help me Scale clicked');
  };

  return (
    <div className="w-full h-[868px] flex flex-col items-center rounded-2xl bg-whitesmoke-100 border-whitesmoke-200 border-solid border-[1px] box-border overflow-hidden text-center text-sm text-dimgray font-inter">
      {/* Header: Logo */}
      <header className="flex items-center justify-center pt-6">
        <Image
          src="/hero/Logo.svg"
          className="w-24 h-[30px] object-cover"
          width={96}
          height={30}
          sizes="100vw"
          alt="Logo"
        />
      </header>

      {/* Main Content Section */}
      <main className="flex-1 flex items-center justify-center w-full max-w-[640px] px-4">
        <section className="flex flex-col items-center gap-8 w-full">
          {/* Badge */}
          <div className="shadow-[0px_4px_4px_-1px_rgba(66,_90,_108,_0.06),_0px_20px_22px_-6px_rgba(36,_40,_51,_0.04)] rounded-[14px] bg-white border-gainsboro border-solid border-[0.5px] overflow-hidden flex items-center py-2 px-4 shrink-0 font-plus-jakarta-sans">
            <div className="tracking-[-0.02em] leading-5 capitalize">
              Book a call with the team
            </div>
          </div>

          {/* Heading with Image */}
          <div className="flex items-start gap-2 shrink-0 text-left text-[88px] text-darkslategray font-geist">
            <div className="tracking-[-0.04em] leading-[80px] font-medium">
              Scale with
            </div>
            <div className="h-20 w-[292px] overflow-hidden flex items-center justify-center">
              {/* TODO: Update src with the correct image path */}
              <Image
                src="/hero/Logo.svg"
                className="h-full w-full object-cover [transform:scale(1.035)]"
                width={292}
                height={80}
                sizes="100vw"
                alt=""
              />
            </div>
          </div>

          {/* Description */}
          <div className="w-full text-xl tracking-[-0.02em] leading-6 text-slategray shrink-0">
            The Apptics team has spent the last 5 years building and scaling
            eCommerce and drop shipping brands, generating over $50 million in
            revenue.
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-3 shrink-0 text-base text-white">
            <div className="flex items-start">
              <button
                className="w-[325px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-2xl [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-center py-2.5 px-5 cursor-pointer"
                onClick={handleScaleClick}
              >
                <div className="tracking-[-0.03em] leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                  Help me Scale
                </div>
              </button>
            </div>
            <div className="text-sm tracking-[-0.02em] leading-6 text-slategray">
              Takes less than 30 seconds
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
