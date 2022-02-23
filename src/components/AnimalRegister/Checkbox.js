import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "expo-checkbox";

export const Checkbox = (props) => {
  return (
    <View style={styles.checkbox}>
      <CheckBox
        style={styles.checkboxBox}
        value={props.value}
        onValueChange={props.onChange}
        color={props.value ? "#f7a800" : undefined}
        disabled={props.isDisabled ? true : false}
      />
      <Text style={styles.checkboxText}>{props.name}</Text>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 25,
    color: "#757575",
  },
  checkboxBox: {
    marginRight: 7,
    marginTop: 20,
  },
  checkboxText: {
    color: "#757575",
    fontSize: 14,
    marginTop: 20,
  },
});
