import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
  },
  infoContainer: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 184,
    resizeMode: "cover",
    alignContent: "center",
  },
  screenTitle: {
    fontSize: 16,
    color: "#434343",
    fontWeight: "bold",
    paddingBottom: 16,
  },
  infoBlueText: {
    fontSize: 12,
    color: "#589b9b",
    paddingBottom: 8,
    textTransform: "uppercase",
  },
  infoNormalText: {
    fontSize: 14,
    color: "#757575",
    paddingBottom: 16,
  },
  textSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  adoptButtom: {
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 232,
    backgroundColor: '#fdcf58',
    borderRadius: 2,
    marginBottom: 20,
  },
  adoptButtomText: {
    fontFamily: 'Roboto Medium',
    fontSize: 12,
    color: '#434343',
  },
});

export default styles;
