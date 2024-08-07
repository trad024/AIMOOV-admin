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
    .isInt()
    .withMessage('level must be a number')
    .isIn([1,2,3])
    .withMessage('level must be one of "1","2", or "3"'),

    body('duration')
        .exists()
        .withMessage('duration is required')
        .isNumeric()
        .withMessage('duration must be a number'),

    body('thumbnail')
        .exists()
        .withMessage('thumbnail is required')
        .isString()
        .withMessage('thumbnail must be a string')
]


