import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { db } from "../../../firebase";
import {
  collection,
  query,
  where, 
  addDoc,
  onSnapshot,
  orderBy
} from "firebase/firestore";

export const Chat = (props) => {

  const [messages, setMessages] = useState([]);
  console.log('params: ', props.route.params)



  useEffect(() => {
    console.log(props.route.params.chatId)
    const query2 = query(
      collection(db, 'messages'), 
      orderBy('createdAt', 'desc'),
      where("chatId", "==", props.route.params.chatId)
  );
    const unsubscribe = onSnapshot(query2, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: {
            _id: doc.data().userId,
            name: doc.data().userName
          }
        }))
      )
    });
  }, [])

  const onSend = useCallback((messages = []) => {
    console.log("messages", messages)
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {
      _id,
      createdAt,
      text,
      user
    } = messages[0]
    addDoc(collection(db, "messages"), {
      _id,
      chatId: props.route.params.chatId,
      createdAt,
      text,
      userId: user._id,
      userName: user.name
    })
  }, [])


  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: props.route.params.userId,
        name: props.route.params.userName,
      }}
    />
  )
}