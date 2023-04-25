import { getFirestore, collection, addDoc } from "firebase/firestore";

import { firebaseApp } from "./firebaseApp";

export const db = getFirestore(firebaseApp);

export const saveChatMessage = async (msg, user) => {
  await addDoc(collection(db, "chatmessages"), {
    msg,
    user,
    createdAt: new Date(Date.now()),
  });
};
