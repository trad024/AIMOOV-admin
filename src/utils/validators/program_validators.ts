import { body } from "express-validator";

export const createProgramValidator = [
    body('description')
        .optional()
        .isString()
        .withMessage('description must be a string'),

    body('level')
        .exists()
        .withMessage('level is required')
        .isNumeric()
        .withMessage('level must be a number'),

    body('name')
        .exists()
        .withMessage('name is required')
        .isString()
        .withMessage('name must be a string'),

    body('type')
        .exists()
        .withMessage('type is required')
        .isString()
        .withMessage('type must be a string'),

    body('duration')
        .exists()
        .withMessage('duration is required')
        .isNumeric()
        .withMessage('duration must be a number'),

    body('frequency')
        .optional()
        .isNumeric()
        .withMessage('frequency must be a number'),

    body('is_public')
        .optional()
        .isBoolean()
        .withMessage('is_public must be a boolean'),
];

export const updateProgramValidator = [
];
