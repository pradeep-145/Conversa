import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getRandomEmoji } from '../../utils/emojis';
import Conversation from './Conversation';

const Conversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/users', { withCredentials: true });
        const data = await res.data;
        console.log(res.data)

        if (Array.isArray(data)) {
          setConversations(data);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        console.error('Error fetching conversations:', error);
        setConversations([]);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return (
    <div className='flex py-2 flex-col overflow-auto'>
      {conversations.length > 0 && conversations.map((convo, idx) => (
        <Conversation
          key={convo._id}
          conversation={convo}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-dots mx-auto'></span> : null}
    </div>
  );
};

export default Conversations;