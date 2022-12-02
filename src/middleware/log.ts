import { Request, Response } from "express";
import logger from "../util/logger";

export default (req: Request, res: Response, next) => {
    logger.debug(`${req.method} ${req.url}`)
    return next();
};
