import React, { useState, useEffect } from "react"
import {
  Alert,
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native"
import {PlusIcon} from '../../../assets/icons/plus'
import styles from "./styles"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../../firebase"
import { doc, setDoc } from 'firebase/firestore'
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getApps, initializeApp } from "firebase/app";
import uuid from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAr_TpAwfXko8O9xfuzHnit7v97h6RezgY",
  authDomain: "meau-app-5ec8e.firebaseapp.com",
  databaseURL: "gs://meau-app-5ec8e.appspot.com",
  storageBucket: "meau-app-5ec8e.appspot.com",
  messagingSenderId: "392470537422",
};


// Editing this file with fast refresh will reinitialize the app on every refresh, let's not do that
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const UserRegister = (props) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
   
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  }
  

  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(async (value) => {
      console.log(value.user)
      await setDoc(doc(db, "users", value.user.uid), {
        name: name,
        age: parseInt(age),
        state: state,
        city: city,
        address: address,
        phone: phone,
        userName: userName,
      })
      if (selectedImage !== null) {
        try {
          console.log('antes de enviar a imagem')
          uploadImageAsync(selectedImage)
        console.log('sucesso')
        } catch {
          console.log('erro ao fazer upload da imagem')
        }
        
      }
      console.log('usuario cadastrado com sucesso!\n' + value.user.email);
      Alert.alert(
        "Usuário cadastrato com sucesso",
        "Pressione OK para ir para a tela inicial",
        [
          { text: "OK", onPress: () => props.navigation.navigate('InitialScreen') }
        ]
      );
    })
    .catch(error => console.log(error));
  };

  
  async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  
    const fileRef = ref(getStorage(), uuid.v4());
    const result = await uploadBytes(fileRef, blob);
  
    // We're done with the blob, close and release it
    blob.close();

  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          As informações preenchidas serão divulgadas apenas para a pessoa 
          com a qual você realizar o processo de adoção e/ou apadrinhamento,
          após a formalização do processo
        </Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.title}>INFORMAÇÕES PESSOAIS</Text>
        <TextInput
          autoCorrect={false}
          value={name}
          onChangeText={(name) => setName(name)}
          underlineColorAndroid='transparent'
          placeholder={'Nome completo'}
          style={styles.input}
        />
        <TextInput
          autoCorrect={false}
          value={age}
          keyboardType='numeric'
          onChangeText={(age) => setAge(age)}
          underlineColorAndroid='transparent'
          placeholder={'Idade'}
          style={styles.input}
        />
        <TextInput
          autoCorrect={false}
          value={email}
          onChangeText={(email) => setEmail(email)}
          underlineColorAndroid='transparent'
          placeholder={'E-mail'}
          style={styles.input}
        />
        <TextInput
          autoCorrect={false}
          value={state}
          onChangeText={(state) => setState(state)}
          underlineColorAndroid='transparent'
          placeholder={'Estado'}
          style={styles.input}
        />
        <TextInput
          autoCorrect={false}
          value={city}
          onChangeText={(city) => setCity(city)}
          underlineColorAndroid='transparent'
          placeholder={'Cidade'}
          style={styles.input}
        />
        <TextInput
          autoCorrect={false}
          value={address}
          onChangeText={(address) => setAddress(address)}
          underlineColorAndroid='transparent'
          placeholder={'Endereço'}
          style={styles.input}
        />
        <TextInput
          autoCorrect={false}
          value={phone}
          keyboardType='numeric'
          onChangeText={(phone) => setPhone(phone)}
          underlineColorAndroid='transparent'
          placeholder={'Telefone'}
          style={{...styles.input, marginBottom: 0,}}
        />
        <Text style={styles.title}>INFORMAÇÕES DE PERFIL</Text>
        <TextInput
          autoCorrect={false}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
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
        <TextInput
          value={passwordConfirmation}
          onChangeText={(passwordConfirmation) => setPasswordConfirmation(passwordConfirmation)}
          placeholder={'Confirmação de senha'}
          secureTextEntry={true}
          style={{...styles.input, marginBottom: 0,}}
        />
        <Text style={styles.title}>FOTO DE PERFIL</Text>
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.photoBox} onPress={openImagePickerAsync}>
            {
              selectedImage !== null ? (
                <View>
                  <Image
                    source={{ uri: selectedImage.localUri }}
                    style={styles.photo}
                  />
                </View>
              ) : (
                <>
                  <PlusIcon />
                  <Text style={styles.photoText}>Adicionar foto</Text>
                </>
              )
            }  
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.buttonBox}
          onPress={() => createUser()}>
          <Text style={styles.buttonText}>FAZER CADASTRO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
