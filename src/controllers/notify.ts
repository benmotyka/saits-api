import { Request, Response } from "express";

export const notifySaitsContactMail = async (req: Request<{}>, res: Response) => {
    try {
        return 'sent'
    } catch (error) {
        console.log(error)
        return res.status(500).json('Something-went-wrong');
    }
}