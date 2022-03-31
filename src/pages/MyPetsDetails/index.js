import React, { useState, useEffect } from "react";
import { Image, Text, ScrollView, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { db } from "../../../firebase";
import { auth } from "../../../firebase";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";
import {sendAdoptNotification} from '../../services/notifications'

export const MyPetsDetails = (props) => {
  const [userData, setUserData] = useState({})
  const [animalDeviceId, setAnimalDeviceId] = useState('')
  const user = auth.currentUser
  const animal = props.route.params.animal;

  useEffect(()=>{
    if(user && user.uid) {
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef).then((docSnap)=>{
        setUserData(docSnap.data())
      })
    }
  },[user])

  useEffect(()=>{
    const docRef = doc(db, "users", animal.ownerUid);
    getDoc(docRef).then((docSnap)=>{
      setAnimalDeviceId(docSnap.data().deviceId || '')
    })
  },[animal])
  


  
  const sex = animal.isFemale ? "Fêmea" : "Macho";
  const size = animal.size.isBig
    ? "Grande"
    : animal.size.isMedium
    ? "Médio"
    : "Pequeno";
  const age = animal.Age.isOld
    ? "Idoso"
    : animal.Age.isAdult
    ? "Adulto"
    : "Filhote";
  const isCastrated = animal.health.isCastrated ? "Sim" : "Não";
  const isWormed = animal.health.isWormed ? "Sim" : "Não";
  const isVaccinated = animal.health.isVaccinated ? "Sim" : "Não";

  console.log(animal);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={
          animal.animalImage
            ? { uri: animal.animalImage }
            : require("../../../assets/cat.jpeg")
        }
      />
      <View style={styles.infoContainer}>
        <Text style={styles.screenTitle}>{animal.name}</Text>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>sexo</Text>
          <Text style={styles.infoNormalText}>{sex}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>porte</Text>
          <Text style={styles.infoNormalText}>{size}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>idade</Text>
          <Text style={styles.infoNormalText}>{age}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>castrado</Text>
          <Text style={styles.infoNormalText}>{isCastrated}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>vermifugado</Text>
          <Text style={styles.infoNormalText}>{isWormed}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>vacinado</Text>
          <Text style={styles.infoNormalText}>{isVaccinated}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>{`mais sobre ${animal.name}`}</Text>
          <Text style={styles.infoNormalText}>{animal.aboutTheAnimal}</Text>
        </View>
      </View>
      {(user /*&& user.uid !== animal.ownerUid*/) && 
        <TouchableOpacity
          style={styles.adoptButtom}
          onPress={
            () => {
              if (animalDeviceId !== '')
                sendAdoptNotification(userData.name || '', animal.name || '', animalDeviceId)
              else
                console.log("Dispositivo nao encontrado")
            }
          }>
          <Text>PRETENDO ADOTAR</Text>
        </TouchableOpacity>
      }
    </ScrollView>
  );
};