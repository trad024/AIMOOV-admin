import { Request, Response } from 'express';
import Session from '../entities/SessionModel';

import { validationResult } from 'express-validator';

export const createSession = async (req: Request, res: Response) => {
    try {
         
        const result = validationResult(req);

        if (!result.isEmpty()) {
          return res.status(400).send(`${result.array()[0].msg}!`);
        }
        const session = new Session(req.body);
        const savedSession = await session.save();
        res.status(201).json(savedSession);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};

export const getSessions = async (req: Request, res: Response) => {
    try {
        const sessions = await Session.find();
        res.status(200).json(sessions);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};


export const getSession = async (req: Request, res: Response) => {
    try {
        const session = await Session.findById(req.params.id);
        if (!session) {
            return res.status(404).json({ error: 'Session not found' });
        }
        res.status(200).json(session);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};