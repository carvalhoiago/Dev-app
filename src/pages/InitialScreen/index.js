import React, {useState, useEffect} from "react";
import { View, Text, Image } from "react-native";
import FlatButton from "../../components/InitialScreen/button";
import styles from "./styles";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const InitialScreen = (props) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
  
    const listener = onAuthStateChanged(auth, async (user) => {
      setIsAuthenticated(!!user);
    });
  
    return () => {
      listener();
    };
  }, []);

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
        onPress={() => props.navigation.navigate(isAuthenticated ? "Home" : "Login")}
        >
        {isAuthenticated ? "Ir para home" : "Login"}
      </Text>
      <Image
        source={require("../../../assets/Meau_marca_2.png")}
        style={styles.logo}
      />
    </View>
  );
}
