import { Router } from "express";
import { Message } from "../models/Message";

export const messagesRouter = Router();

//create msg
messagesRouter.post('/', async (req, res, next) => {
  try {
    const msg = new Message(req.body); // not good
    await msg.save();
    res.json(msg);
  } catch (err) {
    next(err);
  }
});

