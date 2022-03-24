import { StyleSheet } from "react-native";
import { useFonts, Courgette_400Regular } from "@expo-google-fonts/courgette";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./src/pages/Home";
import { InitialScreen } from "./src/pages/InitialScreen";
import { Login } from "./src/pages/Login";
import { UserRegister } from "./src/pages/UserRegister";
import { AnimalRegister } from "./src/pages/AnimalRegister";
import { MyPets } from "./src/pages/MyPets";
import { MyPetsDetails } from "./src/pages/MyPetsDetails";
import { Adopt } from "./src/pages/Adopt";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Courgette_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="InitialScreen"
          component={InitialScreen}
        />
        <Stack.Screen name="CadastroPessoal" component={UserRegister} />
        <Stack.Screen
          name="UserRegister"
          options={{
            title: "Registro Pessoal",
          }}
          component={UserRegister}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="AnimalRegister"
          options={{
            title: "Cadastro do Animal",
          }}
          component={AnimalRegister}
        />
        <Stack.Screen
          name="MyPets"
          options={{
            title: "Meus Pets",
          }}
          component={MyPets}
        />
         <Stack.Screen
          name="MyPetsDetails"
          options={({ route }) => ({ title: route.params.animal.name })}
          component={MyPetsDetails}
        />
        <Stack.Screen
          name="Adopt"
          options={{
            title: "Adotar",
          }}
          component={Adopt}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    paddingTop: 0,
    marginTop: 50,
  },
});
