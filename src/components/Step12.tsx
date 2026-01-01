import { useState, useRef, useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { useQuizStore } from '@/store/quizStore';

interface Step12Props {
  onNext?: () => void;
  onStepClick?: (step: number) => void;
}

type ContactMethod = 'telegram' | 'phone';

export default function Step12({}: Step12Props) {
  const getFormattedAnswers = useQuizStore(state => state.getFormattedAnswers);

  const [contactMethod, setContactMethod] = useState<ContactMethod>('telegram');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  // Use refs to store current values for use in callbacks
  const nameRef = useRef(name);
  const emailRef = useRef(email);
  const contactMethodRef = useRef(contactMethod);
  const contactInfoRef = useRef(contactInfo);

  // Update refs when state changes
  useEffect(() => {
    nameRef.current = name;
    emailRef.current = email;
    contactMethodRef.current = contactMethod;
    contactInfoRef.current = contactInfo;
  }, [name, email, contactMethod, contactInfo]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'apptics.ai-intro-call' });
      // const cal = await getCalApi({ namespace: '15min' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#000000' },
          dark: { 'cal-brand': '#ffffff' },
        },
      });

      // Listen for booking success
      cal('on', {
        action: 'bookingSuccessful',
        callback: (e: CustomEvent) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const bookingData = (e as any).detail?.data;
          console.log(bookingData);
          const title = bookingData?.booking?.title;
          const meetingLink = bookingData?.booking?.videoCallUrl;
          // Send email with all quiz data
          sendQuizEmail(title, meetingLink);
        },
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormSubmit = () => {
    // The button with data-cal-* attributes will trigger the popup
    // Cal.com will automatically use the data-cal-config for pre-filling
  };

  // Build Cal.com config with conditional fields
  const getCalConfig = () => {
    const config: Record<string, unknown> = {
      layout: 'month_view',
      name: name,
      email: email,
    };
    if (contactInfo) {
      if (contactMethod === 'telegram') {
        config['watele'] = contactInfo;
      } else if (contactMethod === 'phone') {
        config['smsReminderNumber'] = contactInfo;
        config['aiAgentCallPhoneNumber'] = contactInfo;
      }
    }

    return config;
  };

  const sendQuizEmail = async (title: string, meetingLink: string) => {
    try {
      const quizAnswers = getFormattedAnswers();
      const response = await fetch('/api/send-quiz-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          contactDetails: {
            name: nameRef.current,
            email: emailRef.current,
            contactMethod: contactMethodRef.current,
            contactInfo: contactInfoRef.current,
          },
          meetingLink,
          quizAnswers,
        }),
      });

      if (!response.ok) {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col rounded-num-16 bg-transparent box-border overflow-hidden text-center text-[42px] text-[#292d33] font-inter">
      {/* Main Content Section */}
      <main className="flex-1 flex items-start justify-center w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 lg:pt-[200px] pb-20 sm:pb-24 md:pb-32 lg:pb-[200px] overflow-y-auto">
        <section className="flex flex-col items-center justify-center gap-6 sm:gap-8 w-full max-w-4xl">
          {/* Header Section */}
          <header className="flex flex-col items-center gap-4 sm:gap-6 w-full">
            <h1 className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] tracking-[-0.07em] leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[48px] font-medium font-geist px-2 sm:px-0">
              Book Your Scaling Call With The Apptics Team
            </h1>
            <div className="rounded-[15px] bg-transparent flex items-center justify-center py-3 sm:py-[15px] px-3 sm:px-2.5 text-sm sm:text-base text-cornflowerblue-100 font-inter w-full max-w-2xl">
              <p className="w-full tracking-[-0.02em] leading-5 sm:leading-6 font-medium">
                In a 25-minute session, we&apos;ll map your growth bottlenecks,
                identify revenue leaks, and show the exact system we use to
                scale for 7–8 figure brands.
              </p>
            </div>
          </header>

          {/* Form Section */}
          <form className="flex flex-col items-stretch gap-3 sm:gap-4 w-full max-w-md text-left text-sm sm:text-[15px]">
            {/* Name Input */}
            <div className="w-full rounded-num-16 bg-darkslategray-300 border-darkslategray-200 border-solid border-[1px] box-border overflow-hidden flex items-center py-3 px-4 gap-2.5 transition-all duration-150 ease-in-out focus-within:border-cornflowerblue-100 focus-within:shadow-[0px_0px_0px_3px_rgba(78,168,247,0.1)] focus-within:bg-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-150 ease-in-out group-focus-within:fill-cornflowerblue-100"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0003 1.66663C14.6032 1.66663 18.3337 5.3976 18.3337 9.99996C18.3337 14.6023 14.6032 18.3333 10.0003 18.3333C5.39746 18.3333 1.66699 14.6023 1.66699 9.99996C1.66699 5.3976 5.39746 1.66663 10.0003 1.66663ZM10.0003 12.5C8.00488 12.5 6.34798 13.3379 5.23796 14.6663C6.44888 15.9008 8.13519 16.6666 10.0003 16.6666C11.8655 16.6666 13.5517 15.9008 14.7627 14.6663C13.6527 13.3379 11.9957 12.5 10.0003 12.5ZM10.0003 5.62496C8.50408 5.62496 7.29199 6.83753 7.29199 8.33329C7.29199 9.82904 8.50408 11.0416 10.0003 11.0416C11.4966 11.0416 12.7087 9.82904 12.7087 8.33329C12.7087 6.83753 11.4966 5.62496 10.0003 5.62496Z"
                  fill="#292D33"
                  className="transition-colors duration-150 ease-in-out"
                />
              </svg>

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none tracking-num--0_03 leading-[22px] font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] opacity-num-0_5 text-[#292d33] placeholder:text-[#292d33] focus:opacity-100 transition-opacity duration-150 ease-in-out"
              />
            </div>

            {/* Email Input */}
            <div className="w-full rounded-num-16 bg-darkslategray-300 border-darkslategray-200 border-solid border-[1px] box-border overflow-hidden flex items-center py-3 px-4 gap-2.5 transition-all duration-150 ease-in-out focus-within:border-cornflowerblue-100 focus-within:shadow-[0px_0px_0px_3px_rgba(78,168,247,0.1)] focus-within:bg-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.78223 5.79287C2.16615 4.37577 3.46127 3.33337 4.99984 3.33337H14.9998C16.5384 3.33337 17.8335 4.37577 18.2174 5.79287L10.7452 9.52904C10.276 9.76362 9.72368 9.76362 9.25451 9.52904L1.78223 5.79287Z"
                  fill="#292D33"
                  className="transition-colors duration-150 ease-in-out"
                />
                <path
                  d="M1.66699 7.5984V13.3334C1.66699 15.1743 3.15938 16.6667 5.00033 16.6667H15.0003C16.8412 16.6667 18.3337 15.1743 18.3337 13.3334V7.59839L11.491 11.0197C10.5526 11.4889 9.44799 11.4889 8.50958 11.0197L1.66699 7.5984Z"
                  fill="#292D33"
                  className="transition-colors duration-150 ease-in-out"
                />
              </svg>

              <input
                type="email"
                placeholder="hello@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none tracking-num--0_03 leading-[22px] font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] opacity-num-0_5 text-[#292d33] placeholder:text-[#292d33] focus:opacity-100 transition-opacity duration-150 ease-in-out"
              />
            </div>

            {/* Contact Method Selection */}
            <div className="w-full rounded-num-16 bg-darkslategray-300 border-darkslategray-200 border-solid border-[1px] flex items-center p-1 sm:p-[5px] gap-2 sm:gap-2.5 text-sm text-white">
              <button
                type="button"
                onClick={() => setContactMethod('telegram')}
                className={`flex-1 rounded-xl overflow-hidden flex items-center justify-center py-1.5 px-3 sm:px-4 gap-2 sm:gap-2.5 cursor-pointer transition-all duration-150 ease-in-out active:scale-[0.98] ${
                  contactMethod === 'telegram'
                    ? 'bg-cornflowerblue-100 text-white border-gray border-solid border-[1px] hover:brightness-105'
                    : 'bg-transparent text-[#292d33] border-transparent border-solid border-[1px] hover:bg-opacity-10'
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.05399 7.11968C5.17076 5.33225 7.91527 4.15377 9.28747 3.58443C13.2101 1.95865 14.0242 1.67629 14.5559 1.66684C14.6728 1.66486 14.9331 1.69367 15.103 1.83067C15.2442 1.94612 15.2839 2.10225 15.3038 2.21177C15.3215 2.32128 15.3457 2.57087 15.3259 2.76571C15.1141 4.99117 14.1941 10.3916 13.7264 12.8843C13.5301 13.939 13.1395 14.2926 12.7623 14.3271C11.9415 14.4023 11.3194 13.787 10.5251 13.2682C9.28307 12.4561 8.58153 11.9507 7.37473 11.1585C5.98042 10.2427 6.88493 9.73942 7.6792 8.91695C7.88653 8.70168 11.5003 5.42615 11.5687 5.12905C11.5775 5.09189 11.5864 4.95335 11.5025 4.88034C11.4209 4.80711 11.2995 4.83218 11.2113 4.85197C11.0855 4.88012 9.10213 6.18812 5.2545 8.77575C4.69192 9.16148 4.1823 9.34948 3.72341 9.33962C3.22039 9.32882 2.24973 9.05548 1.5283 8.82195C0.645817 8.53541 -0.0579959 8.38388 0.00377776 7.89722C0.0346646 7.64388 0.385507 7.38462 1.05399 7.11968Z"
                    fill={contactMethod === 'telegram' ? 'white' : '#292D33'}
                    className="transition-colors duration-150 ease-in-out"
                  />
                </svg>

                <span
                  className={`tracking-num--0_03 leading-5 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] transition-opacity duration-150 ease-in-out ${
                    contactMethod === 'telegram'
                      ? 'opacity-100'
                      : 'opacity-num-0_5'
                  }`}
                >
                  Telegram
                </span>
              </button>
              <button
                type="button"
                onClick={() => setContactMethod('phone')}
                className={`flex-1 rounded-xl overflow-hidden flex items-center justify-center py-1.5 px-3 sm:px-4 gap-2 sm:gap-2.5 cursor-pointer transition-all duration-150 ease-in-out active:scale-[0.98] ${
                  contactMethod === 'phone'
                    ? 'bg-cornflowerblue-100 text-white border-gray border-solid border-[1px] hover:brightness-105'
                    : 'bg-transparent text-[#292d33] border-transparent border-solid border-[1px] hover:bg-opacity-10'
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity={contactMethod === 'phone' ? '1' : '0.5'}>
                    <path
                      d="M4.50242 2C3.15869 2 1.91034 3.12266 2.16643 4.6067C2.97839 9.31187 6.68907 13.0225 11.3942 13.8345C12.8783 14.0906 14.0009 12.8422 14.0009 11.4985C14.0009 10.3938 13.2763 9.41993 12.2182 9.10253L11.5552 8.9036C10.8916 8.70453 10.1723 8.88587 9.68233 9.3758C9.5046 9.55353 9.27613 9.56467 9.1312 9.475C8.07393 8.8208 7.18013 7.927 6.52591 6.86973C6.43623 6.7248 6.44742 6.49631 6.62513 6.31861C7.11507 5.82869 7.2964 5.10933 7.09733 4.4457L6.8984 3.7827C6.58099 2.72461 5.6071 2 4.50242 2Z"
                      fill={contactMethod === 'phone' ? 'white' : '#292D33'}
                      className="transition-colors duration-150 ease-in-out"
                    />
                  </g>
                </svg>

                <span
                  className={`tracking-num--0_03 leading-5 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] transition-opacity duration-150 ease-in-out ${
                    contactMethod === 'phone'
                      ? 'opacity-100'
                      : 'opacity-num-0_5'
                  }`}
                >
                  Phone Number
                </span>
              </button>
            </div>

            {/* Contact Info Input */}
            <div className="w-full rounded-num-16 bg-darkslategray-300 border-darkslategray-200 border-solid border-[1px] box-border overflow-hidden flex items-center py-3 px-4 gap-2.5 transition-all duration-150 ease-in-out focus-within:border-cornflowerblue-100 focus-within:shadow-[0px_0px_0px_3px_rgba(78,168,247,0.1)] focus-within:bg-white">
              {contactMethod === 'telegram' ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.31748 8.89954C6.46345 6.66525 9.89408 5.19215 11.6093 4.48047C16.5127 2.44826 17.5302 2.09531 18.1948 2.08349C18.341 2.08102 18.6664 2.11702 18.8787 2.28827C19.0552 2.43259 19.1049 2.62776 19.1297 2.76465C19.1518 2.90154 19.1822 3.21353 19.1574 3.45708C18.8927 6.23891 17.7427 12.9895 17.158 16.1053C16.9126 17.4237 16.4244 17.8657 15.9528 17.9089C14.9269 18.0029 14.1492 17.2337 13.1564 16.5852C11.6038 15.5701 10.7269 14.9384 9.21842 13.948C7.47553 12.8034 8.60617 12.1742 9.599 11.1461C9.85817 10.877 14.3753 6.78262 14.4608 6.41126C14.4719 6.3648 14.483 6.19162 14.3782 6.10037C14.2762 6.00882 14.1243 6.04017 14.0141 6.0649C13.8568 6.10009 11.3777 7.73509 6.56812 10.9696C5.8649 11.4518 5.22788 11.6868 4.65426 11.6745C4.02549 11.661 2.81216 11.3193 1.91037 11.0274C0.807272 10.6692 -0.0724949 10.4798 0.0047222 9.87146C0.0433307 9.55479 0.481883 9.23071 1.31748 8.89954Z"
                    fill="#292D33"
                    className="transition-colors duration-150 ease-in-out"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.50242 2C3.15869 2 1.91034 3.12266 2.16643 4.6067C2.97839 9.31187 6.68907 13.0225 11.3942 13.8345C12.8783 14.0906 14.0009 12.8422 14.0009 11.4985C14.0009 10.3938 13.2763 9.41993 12.2182 9.10253L11.5552 8.9036C10.8916 8.70453 10.1723 8.88587 9.68233 9.3758C9.5046 9.55353 9.27613 9.56467 9.1312 9.475C8.07393 8.8208 7.18013 7.927 6.52591 6.86973C6.43623 6.7248 6.44742 6.49631 6.62513 6.31861C7.11507 5.82869 7.2964 5.10933 7.09733 4.4457L6.8984 3.7827C6.58099 2.72461 5.6071 2 4.50242 2Z"
                    fill="#292D33"
                    className="transition-colors duration-150 ease-in-out"
                  />
                </svg>
              )}

              <input
                type={contactMethod === 'phone' ? 'tel' : 'text'}
                placeholder={
                  contactMethod === 'telegram'
                    ? '@username'
                    : '+1 (555) 123-4567'
                }
                value={contactInfo}
                onChange={e => setContactInfo(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none tracking-num--0_03 leading-[22px] font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)] opacity-num-0_5 text-[#292d33] placeholder:text-[#292d33] focus:opacity-100 transition-opacity duration-150 ease-in-out"
              />
            </div>
          </form>

          {/* CTA Button */}
          <button
            data-cal-namespace="apptics.ai-intro-call"
            data-cal-link="team/apptics/apptics.ai-intro-call"
            // data-cal-namespace="15min"
            // data-cal-link="nguyen-khanh-đinh-f2ioyc/15min"
            data-cal-config={JSON.stringify(getCalConfig())}
            onClick={handleFormSubmit}
            disabled={!name || !email || !contactInfo}
            className="w-full sm:w-[350px] min-h-[44px] h-auto sm:h-12 shadow-[0px_2px_1px_rgba(0,_0,_0,_0.35),_0px_6px_10px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] rounded-num-16 [background:linear-gradient(180deg,_#525252,_#141414)] border-black border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-2.5 px-4 sm:px-5 text-sm sm:text-base text-white cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0px_4px_2px_rgba(0,_0,_0,_0.4),_0px_8px_15px_rgba(0,_0,_0,_0.35),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] hover:brightness-105 active:scale-[0.98] active:shadow-[0px_1px_1px_rgba(0,_0,_0,_0.4),_0px_4px_8px_rgba(0,_0,_0,_0.3),_0px_1.5px_1px_rgba(255,_255,_255,_0.97)_inset] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="tracking-num--0_03 leading-6 sm:leading-7 font-medium [text-shadow:0px_1px_1.5px_rgba(0,_0,_0,_0.12)]">
              Book Scaling Call
            </span>
          </button>
        </section>
      </main>
    </div>
  );
}
