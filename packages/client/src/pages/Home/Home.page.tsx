import React, { useEffect, useState } from 'react';
import { api } from '../../lib/API';
import { Conversation, Message } from '../../lib/types';

export const HomePage = () => {

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
  return <div>
          { conversation && <h1> Conversation: { conversation.name } </h1>}
          { console.log(messages) }
          <ul className="messages">
            {
              messages.map(msg =>
                <li> {msg.content} </li>
              )
            }
          </ul>
        </div>;
};

