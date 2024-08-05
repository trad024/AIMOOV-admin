import express from 'express';
import { createProgram, getProgram, getPrograms } from '../controllers/ProgramController';

const router = express.Router();

router.post('/', createProgram);
router.get('/', getPrograms);
router.get('/:id', getProgram);

export default router;
