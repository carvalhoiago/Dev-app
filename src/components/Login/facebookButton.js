import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"

export default function FacebookButton({text, onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.button}>
                <Image
                source={require('../../../assets/facelogo.png')}
                style={style.logo}
           />
            <Text style={style.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        borderRadius: 2,
        flexDirection: 'row',
        paddingVertical: 14,
        marginTop: 52,
        marginBottom: 8,
        backgroundColor: '#194f7c',
        width: 232,
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    buttonText: {
        color: '#f7f7f7',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginLeft:10
    },
    logo: {
        width: 30,
        height: 30,
        marginLeft: 10
    }
})