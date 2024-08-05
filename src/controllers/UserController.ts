
import User from '../entities/UserModel';

import { validationResult } from 'express-validator';


export const createUser = async (req: any, res: any) => {

    try {

        const result = validationResult(req);

        if (!result.isEmpty()) {
          return res.status(400).send(` ${result.array()[0].msg}!`);
        }



        const { name, email, age } = req.body;

        const user = new User({
            name,
            email,
            age
        });

        const savedUser = await user.save();

        return res.status(201).json(savedUser);

    } catch (error : any) {

        return res.status(500).send(error.message);

    }

}



export const getUsers = async (req: any, res: any) => {

    try {

        const users = await User.find();

        return res.status(200).json(users);

    } catch (error : any) {

        return res.status(500).send(error.message);

    }

}

export const getUser = async (req: any, res: any) => {

    try {

        
        const result = validationResult(req);

        if (!result.isEmpty()) {
          return res.status(400).send(`${result.array()[0].msg}!`);
        }



        const user = await User.findById(req.params.id);

        return res.status(200).json(user);

    } catch (error : any) {

        return res.status(500).send(error.message);

    }

}

