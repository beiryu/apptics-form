import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, contactDetails, meetingLink, quizAnswers } = body;
    console.log('Received body:', JSON.stringify(body, null, 2));
    const { name, email, contactMethod, contactInfo } = contactDetails;

    // Format the email content
    const contactDetailsContent = `
      Full Name: ${name || 'Not provided'}
      Email Address: ${email || 'Not provided'}
      Contact Method: ${contactMethod || 'Not provided'}
      Contact Information: ${contactInfo || 'Not provided'}
    `;

    const quizSection = quizAnswers
      ? quizAnswers
          .map((qa: { question: string; answer: string }) => {
            return `Q. ${qa.question}\nAnswer. ${qa.answer}`;
          })
          .join('\n\n')
      : 'No quiz answers provided';

    const emailContent = `
      CONTACT INFORMATION:
      ${contactDetailsContent}

      MEETING LINK:
      ${meetingLink || 'Not yet booked'}

      QUIZ ANSWERS:
      ${quizSection}
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!.split(','),
      subject: `${title} - New Quiz Submission`,
      text: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
