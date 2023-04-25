import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";

import { db } from "../../firebase/db";

export const ChatMessagesList = () => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "chatmessages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];

      querySnapshot.forEach((doc) => {
        messages.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      setChatMessages(messages);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(chatMessages);

  return (
    <ul>
      {chatMessages.map((chat) => {
        return <li key={chat.id}>{chat.msg}</li>;
      })}
    </ul>
  );
};
