import React, { useState } from "react"
import {View, TextInput} from "react-native"
import EntrarButton from "../../components/Login/entrarButton";
import FacebookButton from "../../components/Login/facebookButton";
import GoogleButton from "../../components/Login/googleButton";
import styles from "./styles"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import OneSignal from 'react-native-onesignal';
import { doc, setDoc, updateDoc } from 'firebase/firestore'

export const Login = (props) => {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  
    async function Login() {
        await signInWithEmailAndPassword(auth, userName, password)
        .then(value => {
          console.log('usuario logado com sucesso! ' + value.user.email);
          OneSignal.getDeviceState().then(async deviceState => {
            await updateDoc(doc(db, "users", value.user.uid), {
                deviceId: deviceState?.userId || null,
              })
          })
          props.navigation.replace('Home');
        })
        .catch(error => console.log(error));
      };

    return(
        <View style={styles.container}>
        
        
        <TextInput
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            placeholder={'Nome de usuario'}
            style={styles.input}
        />
        <TextInput
            value={password}
            onChangeText={(password) => setPassword(password)}
            placeholder={'Senha'}
            secureTextEntry={true}
            style={styles.input}
        />
        <EntrarButton onPress={() => Login()} text='ENTRAR'/>
        <FacebookButton text='ENTRAR COM FACEBOOK'/>
        <GoogleButton text='ENTRAR COM GOOGLE'/>
        </View>
    );
}
