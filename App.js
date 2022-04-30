import { StyleSheet } from "react-native";
import { useEffect } from 'react';
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
import { AdoptRequest } from "./src/pages/AdoptRequest";
import { Chat } from "./src/pages/Chat";
import { MyChats } from "./src/pages/MyChats";
import OneSignal from 'react-native-onesignal';

import { registerRootComponent } from 'expo';

import * as Linking from 'expo-linking';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Courgette_400Regular,
  });

  useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('4289c303-3df9-4095-8792-c55f552d235b');
    //END OneSignal Init Code

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        const notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(async openedEvent => {
      console.log('OneSignal: notification opened:', openedEvent);
    });

  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const config = {
    screens: {
      AdoptRequest: 'adoptrequest/:id',
      Chat: 'chat/:chatId',
      MyPets: 'mypets',
    },
  };

  const linking = {
    prefixes: ['com.carvalhoiago.meau://'], config,
  };
  

  return (
    <NavigationContainer linking={linking}>
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
        <Stack.Screen
          name="AdoptRequest"
          options={{
            title: "Solicitação de Adoção",
          }}
          component={AdoptRequest}
        />
        <Stack.Screen
          name="Chat"
          options={{
            title: "Chat",
          }}
          component={Chat}
        />
        <Stack.Screen
          name="MyChats"
          options={{
            title: "Meus Chats",
          }}
          component={MyChats}
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

registerRootComponent(App);