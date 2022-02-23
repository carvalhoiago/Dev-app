import { StyleSheet } from "react-native"

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
  
export default styles