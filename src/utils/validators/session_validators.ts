import { body } from "express-validator";


export const createSessionValidator  = [
    body('name')
    .exists()
    .withMessage('name is required')
    .isString()
    .withMessage('name must be a string'),

    body('level')
    .exists()
    .withMessage('level is required')
    .isNumeric()
    .withMessage('level must be a valid number'),

]


