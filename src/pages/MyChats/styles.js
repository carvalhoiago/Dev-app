import { StyleSheet } from "react-native"
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e5e5',
        alignItems:'center'
    },
    chatBox: {
      width: Dimensions.get('window').width - 20,
      marginTop: 10,
      marginLeft: 5,
      borderRadius: 10,
      padding: 16,
      backgroundColor: '#ffd358'
    },
    userName: {
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 24,
      textAlign: 'left',
      textAlignVertical: 'center'
    },
    message: {
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 20,
      textAlign: 'left',
      textAlignVertical: 'center'
    }
  });
  
export default styles