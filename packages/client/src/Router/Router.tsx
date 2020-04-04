import React from 'react';
import { Router , Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/Home.page';
import { history } from './history';
import { ConversationPage } from '../pages/Conversation/Conversation.page';

export const AppRouter = () => {
  return <Router history = {history}>
    <Switch>
        <Route path="/" exact component = {HomePage} />
        <Route path="/conv/:conversationID" exact component={ConversationPage} />
    </Switch>
  </Router>;
}