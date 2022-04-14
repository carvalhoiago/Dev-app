import React from "react"
import {View, Text, Image, TouchableOpacity} from "react-native"
import styles from "./styles"

import { signOut } from "firebase/auth"
import { auth, db } from "../../../firebase";
import { doc, setDoc, updateDoc } from 'firebase/firestore'

import FlatButton from "../../components/InitialScreen/button";

export const MyChats = (props) => {

    return(
        <View style={styles.container}>
          <Text>Meus chats</Text>
        </View>
    );
}
