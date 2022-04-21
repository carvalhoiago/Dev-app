import React, {useState, useEffect} from "react"
import {View, Text, Image, TouchableOpacity} from "react-native"
import styles from "./styles"

import { signOut } from "firebase/auth"
import { auth, db } from "../../../firebase";
import { doc, setDoc, updateDoc, getDoc, query, collection, where, getDocs, collectionGroup,addDoc } from 'firebase/firestore'

import FlatButton from "../../components/InitialScreen/button";



export const MyChats = (props) => {

  const user = auth.currentUser

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
    const query1 = query(
        collection(db, 'chats'), 
        where('user1', '==', user.uid),
    );
    
    getDocs(query1).then(querySnapshot1 =>
    {
        querySnapshot1.forEach((doc) => {
            setMyChats(old => [...old, doc.id])
        });
            const query2 = query(
                collection(db, 'chats'), 
                where('user2', '==', user.uid),
            );
            getDocs(query2).then(querySnapshot2 =>
            {
                querySnapshot2.forEach((doc) => {
                    setFoundChat(true)
                    setChatId(doc.id)
                    console.log(doc.id)
                });
            })
    })
  }

  useEffect(()=>{
    getChats()
  },[])
    return(
        <View style={styles.container}>
          {myChats.map(chat => {
            return(
              <FlatButton
                key={chat}
                onPress={()=>props.navigation.navigate("Chat", 
                {
                    chatId : chat, 
                    userName: userData.name, 
                    userId: user.uid
                } 
            )}
                text={chat}
              />
            )
          })}
        </View>
    );
}
