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
    .isString()
    .withMessage('level must be a string')
    .isIn(['beginner', 'back to sport', 'intermediate', 'athlete'])
    .withMessage('level must be one of "beginner", "back to sport", "intermediate", or "athlete"'),

    body('duration')
        .exists()
        .withMessage('duration is required')
        .isNumeric()
        .withMessage('duration must be a number'),

    body('thumbnail')
        .optional()
        .isString()
        .withMessage('thumbnail must be a string')
]


