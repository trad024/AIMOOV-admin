import { Router } from 'express';
import {
    createExercise,
    getExercises,
    getExercise,
    updateExercise,
    deleteExercise
} from '../controllers/ExerciseController';
import { createExerciseValidator } from '../utils/validators/exercise_validators';
const router = Router();

router.post('/exercises', createExercise);
router.get('/exercises', getExercises);
router.get('/exercises/:id', getExercise);
router.put('/exercises/:id', updateExercise);
router.delete('/exercises/:id', deleteExercise);

export default router;
