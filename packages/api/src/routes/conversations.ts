import { Router } from "express";
import { Conversation } from "../models/Conversation";

export const conversationsRouter = Router();

// get list of conversations
conversationsRouter.get('/', async(_req, res) => {

  const conversations = await Conversation.findAll();
  res.json(conversations);
});

// get single conversation
conversationsRouter.get('/:conversationID', async(req, res) => {
  const { conversationID } = req.params;
  const conversation = await Conversation.findByPk(conversationID);
  res.json(conversation);
});

// create a conversation
conversationsRouter.post('/', async(req, res, next) => {
  try {
    const conversation = new Conversation(req.body); //not good
    await conversation.save();
    res.json(conversation);
  } catch(e) {
    next(e);
  }
});

// Update conversation
conversationsRouter.patch('/:conversationID', async(req, res, next) => {
  try {
    await Conversation.update(req.body, {
      where: { id: req.params.conversationID },
      returning: true
    });
    const conversation = await Conversation.findByPk(req.params.conversationID);
    res.json(conversation);
  } catch(e) {
    next(e);
  }
});

// delete conversation
conversationsRouter.delete('/:conversationID', async(req, res, next) => {
  try {
    Conversation.destroy({
      where: { id: req.params.conversationID }
    });
    res.json({
      msg: 'Successfully deleted conversation'
    });
  } catch (e) {
    next(e);
  }
});

// Get messages associated with a conversation
conversationsRouter.get('/:conversationID/messages', async (req, res, next) => {
  const { conversationID } = req.params;
  const conversation = await Conversation.findByPk(conversationID);
  if (!conversation) {
    return next(new Error('No conversation found'));
  }
  //get msgs in one to many relationship
  const messages = await conversation.$get('messages');
  res.json(messages);
});
