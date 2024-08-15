import { Resend } from "resend";
import WelcomeEmail from "@/emails/Welcome";
import { EMAIL } from "@/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    await resend.emails.send({
      from: "prt15@iitbbs.ac.in",
      to: "eswarrajavarapu25@gmail.com",
      subject: "Welcome Bazaarian!",
      // react: WelcomeEmail({ name }),
      text: "Welcome to Bazaar!",
    });
    return new Response("Email sent successfully", { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new Response(error.message, { status: 500 });
  }

  // return new Response(null, { status: 200 });
}
