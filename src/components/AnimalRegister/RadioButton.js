import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const RadioButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={style.container}>
        <View style={style.buttonContainer}>
          {props.selected ? <View style={style.isSelected} /> : null}
        </View>
        <Text style={style.radioButtonText}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingRight: 30,
  },
  buttonContainer: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#757575",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },
  isSelected: {
    height: 18,
    width: 18,
    borderRadius: 20,
    backgroundColor: "#f7a800",
  },
  radioButtonText: {
    color: "#757575",
  },
});
