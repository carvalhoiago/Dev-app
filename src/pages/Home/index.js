import React from "react"
import {View, Text, Image, TouchableOpacity} from "react-native"
import styles from "./styles"

import { signOut } from "firebase/auth"
import { auth, db } from "../../../firebase";
import { doc, setDoc, updateDoc } from 'firebase/firestore'

import FlatButton from "../../components/InitialScreen/button";

export const Home = (props) => {

    var user = auth.currentUser;

    async function logout(){
        await signOut(auth)
        .then(async () => {
            console.log('o usuario fez logout!');
            await updateDoc(doc(db, "users", user.uid), {
                deviceId: null,
              })
            props.navigation.replace('InitialScreen');
        })
        .catch(error => console.log(error))
    }

    return(
        <View style={styles.container}>
           <Text style={styles.title}>Olá!{"\n"} {user.email}</Text>
           <Text style={styles.subTittle}>Bem vindo ao Meau!{"\n"} Aqui você pode adotar, doar e ajudar {"\n"} cães e gatos com facilidade.{"\n"}</Text>
           <FlatButton
               onPress={() => props.navigation.navigate("AnimalRegister")}
               text="CADASTRAR ANIMAL"
           />
           <FlatButton
               onPress={() => props.navigation.navigate("MyPets")}
               text="MEUS PETS"
           />
            <FlatButton
               onPress={() => props.navigation.navigate("AdoptRequest")}
               text="SOLICITAÇÃO DE ADOÇÃO"
           />
           <TouchableOpacity 
            style={styles.buttonBox}
            onPress={() => logout()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <Image
            source={require('../../../assets/Meau_marca_2.png')}
            style={styles.logo}
        />
        </View>
    );
}
