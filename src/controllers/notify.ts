import { Request, Response } from "express";
import { sendTextEmail } from "../services/notify";

export const saitsContactForm = async (
  req: Request,
  res: Response
) => {
  try {
    const {senderEmail, subject, message} = req.body;

    if (!senderEmail || !subject || !message) throw new Error('invalid-details')

    await sendTextEmail({
        subject: 'Email z formularza kontaktowego na stronie saits.prz.edu.pl',
        message: `Adresat: ${senderEmail}\n\nTemat: "${subject}"\n\nWiadomość: "${message}"`,
        receiver: process.env.SAITS_EMAIL
    })

    await sendTextEmail({
      subject: 'Dziękujemy za kontakt',
      message: `Dzień dobry,\n\nTo automatycznie wygenerowana odpowiedź na Twoją wiadomość wysłaną do nas.\n\nOtrzymaliśmy ją i skontaktujemy się z Tobą tak szybko, jak to możliwe.\n\nPozdrawiamy\nKoło naukowe SAITS`,
      receiver: senderEmail
    })
    return res.json("ok");
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
};

export const kisContactForm = async (
  req: Request,
  res: Response
) => {
  try {
    const {senderEmail, senderName, subject, message} = req.body;

    if (!senderEmail || !senderName || !subject || !message) throw new Error('invalid-details')

    await sendTextEmail({
        subject: 'Email z formularza kontaktowego na stronie keepitsecure.prz.edu.pl',
        message: `Adresat: ${senderName} (${senderEmail})\n\nTemat: "${subject}"\n\nWiadomość: "${message}"`,
        receiver: process.env.SAITS_EMAIL
    })

    await sendTextEmail({
      subject: 'Dziękujemy za kontakt',
      message: `Dzień dobry,\n\nTo automatycznie wygenerowana odpowiedź na Twoją wiadomość wysłaną do nas.\n\nOtrzymaliśmy ją i skontaktujemy się z Tobą tak szybko, jak to możliwe.\n\nPozdrawiamy\nKoło naukowe SAITS`,
      receiver: senderEmail
    })

    return res.json("ok");
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
};

export const kisNewsletter = async (
  req: Request,
  res: Response
) => {
  try {
    const { email } = req.body;

    if (!email) throw new Error('invalid-details')

    await sendTextEmail({
        subject: 'Powiadomienie o dołączeniu do newslettera na stronie keepitsecure.prz.edu.pl',
        message: `Odwiedzający: ${email} chciałby dołączyć do newslettera i otrzymywać powiadomienia o kolejnych wydarzeniach`,
        receiver: process.env.SAITS_EMAIL
    })

    return res.json("ok");
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
};
