import React from "react";
import { View, Text, Image } from "react-native";
import FlatButton from "../../components/InitialScreen/button";
import styles from "./styles";

export const InitialScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá!</Text>
      <Text style={styles.subTittle}>
        Bem vindo ao Meau!{"\n"} Aqui você pode adotar, doar e ajudar {"\n"}{" "}
        cães e gatos com facilidade.{"\n"} Qual seu interesse?
      </Text>
      <FlatButton 
        onPress={() => props.navigation.navigate("Adopt")}
        text="ADOTAR" 
      />
      <FlatButton text="AJUDAR" />
      <FlatButton
        onPress={() => props.navigation.navigate("UserRegister")}
        text="CADASTRO PESSOAL"
      />
      <Text
        style={styles.login}
        onPress={() => props.navigation.navigate("Login")}
      >
        login
      </Text>
      <Image
        source={require("../../../assets/Meau_marca_2.png")}
        style={styles.logo}
      />
    </View>
  );
}
