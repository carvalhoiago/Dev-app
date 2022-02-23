import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
  options: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fafafa",
    paddingTop: 16,
  },
  optionsBox: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#e6e7e8",
  },
  nameBox: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 16,
  },
  infoText: {
    textAlign: "center",
    fontSize: 14,
    color: "#434343",
  },
  title: {
    textAlign: "left",
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputLabel: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "700",
    color: "#f7a800",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 44,
    borderWidth: 1,
    color: "#bdbdbd",
    borderColor: "#e6e7e8",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  photoWrapper: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 14,
  },
  buttonBox: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#ffd358",
    height: 40,
    width: 232,
    marginTop: 32,
    marginBottom: 48,
    elevation: 5,
    shadowColor: "black",
    alignSelf: "center",
    borderRadius: 2,
  },
  buttonText: {
    width: "100%",
    textAlign: "center",
    fontSize: 12,
    color: "#434343",
  },
  photoContainer: {
    flex: 1,
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  photoBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e7e7",
    borderRadius: 2,
    width: "100%",
    height: 150,
    elevation: 5,
    shadowColor: "black",
  },
  photoText: {
    fontSize: 12,
    color: "#757575",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fafafa",
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 20,
  },
  checkboxWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  checkboxLabel: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "700",
    color: "#f7a800",
  },
});
