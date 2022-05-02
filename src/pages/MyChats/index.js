import React, {useState, useEffect} from "react"
import {View, Text, Image, TouchableOpacity} from "react-native"
import styles from "./styles"
import { useIsFocused } from "@react-navigation/native";

import { signOut } from "firebase/auth"
import { auth, db } from "../../../firebase";
import { doc, setDoc, updateDoc, getDoc, query, collection, where, getDocs, collectionGroup,addDoc } from 'firebase/firestore'

import FlatButton from "../../components/InitialScreen/button";


const ChatBox = ({chat, userId, onPress}) => {
  const [lastMessage, setLastMessage] = useState({})
  const [name, setName] = useState("")

  useEffect(()=>{
    console.log("chat", chat)
    console.log("user", userId)
    if(chat && chat.user1 && chat.user2 && chat.lastMessage && userId){
      let docRefuser = null
      if (userId === chat.user1) {
        docRefuser = doc(db, "users", chat.user1);
      } else {
        docRefuser = doc(db, "users", chat.user2);
      }
      if (docRefuser)
      getDoc(docRefuser).then((docSnap)=>{
        setName(docSnap.data().name || '')
      })
      const docRef = doc(db, "messages", chat.lastMessage);
        getDoc(docRef).then((data)=>{
          console.log('last', data.data().text)
          setLastMessage(data.data())
        })
    }
  },[chat, userId])


  return (
    <TouchableOpacity onPress={onPress} style={styles.chatBox}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.message}>{lastMessage ? ` ${lastMessage.text}` : "..."}</Text>
    </TouchableOpacity>
  )
}


export const MyChats = (props) => {

  const user = auth.currentUser
  const isFocused = useIsFocused();

  const [userData, setUserData] = useState({})
  const [myChats, setMyChats] = useState([])

  useEffect(()=>{
    if(user && user.uid) {
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef).then((docSnap)=>{
        setUserData(docSnap.data())
      })
    }
  },[user])

  const getChats = () => {
    setMyChats([])
    const query1 = query(
        collection(db, 'chats'), 
        where('user1', '==', user.uid),
    );
    
    getDocs(query1).then(querySnapshot1 =>
    {
        querySnapshot1.forEach((doc) => {
          if (doc.data().lastMessage)
            setMyChats(old => [...old, {
              id: doc.id,
              data: doc.data(),
            }])
        });
            const query2 = query(
                collection(db, 'chats'), 
                where('user2', '==', user.uid),
                where('user1', '!=', user.uid),
            );
            getDocs(query2).then(querySnapshot2 =>
            {
                querySnapshot2.forEach((doc) => {
                  if (doc.data().lastMessage)
                    setMyChats(old => [...old, {
                      id: doc.id,
                      data: doc.data(),
                    }])
                });
            })
    })
  }

  useEffect(()=>{
    if(isFocused && user && user.uid) getChats()
  },[isFocused, user])
    return(
        <View style={styles.container}>
          {myChats.map(chat => {
            return(
              <ChatBox
                key={chat.id}
                onPress={()=>props.navigation.navigate("Chat", 
                  {
                      chatId : chat.id, 
                  } 
                )}
                chat={chat.data}
                userId={user.uid}
              />
            )
          })}
        </View>
    );
}
