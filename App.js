import { StyleSheet, View } from 'react-native';
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette';  
import AppLoading from 'expo-app-loading';
import InitialScreen from './src/components/InitialScreen';

export default function App() {

  let[fontsLoaded, error] = useFonts({
    Courgette_400Regular, 
  });

  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <InitialScreen></InitialScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
    alignItems:'center'
  },
});
