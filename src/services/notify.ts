import { createTransport } from "nodemailer";
import { Options as SMTPOptions } from "nodemailer/lib/smtp-transport";
import * as dotenv from "dotenv";
dotenv.config();

const createTransporter = () => {
  try {
    return createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
        ssl: true,
      },
      logger: true,
    } as SMTPOptions);
  } catch (error) {
    console.log(error.message);
  }
};

const transporter = createTransporter();

export const sendEmailToSaits = async ({
  subject,
  message,
}: {
  subject: string;
  message: string;
}) => {
  try {
    return await transporter.sendMail({
      subject,
      text: message,
      to: process.env.SAITS_EMAIL,
      from: process.env.SAITS_EMAIL,
    });
  } catch (error) {
    console.log(error.message);
  }
};
