import { body } from "express-validator";


export const createUserValidator  = [
    body('name')
    .exists()
    .withMessage('name is required')
    .isString()
    .withMessage('name must be a string'),

    body('email')
    .exists()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email must be a valid email'),
    
    body('age')
    .exists()
    .withMessage('age is required')
    .isNumeric()
    .withMessage('age must be a number'),

]


export const updateUserValidator = [
    
]
export const updateSessionValidator = [
  
];