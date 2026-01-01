import { create } from 'zustand';

export interface QuizAnswers {
  // Step 2
  step2?: string;
  // Step 3 - multiple selections
  step3?: string[];
  // Step 4
  step4?: string;
  // Step 5
  step5?: string;
  // Step 6
  step6?: string;
  // Step 7
  step7?: string;
  // Step 8
  step8?: string;
  // Step 9
  step9?: string;
  // Step 10
  step10?: string;
  // Step 11
  step11?: string;
}

interface QuizStore {
  answers: QuizAnswers;
  updateAnswer: (step: keyof QuizAnswers, value: unknown) => void;
  getFormattedAnswers: () => Array<{ question: string; answer: string }>;
}

const questions: Record<string, string> = {
  step2: 'Want a Predictable Way to Scale Your Business & MRR?',
  step3: "What's holding your growth back the most right now?",
  step4: 'What best describes your current business model?',
  step5: "What's your current monthly revenue?",
  step6: 'How much do you spend on ads each month?',
  step7:
    'Do you believe your business could scale faster with the right systems in place?',
  step8: 'What kind of help are you looking for?',
  step9:
    'Do you currently need help with payment processing or merchant accounts at all?',
  step10: 'How soon are you looking to fix your problems?',
  step11:
    'Do you want us to diagnose your problems & map out a plan for you to scale FAST for free?',
};

export const useQuizStore = create<QuizStore>((set, get) => ({
  answers: {},

  updateAnswer: (step: keyof QuizAnswers, value: unknown) => {
    set(state => ({
      answers: { ...state.answers, [step]: value },
    }));
  },

  getFormattedAnswers: (): Array<{ question: string; answer: string }> => {
    const { answers } = get();
    const formatted: Array<{ question: string; answer: string }> = [];

    Object.entries(answers).forEach(([key, value]) => {
      if (value) {
        const question = questions[key];
        if (question) {
          let answerText = '';
          if (Array.isArray(value)) {
            answerText = value.join(', ');
          } else {
            answerText = String(value);
          }
          formatted.push({ question, answer: answerText });
        }
      }
    });

    return formatted;
  },
}));
