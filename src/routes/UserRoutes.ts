

import express from 'express';
import { createUser, getUser, getUsers } from '../controllers/UserController';
import { createUserValidator } from '../utils/validators/user_validators';

const router = express.Router();

router.post('/', createUserValidator  ,createUser)
router.get('/', getUsers )
router.get('/:id', getUser )


export default router