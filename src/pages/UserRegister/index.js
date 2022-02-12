import React, { useState } from "react"
import { View, StyleSheet, TextInput, Text, ScrollView, TouchableOpacity } from "react-native"
import EntrarButton from "../../components/Login/entrarButton";
import {PlusIcon} from '../../../assets/icons/plus'

export const UserRegisterScreen = (props) => {

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
        <TouchableOpacity style={styles.buttonBox}>
          <Text style={styles.buttonText}>FAZER CADASTRO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 16,
    paddingBottom: 24,
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#cfe9e5',
    height: 80,
    width: '100%',
    borderRadius: 4,
    marginTop: 16,
  },
  contentBox: {
    flex: 1,
    marginLeft: 12,
  },
  infoText: {
    textAlign: "center",
    fontSize: 14,
    color: '#434343',
  },
  title: {
    textAlign: "left",
    fontSize: 14,
    color: '#88c9bf',
    marginTop: 28,
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 44,
    borderWidth: 1,
    color: '#bdbdbd',
    borderColor: '#e6e7e8',
    marginBottom: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginBottom: 36,
  },
  buttonBox: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#88c9bf',
    height: 40,
    width: 232,
    marginTop: 32,
    marginBottom: 48,
    elevation: 5,
    shadowColor: 'black',
    alignSelf: 'center',
    borderRadius: 2,
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    color: '#434343',
  },
  photoContainer: {
    flex: 1,
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e7e7',
    borderRadius: 2,
    width: 128,
    height: 128,
    elevation: 5,
    shadowColor: 'black',
  },
  photoText: {
    fontSize: 12,
    color: '#757575',
  }
});
