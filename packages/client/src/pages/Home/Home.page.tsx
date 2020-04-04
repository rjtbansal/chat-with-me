import React, { useEffect, useState} from 'react';
import { api } from '../../lib/API';

export const HomePage = () => {

  const [ conversation, updateConversation ] = useState<any>();

  const renderInitialData = async() => {
    const data = await api.getConversation("7256dd69-44cd-4263-bd5e-32256c34d7c3");
    updateConversation(data);
  };

  useEffect(
    () => { renderInitialData(); }, // watch values for changes
    [] // only called on component initialization if nothing is passed
  );
  return <div>
          <h1> Conversation </h1>
          { conversation && <div> { conversation.name } </div>}
        </div>;
};

