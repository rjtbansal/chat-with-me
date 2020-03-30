import { Router } from 'express';
import { User } from '../models/User';

export const usersRouter = Router();

// get list of users
usersRouter.get('/', async(_req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// get one user
usersRouter.get('/:userID', async(req, res) => {
  const { userID } = req.params; // destructuring and grabbing userID from req.params
  const user = await User.findByPk(userID);
  res.json(user);
});

// Create a user
usersRouter.post('/', async (req, res, next) => {

  console.log(req.body);
  try {
    const person = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });
    await person.save();
    res.json(person);
  } catch (err) {
     // throwing err in next allows control to go to next middleware in pipeline
    next(err);
  }
});

// Update a user
usersRouter.patch('/:userID', async (req, res, next) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.userID },
      returning: true
    });
    const user = await User.findByPk(req.params.userID);
    res.json(user);
  } catch(err) {
    next(err);
  }
});

// Delete a user
usersRouter.delete('/:userID', async (req, res, next) => {
  try{
    User.destroy({
      where: { id: req.params.userID }
    });
    res.json({
      msg : 'user deleted'
    });

  } catch (err) {
    next(err);
  }
});
