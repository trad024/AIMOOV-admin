import { Request, Response } from 'express';
import Program from '../entities/ProgramModel';

export const createProgram = async (req: Request, res: Response) => {
    try {
        const { description, level, name, type, duration, seances, frequency, is_public } = req.body;

        const program = new Program({
            description,
            level,
            name,
            type,
            duration,
            seances,
            frequency,
            is_public
        });

        const savedProgram = await program.save();

        return res.status(201).json(savedProgram);
    } catch (error) {
        return res.status(500).send(error);
    }
}

export const getPrograms = async (req: Request, res: Response) => {
    try {
        const programs = await Program.find();
        return res.status(200).json(programs);
    } catch (error) {
        return res.status(500).send(error);
    }
}

export const getProgram = async (req: Request, res: Response) => {
    try {
        const program = await Program.findById(req.params.id);
        return res.status(200).json(program);
    } catch (error) {
        return res.status(500).send(error);
    }
}
