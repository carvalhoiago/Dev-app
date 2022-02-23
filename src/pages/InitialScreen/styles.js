import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e5e5',
        alignItems:'center'
    },
    
    title: {
        paddingLeft: 12,
        fontSize: 72,
        marginTop: 56,
        textAlign: 'center',
        fontFamily:'Courgette_400Regular',
        color: '#ffd358',
    },
    subTittle: {
        marginTop: 8,
        marginBottom: 48,
        textAlign: 'center',
        fontSize: 16,
        color: '#757575'
    },
    login: {
        marginTop: 48,
        marginBottom: 48,
        textAlign: 'center',
        fontSize: 50,
        color: '#88c9bf'
    },
    logo: {
        marginTop: 68,
        marginBottom: 32,
        width: 122,
        height: 44
    }
  });
  
export default styles