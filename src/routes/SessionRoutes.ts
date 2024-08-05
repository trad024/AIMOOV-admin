import express from 'express';
import { createSession, getSessions } from '../controllers/SessionController';
import { createSessionValidator } from '../utils/validators/session_validators';

const router = express.Router();

router.post('/', createSessionValidator , createSession);
router.get('/', getSessions);

export default router;

//MedCharaabi