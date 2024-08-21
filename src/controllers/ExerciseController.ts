import { Request, Response } from 'express';
import Exercise from '../entities/ExerciseModel';

export const createExercise = async (req: Request, res: Response): Promise<Response> => {
    try {
        const exercise = new Exercise(req.body);
        const savedExercise = await exercise.save();
        return res.status(201).json(savedExercise);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating exercise', error });
    }
};

export const getExercises = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const exercises = await Exercise.find();
        return res.status(200).json(exercises);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving exercises', error });
    }
};

export const getExercise = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const exercise = await Exercise.findById(id);
        if (!exercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        return res.status(200).json(exercise);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving exercise', error });
    }
};

export const updateExercise = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const updatedExercise = await Exercise.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedExercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        return res.status(200).json(updatedExercise);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating exercise', error });
    }
};

export const deleteExercise = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const deletedExercise = await Exercise.findByIdAndDelete(id);
        if (!deletedExercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        return res.status(200).json({ message: 'Exercise deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting exercise', error });
    }
};
