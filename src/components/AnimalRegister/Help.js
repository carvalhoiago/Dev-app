import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Checkbox from "./Checkbox";

export const Help = () => {
  const [isFood, setIsFood] = useState(false);
  const [isFinancialAid, setIsFinancialAid] = useState(false);
  const [isMedicine, setIsMedicine] = useState(false);
  const [isObjects, setIsObjects] = useState(false);

  const [medicinesNames, setMedicinesNames] = useState("");
  const [objectsNames, setObjectsNames] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>NECESSIDADES DO ANIMAL</Text>
      <Checkbox
        name="Alimento"
        value={isFood}
        onChange={() => setIsFood(!isFood)}
      />
      <Checkbox
        name="Auxílio financeiro"
        value={isFinancialAid}
        onChange={() => setIsFinancialAid(!isFinancialAid)}
      />
      <Checkbox
        name="Medicamento"
        value={isMedicine}
        onChange={() => setIsMedicine(!isMedicine)}
      />
      <View style={styles.inputWrapper}>
        <TextInput
          autoCorrect={false}
          value={medicinesNames}
          onChangeText={(item) => setMedicinesNames(item)}
          underlineColorAndroid="transparent"
          placeholder={"Nome do medicamento"}
          style={styles.input}
        />
      </View>
      <Checkbox
        name="Objetos"
        value={isObjects}
        onChange={() => setIsObjects(!isObjects)}
      />
      <View style={styles.inputWrapper}>
        <TextInput
          autoCorrect={false}
          value={objectsNames}
          onChangeText={(item) => setObjectsNames(item)}
          underlineColorAndroid="transparent"
          placeholder={"Especifique o(s) objeto(s)"}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fafafa",
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 10,
    marginBottom: 4,
  },
  label: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "700",
    color: "#f7a800",
  },
  inputWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fafafa",
    paddingTop: 10,
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
});
