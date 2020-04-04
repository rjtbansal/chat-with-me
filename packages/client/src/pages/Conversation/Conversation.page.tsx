import './conversation.page.scss';
import React, { useEffect, useState } from 'react';
import { api } from '../../lib/API';
import {Conversation, Message} from '../../lib/types';
import { useParams } from 'react-router';
import { SendMessage } from './SendMessage';

interface Params {
  conversationID: string;
}

export const ConversationPage = () => {
  const params = useParams<Params>();

  const [conversation, updateConversation] = useState<Conversation>();
  const [messages, updateMessages] = useState<Message[]>([]);

  const renderInitialData = async() => {
    const conversation = await api.getConversation("7256dd69-44cd-4263-bd5e-32256c34d7c3");
    const messages = await api.getMessages("7256dd69-44cd-4263-bd5e-32256c34d7c3");
    updateConversation(conversation);
    updateMessages(messages);
  };

  useEffect(
    () => { renderInitialData(); }, // watch values for changes
    [] // only called on component initialization if nothing is passed
  );
  return <main className="conversation">

        <header>{conversation
          ? <>Conversation {conversation.name}</>
          : <h1>Could not find conversation</h1>
        }
        </header>

        <ul className="messages">
          {messages.map(m =>
            <li>
              <span>{m.content}</span>
            </li>
          )}
        </ul>

        <footer>
          <SendMessage
            conversationId={params.conversationID}
            onNewMessage={message => {
              updateMessages(msg => [...msg, message]);
            }}
          />
        </footer>
      </main>;
};
