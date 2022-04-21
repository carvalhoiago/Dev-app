import React, { useEffect, useState } from "react"
import {View, Text, Image, TouchableOpacity} from "react-native"
import styles from "./styles"

import { signOut } from "firebase/auth"
import { auth, db } from "../../../firebase";
import { doc, setDoc, updateDoc, getDoc, query, collection, where, getDocs, collectionGroup,addDoc } from 'firebase/firestore'
import {sendRejectAdoptNotification, sendAceptAdoptNotification} from '../../services/notifications'

import FlatButton from "../../components/InitialScreen/button";

export const AdoptRequest = (props) => {

    var user = auth.currentUser;

    const id = props.route.params.id;
    
    const [requestData, setRequestData] = useState({})
    const [requestDeviceId, setRequestDeviceId] = useState('')
    const [chatId, setChatId] = useState('')
    const [foundChat, setFoundChat] = useState(false)

    useEffect(()=>{
        console.log('id passado pelo deep link ', id)
        const docRef = doc(db, "adoptionrequests", id);
        getDoc(docRef).then((docSnap)=>{
            setRequestData(docSnap.data())
            const docRef2 = doc(db, "users", docSnap.data().adopterId);
            getDoc(docRef2).then((docSnap)=>{
                setRequestDeviceId(docSnap.data().deviceId || '')
            })
        })
    },[id])

    const rejectRequest = async () => {
        await updateDoc(doc(db, "adoptionrequests", id), {
            status: 'rejected',
        }).then(()=>{
            if (requestDeviceId !== '')
                sendRejectAdoptNotification(requestData.animalName || '', requestDeviceId)
            else
                console.log("Dispositivo nao encontrado")
            props.navigation.navigate("Home")
        })
    }

    const aceptRequest = async () => {
        await updateDoc(doc(db, "animals", requestData.animalId), {
            ownerUid: requestData.adopterId,
            for: ''
        }).then(async ()=>{
            await updateDoc(doc(db, "adoptionrequests", id), {
                status: 'acepted',
            }).then(()=>{
                if (requestDeviceId !== '')
                    sendAceptAdoptNotification(requestData.animalName || '', requestDeviceId)
                else
                    console.log("Dispositivo nao encontrado")
                props.navigation.navigate("Home")
            })
        })
    }

    const openChat = () => {
        const query1 = query(
            collection(db, 'chats'), 
            where('user1', '==', requestData.adopterId),
            where('user2', '==', requestData.ownerUid)
        );
        
        getDocs(query1).then(querySnapshot1 =>
        {
            querySnapshot1.forEach((doc) => {
                setFoundChat(true)
                setChatId(doc.id)
                console.log(doc.id)
            });
            if (!foundChat) {
                const query2 = query(
                    collection(db, 'chats'), 
                    where('user2', '==', requestData.adopterId),
                    where('user1', '==', requestData.ownerUid)
                );
                getDocs(query2).then(querySnapshot2 =>
                {
                    querySnapshot2.forEach((doc) => {
                        setFoundChat(true)
                        setChatId(doc.id)
                        console.log(doc.id)
                    });
                })
            }
        })
        console.log(foundChat)

        if (!foundChat) {
            addDoc(collection(db, "chats"), {
                user1: requestData.adopterId,
                user2: requestData.ownerUid,
                lastMessage: null,
              }).then(async value => {
                setChatId(value.id)
              }).catch(e => console.log(e))
        }

        console.log('id do chat', chatId)

        if (chatId !== null)
            props.navigation.navigate("Chat", 
                {
                    requestData : requestData, 
                    chatId : chatId, 
                    userName: requestData.adopterName, 
                    userId: requestData.adopterId
                } 
            )

    }

    return(
        <View style={styles.container}>
           <Text style={styles.title}>Solicitação de adoçao para o pet {requestData.animalName}</Text>
           <Text style={styles.subTittle}>
               O usuário {requestData.adopterName} quer adotar o pet {requestData.animalName}.
           </Text>
           <Text style={styles.subTittle}>
               Escolha uma das opções: aceitar a colicitação, rejeitar a solicitação ou conversar com o pretendente.
           </Text>
           {requestData.status === 'open' ?
           <>
           <FlatButton
            onPress={aceptRequest}
            text="Aceitar"
            />
            <FlatButton
                onPress={rejectRequest}
                text="Rejeitar"
            />
            <FlatButton
                onPress={() => openChat()}
                text="Chat"
            />
            </>
            :
            <Text style={styles.subTittle}>
               Solicitação já finalizada.
           </Text>
           }
        </View>
    );
}
