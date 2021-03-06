import express from 'express';
import { middlewareLogger } from './middleware/logger';
import { usersRouter } from './routes/users';
import { sequelize } from './database';
import { conversationsRouter } from './routes/conversations';
import { messagesRouter } from './routes/messages';
import cors from 'cors';

//async always returns a promise
const run = async() => {
  const app = express();


  /*each middleware takes 3 params
  1. req
  2. res
  3. next - moves to next middleware in the pipeline
  */

  try {
  // await works only inside async functions.
  // Await makes promise wait and returns the result once promise has been resolved
    await sequelize.authenticate();
    await sequelize.sync(); // sync changes to DB right from the model
  } catch(err) {
    console.log('Failed to connect to DB');
    console.log(err);
  }

  app.use(cors());
  // use middleware logger for all requests
  app.use(middlewareLogger);
  app.use(express.json());
  // defining a new pipe
  app.use('/users', usersRouter);
  app.use('/conversations', conversationsRouter);
  app.use('/messages', messagesRouter);

  app.listen(9999);
  console.log('API running on localhost:9999');

};

run();
