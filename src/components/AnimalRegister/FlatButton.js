import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const FlatButton = ({ text, onPress, isSelected = false }) => {
  const buttonColor = isSelected ? "#ffd358" : "#f0f0f0";
  const buttonColorText = isSelected ? "#434343" : "#c0c0c0";

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style(buttonColor, buttonColorText).container}>
        <Text style={style(buttonColor, buttonColorText).buttonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatButton;

const style = (buttonColor, buttonColorText) =>
  StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 2,
      marginBottom: 12,
      backgroundColor: buttonColor,
      width: 110,
      height: 50,
      shadowColor: "black",
      shadowOpacity: 1,
      elevation: 10,
      shadowRadius: 15,
      shadowOffset: { width: 1, height: 13 },
    },
    buttonText: {
      color: buttonColorText,
      fontWeight: "bold",
      fontSize: 12,
      fontFamily: "Roboto",
      textAlign: "center",
    },
  });
