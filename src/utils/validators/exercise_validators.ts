import { body } from "express-validator";

export const createExerciseValidator = [
    body('id_Ex')
        .exists()
        .withMessage('id_Ex is required')
        .isString()
        .withMessage('id_Ex must be a string'),
        
    body('max_score')
        .optional()
        .isNumeric()
        .withMessage('max_score must be a number')
        .isFloat({ min: 0 })
        .withMessage('max_score must be a non-negative number'),

    body('min_score')
        .optional()
        .isNumeric()
        .withMessage('min_score must be a number')
        .isFloat({ min: 0 })
        .withMessage('min_score must be a non-negative number')
        .custom((value, { req }) => {
            if (value > req.body.max_score) {
                throw new Error('min_score must be less than or equal to max_score');
            }
            return true;
        }),

    body('nv_diff')
        .optional()
        .isNumeric()
        .withMessage('nv_diff must be a number')
        .isFloat({ min: 0, max: 10 })
        .withMessage('nv_diff must be between 0 and 10'),

    body('zone_corps')
        .optional()
        .isArray()
        .withMessage('zone_corps must be an array of strings'),
        

    body('type')
        .exists()
        .withMessage('type is required')
        .isString()
        .withMessage('type must be a string'),
        

    body('avatar')
        .optional()
        .isString()
        .withMessage('avatar must be a string'),

    body('muscles')
        .optional()
        .isArray()
        .withMessage('muscles must be an array of strings'),
       

    body('group')
        .optional()
        .isString()
        .withMessage('group must be a string'),
        
];

export const updateExerciseValidator = [
];
