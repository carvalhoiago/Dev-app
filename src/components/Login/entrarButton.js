import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native"

export default function EntrarButton({text, onPress}){
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
        borderRadius: 2,
        paddingVertical: 14,
        marginTop: 52,
        backgroundColor: '#88c9bf',
        width: 232,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#434343',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    }
})