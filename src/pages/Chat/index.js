import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { auth, db } from "../../../firebase";
import {
  collection,
  query,
  where, 
  addDoc,
  updateDoc,
  onSnapshot,
  doc,
  getDoc,
  orderBy
} from "firebase/firestore";
import { sendMessageNotification } from '../../services/notifications';

export const Chat = (props) => {

  const user = auth.currentUser
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState({})
  const [deviceId, setDeviceId] = useState("")
  const [notificationStack, setNotificationStack] = useState([]);
  const [actNot, setActNot] = useState(true);

  useEffect(()=>{
    if(user && user.uid) {
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef).then((docSnap)=>{
        setUserData(docSnap.data())
      })
    }
    getDoc(doc(db, "chats", props.route.params.chatId)).then((chat)=>{
      if (user.uid === chat.data().user1) {
        getDoc(doc(db, "users", chat.data().user2)).then((resp)=>{
          setDeviceId(resp.data().deviceId)
        })
      } else {
        getDoc(doc(db, "users", chat.data().user1)).then((resp)=>{
          setDeviceId(resp.data().deviceId)
        })
      }
    })
  },[user])

  useEffect(() => {
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


  useEffect(()=>{
    console.log("opa", deviceId, userData.name, notificationStack)
    if(deviceId !== "" && userData.name !== undefined && notificationStack.length>0){
    notificationStack.forEach(text => {
      console.log('mensagem', text)
      sendMessageNotification(userData.name, text, props.route.params.chatId, deviceId )
    })
    setNotificationStack([])
  }
  }, [deviceId, actNot, userData, notificationStack])

  const onSend = useCallback(async (messages = []) => {
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
    }).then(value => {
      updateDoc(doc(db, "chats", props.route.params.chatId), {
        lastMessage: value.id,
      }).catch(e => console.log('error', e))
      setNotificationStack(old=>[...old, text])
      setActNot(!actNot)
    })
    
  }, [])




  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: user.uid,
        name: userData.name,
      }}
    />
  )
}