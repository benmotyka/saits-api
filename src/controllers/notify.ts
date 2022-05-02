import { Request, Response } from "express";
import { sendEmailToSaits } from "../services/notify";

export const saitsContactForm = async (
  req: Request,
  res: Response
) => {
  try {
    const {sender, subject, message} = req.body;

    if (!sender || !subject || !message) throw new Error('invalid-details')

    await sendEmailToSaits({
        subject: 'Email z formularza kontaktowego na stronie saits.prz.edu.pl',
        html: `Adresat: ${sender} <br> Temat: ${subject} <br> Wiadomość: ${message}`
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

    await sendEmailToSaits({
        subject: 'Email z formularza kontaktowego na stronie keepitsecure.prz.edu.pl',
        html: `Adresat: ${senderName} (${senderEmail}) <br> Temat: ${subject} <br> Wiadomość: ${message}`
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

    await sendEmailToSaits({
        subject: 'Powiadomienie o dołączeniu do newslettera na stronie keepitsecure.prz.edu.pl',
        html: `Odwiedzający: ${email} chciałby dołączyć do newslettera i otrzymywać powiadomienia o kolejnych wydarzeniach`
    })
    return res.json("ok");
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
};
