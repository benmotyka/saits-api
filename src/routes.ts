import { Router } from "express";

import { saitsContactForm, kisContactForm, kisNewsletter } from "./controllers/notify";

const router = Router();

router.get("/status", (req, res) => {
    return res.json('ok')
});

// SAITS
router.post("/saits/contact", saitsContactForm);

// KIS
router.post("/kis/contact", kisContactForm);
router.post("/kis/newsletter", kisNewsletter);

export default router;
