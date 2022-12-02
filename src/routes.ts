import { Router } from "express";

import {
  saitsContactForm,
  kisContactForm,
  kisNewsletter,
} from "./controllers/notify";
import captcha from "./middleware/captcha";

const router = Router();

router.get("/status", (req, res) => res.json("ok"));

// SAITS
router.post("/saits/contact", captcha, saitsContactForm);

// KIS
router.post("/kis/contact", captcha, kisContactForm);
router.post("/kis/newsletter", captcha, kisNewsletter);

export default router;
