import './conversation.page.scss';
import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { api } from '../../lib/API';
import { Conversation, Message } from '../../lib/types';
import { useParams } from 'react-router';
import { CreateConversation } from './CreateConversation';
import { SendMessage } from './SendMessage';

interface Params {
  conversationID: string;
}

export const ConversationPage = () => {
  const params = useParams<Params>();

  const [conversation, updateConversation] = useState<Conversation>();
  const [messages, updateMessages] = useState<Message[]>([]);

  // Whenever the `params.conversationID` changes, check to see if we are creating new convo
  const isNew = useMemo(
    () => params.conversationID === 'new', // Returns boolean
    [params.conversationID]
  );

  const renderInitialData = async() => {
    if (isNew) return; // Stop loading conversation if on New Conversation page
    const conversation = await api.getConversation("7256dd69-44cd-4263-bd5e-32256c34d7c3");
    const messages = await api.getMessages("7256dd69-44cd-4263-bd5e-32256c34d7c3");
    updateConversation(conversation);
    updateMessages(messages);
  };

  useEffect(
    () => { renderInitialData(); }, // watch values for changes
    [params.conversationID] // Update every time the URL param is changed (Sidebar)
  );
  if (!conversation && !isNew) return <span>Loading...</span>;

  return <main className="conversation">
    <Sidebar />
    {isNew
      // If creating new convo, display form
      ? <CreateConversation />
      // Otherwise display conversation as normal
      : <>
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
        </>
    }
    </main>;
};
