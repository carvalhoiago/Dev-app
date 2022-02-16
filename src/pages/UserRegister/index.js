import React, { useState } from "react"
import { View, TextInput, Text, ScrollView, TouchableOpacity } from "react-native"
import {PlusIcon} from '../../../assets/icons/plus'
import styles from "./styles"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../firebase"

export const UserRegister = (props) => {

  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(value => {
      console.log('usuario cadastrado com sucesso!\n' + value.user.email);
    })
    .catch(error => console.log(error));
  };

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
          onChangeText={(age) => setAge(parseInt(age))}
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
          value={adress}
          onChangeText={(adress) => setAdress(adress)}
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
          <TouchableOpacity style={styles.photoBox}>
            <PlusIcon />
            <Text style={styles.photoText}>Adicionar foto</Text>
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
