import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { db } from "../../../firebase"
import { auth } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const Adopt = (props) => {

  var user = auth.currentUser;
  const myquery = query(collection(db, "animals"), where("for", "==", "Adoção"));
  const [petsForAdoption, setPetsForAdoption] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPetsForAdoption() {
      const petslist = [];
      const petssnapshot = await getDocs(myquery);
      petssnapshot.forEach((doc) => {
          petslist.push({...doc.data(), 
            key: doc.id,});
      })
      setPetsForAdoption(petslist);
      setLoading(false);
    }
    
    useEffect(() => {
      getPetsForAdoption();
  }, []);
  
  if (loading){
    return <ActivityIndicator></ActivityIndicator>
  }
  
  return (
    <View style={styles.container}>

      <FlatList
        
        data={petsForAdoption}
        keyExtractor = {(item) => item.key}
        renderItem={( {item} ) => (
            <View style={ styles.container }>
               <TouchableOpacity style={styles.card}>
                 <Text style={styles.cardTitle}> {item.name}</Text>
                <Image 
                  style={styles.cardImage}
                  source={require("../../../assets/cat.jpeg")}>
                 </Image>
                 <Text style={styles.cardText}> {item.isMale ? "Macho" : "Femea"} {"          "} {item.Age.isAdult ? "Adulto" : item.Age.isOld ? "Velho" : "Jovem"} {"          "} {item.size.isBig ? "Grande" : item.size.isMedium ? "Médio" : "Pequeno"} </Text>
                 <Text style={styles.cardText}> Endereço </Text>
               </TouchableOpacity>
            </View>
        )}
      />
     
    </View>
  );
}
