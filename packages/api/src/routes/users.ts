import { Router } from "express";

export const usersRouter = Router();

// GET list of users
usersRouter.get('/', (_req, _res, next) => {
    next();
});

// GET one user
usersRouter.get('/:userID', (_req, _res, next) => {
    next();
});

// Create a user
usersRouter.post('/', (_req, _res, next) => {
    next();
});

// Update a user
usersRouter.put('/:userID', (_req, _res, next) => {
    next();
});

// Delete a user
usersRouter.delete('/:userID', (_req, _res, next) => {
    next();
});