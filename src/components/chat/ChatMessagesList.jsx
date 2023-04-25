import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

import { db } from "../../firebase/db";
import { ChatMessage } from "./ChatMessage";

export const ChatMessagesList = ({ user }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "chatmessages"), orderBy("createdAt"));
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

  return (
    <div>
      {chatMessages.map((chat) => {
        return <ChatMessage key={chat.id} chat={chat} user={user} />;
      })}
    </div>
  );
};
