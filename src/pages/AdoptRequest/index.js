import React, { useEffect, useState } from "react"
import {View, Text, Image, TouchableOpacity} from "react-native"
import styles from "./styles"

import { signOut } from "firebase/auth"
import { auth, db } from "../../../firebase";
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore'
import {sendRejectAdoptNotification, sendAceptAdoptNotification} from '../../services/notifications'

import FlatButton from "../../components/InitialScreen/button";

export const AdoptRequest = (props) => {

    var user = auth.currentUser;

    const id = props.route.params.id;

    const [requestData, setRequestData] = useState({})
    const [requestDeviceId, setRequestDeviceId] = useState('')

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
                onPress={() => console.log('não implementado')}
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
