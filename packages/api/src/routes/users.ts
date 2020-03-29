import { Router } from "express";
import { User } from "../models/User";

export const usersRouter = Router();

// get list of users
usersRouter.get('/', async(_req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// get one user
usersRouter.get('/:userID', async(req, res) => {
  const { userID } = req.params; //destructuring and grabbing userID from req.params
  const user = await User.findByPk(userID);
  res.json(user);
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