import { Request, Response } from "express";
import { verify } from "hcaptcha";

export default async (req: Request, res: Response, next) => {
  const token = req.body.captcha;
  const { success } = await verify(process.env.HCAPTCHA_SECRET, token);
  if (success) {
    return next();
  } else {
    return res.status(403).json("wrong-captcha");
  }
};
