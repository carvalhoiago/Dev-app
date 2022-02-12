import React, { Component } from "react"
import {View, StyleSheet, TextInput} from "react-native"
import EntrarButton from "../../components/Login/entrarButton";
import FacebookButton from "../../components/Login/facebookButton";
import GoogleButton from "../../components/Login/googleButton";

export default class App extends Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
    }

    onLogin() {
        const { username, password } = this.state;
    
        Alert.alert('Credentials', `${username} + ${password}`);
    }
    
    render(){
        return(
            <View style={styles.container}>
            
            <TextInput
                autoCorrect={false}
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                underlineColorAndroid='transparent'
                placeholder={'Nome de usuário'}
                style={styles.input}
            />
            <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'Senha'}
                secureTextEntry={true}
                style={styles.input}
            />
            <EntrarButton text='ENTRAR'/>
            <FacebookButton text='ENTRAR COM FACEBOOK'/>
            <GoogleButton text='ENTRAR COM GOOGLE'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    input: {
        width: 200,
        height: 44,
        borderRadius:10,
        padding: 10,
        borderWidth: 1,
        color: '#bdbdbd',
        borderColor: '#e6e7e8',
        marginBottom: 10,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
  });
  