import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e5e5',
        alignItems:'center'
    },
    logo: {
        marginTop: 68,
        marginBottom: 32,
        width: 122,
        height: 44
    },
    card: {
        backgroundColor: "#fff",
        marginBottom: 10,
        marginTop: 16,
        marginLeft: '2%',
        width: '95%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    cardImage: {
        width: 340,
        height: 183,
        resizeMode: 'cover'
    },
    cardTitle: {
        fontSize: 16,
        padding: 7,
        backgroundColor: '#c5f1fa'
    },
    cardText: {
        fontSize: 16,
        padding: 1,
        textAlign: 'center'
    }
  });
  
export default styles