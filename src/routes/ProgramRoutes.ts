import express from 'express';
import { createProgram, getProgram, getPrograms } from '../controllers/ProgramController';
import { createProgramValidator } from '../utils/validators/program_validators';

const router = express.Router();

router.post('/create', createProgramValidator , createProgram);
router.get('/', getPrograms);
router.get('/:id', getProgram);

export default router;
