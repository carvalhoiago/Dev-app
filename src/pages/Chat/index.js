import {Alert, View, Text, Image, TouchableOpacity} from "react-native"
import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { db } from "../../../firebase";
import { collection, getDocs, query, where, doc, getDoc, addDoc, onSnapshot, orderBy } from "firebase/firestore";

export const Chat = (props) => {

  const [messages, setMessages] = useState([]);
  console.log(props.route.params)

  useLayoutEffect(() => {
    const collectioRef = collection(db, 'chats')
    const q = query(collectioRef, orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data.user
        }))
      )
    });
    return () => unsubscribe();
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {
      _id,
      createdAt,
      text,
      user
    } = messages[0]
    addDoc(collection(db, "chats"), {
      _id,
      createdAt,
      text,
      user
    })
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: props.route.params.requestData.adopterId,
        name: props.route.params.requestData.adopterName,
      }}
    />
  )
}