import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native"

export default function FlatButton({text, onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.button}>
                <Text style={style.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        marginBottom: 12,
        backgroundColor: '#ffd358',
        width: 200,
    },
    buttonText: {
        color: '#434343',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    }
})