import { Router } from 'express';
import { googleAuth, googleRedirect } from 'services/kapustaApi';
import tryCatchWrapper from '../helpers/try-catch-wrapper';

const router = Router();

router.get('/google', tryCatchWrapper(googleAuth));

router.get('/google-redirect', tryCatchWrapper(googleRedirect));

module.exports = router;
