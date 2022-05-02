import { Router } from "express";

import { notifySaitsContactMail } from "./controllers/notify";

const router = Router();

// SAITS
router.post("/saits/contact-mail", notifySaitsContactMail);

// KIS
router.post("/kis/contact-mail", notifySaitsContactMail);
router.post("/kis/newsletter", notifySaitsContactMail);

export default router;
