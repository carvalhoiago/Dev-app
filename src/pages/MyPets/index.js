import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, Image, FlatList } from "react-native";
import FlatButton from "../../components/InitialScreen/button";
import styles from "./styles";
import { db } from "../../../firebase"
import { auth } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const MyPets = (props) => {

  var user = auth.currentUser;
  const myquery = query(collection(db, "animals"), where("ownerUid", "==", user.uid));
  const [mypets, setMyPets] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMyPets() {
      const petslist = [];
      const petssnapshot = await getDocs(myquery);
      petssnapshot.forEach((doc) => {
          petslist.push({...doc.data(), 
            key: doc.id,});
      })
      console.log(mypets)
      setMyPets(petslist);
      setLoading(false);
    }
    
    useEffect(() => {
     getMyPets();
  }, []);
  
  if (loading){
    return <ActivityIndicator></ActivityIndicator>
  }
  
  return (
    <View style={styles.container}>

      <FlatList
        data={mypets}
        keyExtractor = {(item) => item.key}
        renderItem={( {item} ) => (
           <View style={ styles.container }>
            <Text>Pet Name: {item.name}</Text>
            <Text>Pet id: {item.key}</Text>
         </View>
        )}
      />

      <Image
        source={require("../../../assets/Meau_marca_2.png")}
        style={styles.logo}
      />
      
    </View>
  );
}
