import React, {useState} from "react"
import {View, Text, StyleSheet, Image} from "react-native"
import EntrarButton from "../../components/Login/entrarButton";
import FacebookButton from "../../components/Login/facebookButton";
import GoogleButton from "../../components/Login/googleButton";

export default function InitialScreen(){
    return(
        <View style={styles.container}>
           <Text style={styles.username}>Nome de usuário</Text>
           <Text style={styles.password}>Senha</Text>
           <EntrarButton text='ENTRAR'/>
           <FacebookButton text='ENTRAR COM FACEBOOK'/>
           <GoogleButton text='ENTRAR COM GOOGLE'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    username: {
        fontSize: 14,
        color: '#bdbdbd',
        marginTop: 64,
        marginBottom: 28
    },
    password: {
        fontSize: 14,
        color: '#bdbdbd',
    },
  });
  