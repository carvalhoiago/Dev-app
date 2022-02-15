import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FlatButton from "../../components/InitialScreen/button";

export default function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá!</Text>
      <Text style={styles.subTittle}>
        Bem vindo ao Meau!{"\n"} Aqui você pode adotar, doar e ajudar {"\n"}{" "}
        cães e gatos com facilidade.{"\n"} Qual seu interesse?
      </Text>
      <FlatButton text="ADOTAR" />
      <FlatButton text="AJUDAR" />
      <FlatButton
        onPress={() => navigation.navigate("Cadastro do Animal")}
        text="CADASTRAR ANIMAL"
      />
      <FlatButton
        onPress={() => navigation.navigate("CadastroPessoal")}
        text="CADASTRO PESSOAL"
      />
      <Text style={styles.login} onPress={() => navigation.navigate("Login")}>
        login
      </Text>
      <Image
        source={require("../../../assets/Meau_marca_2.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    alignItems: "center",
  },

  title: {
    paddingLeft: 12,
    fontSize: 72,
    marginTop: 56,
    textAlign: "center",
    fontFamily: "Courgette_400Regular",
    color: "#ffd358",
  },
  subTittle: {
    marginTop: 8,
    marginBottom: 48,
    textAlign: "center",
    fontSize: 16,
    color: "#757575",
  },
  login: {
    marginTop: 48,
    marginBottom: 48,
    textAlign: "center",
    fontSize: 50,
    color: "#88c9bf",
  },
  logo: {
    marginTop: 68,
    marginBottom: 32,
    width: 122,
    height: 44,
  },
});
