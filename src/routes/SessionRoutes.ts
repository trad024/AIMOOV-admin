import express from 'express';
import { createSession, getSessions ,getSession} from '../controllers/SessionController';
import { createSessionValidator } from '../utils/validators/session_validators';

const router = express.Router();

router.post('/', createSessionValidator , createSession);
router.get('/', getSessions);
router.get('/:id', getSession);
export default router;

//MedCharaabi