import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"

export default function GoogleButton({text, onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.button}>
                <Image
                source={require('../../../assets/googlelogo.png')}
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
        backgroundColor: '#f15f5c',
        width: 232,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
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