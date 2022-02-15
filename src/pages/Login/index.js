import React, { useState } from "react"
import {View, TextInput} from "react-native"
import EntrarButton from "../../components/Login/entrarButton";
import FacebookButton from "../../components/Login/facebookButton";
import GoogleButton from "../../components/Login/googleButton";
import styles from "./styles"

export const Login = (props) => {
    
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
        
        <TextInput
            autoCorrect={false}
            value={userName}
            onChangeText={(username) => setUserName(userName)}
            underlineColorAndroid='transparent'
            placeholder={'Nome de usuário'}
            style={styles.input}
        />
        <TextInput
            value={password}
            onChangeText={(password) => setPassword(password)}
            placeholder={'Senha'}
            secureTextEntry={true}
            style={styles.input}
        />
        <EntrarButton text='ENTRAR'/>
        <FacebookButton text='ENTRAR COM FACEBOOK'/>
        <GoogleButton text='ENTRAR COM GOOGLE'/>
        </View>
    );
}
