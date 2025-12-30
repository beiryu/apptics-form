import Image from 'next/image';
import ProgressIndicators from './ProgressIndicators';

interface Step05Props {
  onNext?: () => void;
}

export default function Step05({ onNext }: Step05Props) {
  return (
    <div className="relative w-full h-screen flex flex-col rounded-num-16 bg-whitesmoke-100 border-whitesmoke-200 border-solid border-[1px] box-border overflow-hidden text-center text-[42px] text-darkslategray font-geist">
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
      <main className="absolute top-40 left-0 right-0 flex items-center justify-center w-full px-4">
        <section className="flex flex-col items-center justify-between gap-5 w-full max-w-4xl">
          {/* Question and Options */}
          <div className="flex flex-col items-center gap-8">
            {/* Question Header */}
            <div className="flex flex-col items-center gap-2.5">
              <h1 className="w-full tracking-[-0.07em] leading-[48px] font-medium">
                What&apos;s your current monthly revenue?
              </h1>
              <p className="w-full text-base tracking-[-0.02em] leading-4 font-inter text-slategray">
                (select only one)
              </p>
            </div>

            {/* Options Grid */}
            <div className="flex flex-col items-center justify-center text-left text-num-15 text-white font-inter">
              <div className="flex flex-col items-center justify-center gap-4">
                {/* First Row */}
                <div className="flex items-start gap-4">
                  <button className="w-[220px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-num-20 gap-[15px] cursor-pointer">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.7497 43.7502C21.0509 43.7502 22.9163 41.8848 22.9163 39.5835H27.083C27.083 41.8848 28.9484 43.7502 31.2497 43.7502H35.4163C37.7176 43.7502 39.583 41.8848 39.583 39.5835V35.1862C40.2695 34.4848 40.8868 33.7146 41.4228 32.8862C42.1422 33.1748 42.9274 33.3335 43.7476 33.3335C47.1993 33.3335 49.9976 30.5354 49.9976 27.0835C49.9976 25.9485 49.693 24.8783 49.1601 23.9571C48.584 22.961 47.3095 22.6206 46.3136 23.1969C45.3176 23.7729 44.9772 25.0475 45.5534 26.0433C45.7295 26.3477 45.8309 26.7006 45.8309 27.0835C45.8309 28.2342 44.898 29.1669 43.7476 29.1669C43.5449 29.1669 43.3501 29.1383 43.1663 29.0852C43.5457 27.7904 43.7497 26.4198 43.7497 25.0002C43.7497 16.9453 37.2211 10.4169 29.1663 10.4169H20.8507C20.5807 10.0708 20.2312 9.67383 19.7911 9.26485C18.5607 8.12129 16.647 6.90868 13.8778 6.44501C11.2304 6.00179 9.37467 8.23635 9.37467 10.4168V14.7575C8.29338 15.9246 7.51978 17.2637 6.92422 18.6148H6.24967C3.94849 18.6148 2.08301 20.4803 2.08301 22.7815V29.1669C2.08301 31.4681 3.94849 33.3335 6.24967 33.3335H7.18324C8.08511 34.6492 9.10549 35.6652 10.4163 36.5646V39.5835C10.4163 41.8848 12.2818 43.7502 14.583 43.7502H18.7497ZM17.1872 25.0002C18.6254 25.0002 19.7913 23.8342 19.7913 22.396C19.7913 20.9577 18.6254 19.7918 17.1872 19.7918C15.7489 19.7918 14.583 20.9577 14.583 22.396C14.583 23.8342 15.7489 25.0002 17.1872 25.0002Z"
                        fill="#47DA12"
                      />
                    </svg>

                    <div className="tracking-num--0_03 leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                      Under $50K monthly
                    </div>
                  </button>
                  <button className="w-[220px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-num-20 gap-[15px] cursor-pointer">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.0816 10.5407C19.7479 11.6157 12.5003 19.5448 12.5003 29.1667C12.5003 30.9581 12.7516 32.691 13.2208 34.3319C7.90853 32.1533 4.16699 26.9304 4.16699 20.8333C4.16699 12.7792 10.6962 6.25 18.7503 6.25C22.7872 6.25 26.4412 7.89029 29.0816 10.5407Z"
                        fill="#47DA12"
                      />
                      <path
                        d="M45.8337 29.1667C45.8337 37.2208 39.3045 43.75 31.2503 43.75C23.1962 43.75 16.667 37.2208 16.667 29.1667C16.667 21.1125 23.1962 14.5833 31.2503 14.5833C39.3045 14.5833 45.8337 21.1125 45.8337 29.1667Z"
                        fill="#47DA12"
                      />
                    </svg>

                    <div className="whitespace-nowrap tracking-num--0_03 leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                      $50K - $150K monthly
                    </div>
                  </button>
                  <button className="w-[220px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-num-20 gap-[15px] cursor-pointer">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M41.6663 11.4583V15.625H41.6328C41.4616 16.9451 40.6574 17.9833 39.7811 18.7233C38.783 19.5661 37.4622 20.2312 36.0124 20.749C33.0947 21.791 29.2009 22.3958 24.9997 22.3958C20.7984 22.3958 16.9047 21.791 13.987 20.749C12.5372 20.2312 11.2164 19.5661 10.2183 18.7233C9.34201 17.9833 8.53776 16.9451 8.36649 15.625H8.33301V11.4583C8.33301 9.88814 9.22984 8.67387 10.2183 7.83922C11.2164 6.99643 12.5372 6.33128 13.987 5.81351C16.9047 4.77149 20.7984 4.16666 24.9997 4.16666C29.2009 4.16666 33.0947 4.77149 36.0124 5.81351C37.4622 6.33128 38.783 6.99643 39.7811 7.83922C40.7695 8.67387 41.6663 9.88814 41.6663 11.4583ZM12.9064 11.0228C12.6464 11.2424 12.548 11.3892 12.5129 11.4583C12.548 11.5275 12.6464 11.6743 12.9064 11.8939C13.3842 12.2973 14.1991 12.7545 15.3884 13.1792C17.7488 14.0222 21.1468 14.5833 24.9997 14.5833C28.8526 14.5833 32.2505 14.0222 34.6109 13.1792C35.8003 12.7545 36.6151 12.2973 37.093 11.8939C37.353 11.6743 37.4513 11.5275 37.4866 11.4583C37.4513 11.3892 37.353 11.2424 37.093 11.0228C36.6151 10.6194 35.8003 10.1622 34.6109 9.73743C32.2505 8.89443 28.8526 8.33332 24.9997 8.33332C21.1468 8.33332 17.7488 8.89443 15.3884 9.73743C14.1991 10.1622 13.3842 10.6194 12.9064 11.0228Z"
                        fill="#47DA12"
                      />
                      <path
                        d="M41.6663 23.0496C40.3303 24.0002 38.8322 24.6871 37.4138 25.1938C33.9388 26.4348 29.5493 27.0833 24.9997 27.0833C20.4502 27.0833 16.0606 26.4348 12.5856 25.1938C11.1672 24.6871 9.66905 24.0002 8.33301 23.0496V27.0833C8.33301 28.6535 9.22984 29.8677 10.2183 30.7025C11.2164 31.5452 12.5372 32.2104 13.987 32.7281C16.9047 33.7702 20.7984 34.375 24.9997 34.375C29.2009 34.375 33.0947 33.7702 36.0124 32.7281C37.4622 32.2104 38.783 31.5452 39.7811 30.7025C40.7695 29.8677 41.6663 28.6535 41.6663 27.0833V23.0496Z"
                        fill="#47DA12"
                      />
                      <path
                        d="M8.33301 38.5417V34.5079C9.66905 35.4586 11.1672 36.1454 12.5856 36.6521C16.0606 37.8931 20.4502 38.5417 24.9997 38.5417C29.5493 38.5417 33.9388 37.8931 37.4138 36.6521C38.8322 36.1454 40.3303 35.4586 41.6663 34.5079V38.5417C41.6663 40.1119 40.7695 41.3261 39.7811 42.1608C38.783 43.0036 37.4622 43.6688 36.0124 44.1865C33.0947 45.2286 29.2009 45.8334 24.9997 45.8334C20.7984 45.8334 16.9047 45.2286 13.987 44.1865C12.5372 43.6688 11.2164 43.0036 10.2183 42.1608C9.22984 41.3261 8.33301 40.1119 8.33301 38.5417Z"
                        fill="#47DA12"
                      />
                    </svg>

                    <div className="tracking-num--0_03 leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] shrink-0">
                      $150K - $500K monthly
                    </div>
                  </button>
                </div>
                {/* Second Row */}
                <div className="flex items-start gap-4">
                  <button className="w-[220px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-num-20 gap-[15px] cursor-pointer">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.125 17.7083C3.125 13.106 6.85596 9.375 11.4583 9.375H38.5417C43.144 9.375 46.875 13.106 46.875 17.7083V32.2917C46.875 36.894 43.144 40.625 38.5417 40.625H11.4583C6.85596 40.625 3.125 36.894 3.125 32.2917V17.7083ZM11.4583 36.4583H12.5C12.5 33.5819 10.1681 31.25 7.29167 31.25V32.2917C7.29167 34.5929 9.15715 36.4583 11.4583 36.4583ZM42.7083 32.2917V31.25C39.8319 31.25 37.5 33.5819 37.5 36.4583H38.5417C40.8429 36.4583 42.7083 34.5929 42.7083 32.2917ZM42.7083 18.75C39.8319 18.75 37.5 16.4181 37.5 13.5417H38.5417C40.8429 13.5417 42.7083 15.4071 42.7083 17.7083V18.75ZM11.4583 13.5417H12.5C12.5 16.4181 10.1681 18.75 7.29167 18.75V17.7083C7.29167 15.4071 9.15715 13.5417 11.4583 13.5417ZM25 19.7917C22.1235 19.7917 19.7917 22.1235 19.7917 25C19.7917 27.8765 22.1235 30.2083 25 30.2083C27.8765 30.2083 30.2083 27.8765 30.2083 25C30.2083 22.1235 27.8765 19.7917 25 19.7917Z"
                        fill="#47DA12"
                      />
                    </svg>

                    <div className="tracking-num--0_03 leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                      $500K - $2M monthly
                    </div>
                  </button>
                  <button
                    className="w-[220px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-num-20 gap-[15px] cursor-pointer"
                    onClick={onNext}
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.0234 39.6462C6.86302 37.8967 6.25002 35.7875 6.25 33.3333C7.18765 26.7698 11.5013 21.8944 16.1521 17.1875H34.0669C38.4177 21.8033 42.8035 26.7083 43.75 33.3333C43.75 35.7875 43.1371 37.8967 41.9767 39.6462C40.8244 41.3837 39.2142 42.6438 37.405 43.5469C33.8475 45.3225 29.2885 45.8333 25 45.8333C20.7114 45.8333 16.1524 45.3225 12.5951 43.5469C10.7858 42.6438 9.17573 41.3837 8.0234 39.6462Z"
                        fill="#47DA12"
                      />
                      <path
                        d="M32.8267 11.4849C33.8754 8.68857 32.8035 5.42026 29.9008 4.71791C28.36 4.34509 26.7248 4.16666 25.0002 4.16666C23.2756 4.16666 21.6404 4.34509 20.0996 4.71791C17.1968 5.42026 16.1251 8.68857 17.1737 11.4849L18.1299 14.0347L18.0558 14.0625H31.9446L31.8706 14.0347L32.8267 11.4849Z"
                        fill="#47DA12"
                      />
                    </svg>

                    <div className="tracking-num--0_03 leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                      $2M - $5M monthly
                    </div>
                  </button>
                  <button className="w-[220px] shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex flex-col items-center justify-center p-num-20 gap-[15px] cursor-pointer">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.133 5.9791C22.8484 3.3523 27.1576 3.3523 29.873 5.9791C30.502 6.58764 31.3765 6.87183 32.2432 6.74926C35.984 6.22016 39.4703 8.7531 40.123 12.4742C40.2743 13.3363 40.8147 14.0803 41.588 14.4905C44.9253 16.2612 46.257 20.3596 44.5978 23.7538C44.2134 24.54 44.2134 25.4598 44.5978 26.2461C46.257 29.6402 44.9253 33.7386 41.588 35.5092C40.8147 35.9194 40.2743 36.6636 40.123 37.5254C39.4703 41.2467 35.984 43.7796 32.2432 43.2504C31.3765 43.1279 30.502 43.4121 29.873 44.0206C27.1576 46.6475 22.8484 46.6475 20.133 44.0206C19.504 43.4121 18.6293 43.1279 17.7627 43.2504C14.022 43.7796 10.5357 41.2467 9.88296 37.5254C9.73173 36.6636 9.19117 35.9194 8.41805 35.5092C5.08073 33.7386 3.74909 29.6402 5.40823 26.2461C5.79261 25.4598 5.79261 24.54 5.40823 23.7538C3.74909 20.3596 5.08073 16.2612 8.41805 14.4905C9.19117 14.0803 9.73173 13.3363 9.88296 12.4742C10.5357 8.7531 14.022 6.22016 17.7627 6.74926C18.6293 6.87183 19.504 6.58764 20.133 5.9791ZM26.404 16.9014C25.8309 15.7401 24.1749 15.7401 23.6018 16.9014L22.1522 19.8389C21.9245 20.3001 21.4845 20.6197 20.9755 20.6937L17.7339 21.1648C16.4523 21.3511 15.9405 22.9258 16.8679 23.8298L19.2137 26.1165C19.5819 26.4754 19.75 26.9925 19.663 27.4994L19.1093 30.7281C18.8903 32.0046 20.2301 32.9779 21.3763 32.3752L24.2759 30.8508C24.7311 30.6117 25.2749 30.6117 25.7301 30.8508L28.6297 32.3752C29.7759 32.9779 31.1155 32.0046 30.8968 30.7281L30.343 27.4994C30.2559 26.9925 30.424 26.4754 30.7924 26.1165L33.138 23.8298C34.0655 22.9258 33.5536 21.3511 32.2722 21.1648L29.0303 20.6937C28.5213 20.6197 28.0815 20.3001 27.8538 19.8389L26.404 16.9014Z"
                        fill="#47DA12"
                      />
                    </svg>
                    <div className="tracking-num--0_03 leading-num-22 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
                      $5M - $10M+ monthly
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ProgressIndicators currentStep={5} />
    </div>
  );
}
