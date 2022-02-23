import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "./Checkbox";

export const Sponsorship = () => {
  const [isTermOfSponsorship, setIsTermOfSponsorship] = useState(false);
  const [isFinancialAid, setIsFinancialAid] = useState(false);
  const [isVisits, setIsVisits] = useState(false);
  const [isFood, setIsFood] = useState(false);
  const [isHealth, setIsHealth] = useState(false);
  const [isObjects, setIsObjects] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>EXIGÊNCIAS PARA APADRINHAMENTO</Text>
      <Checkbox
        name="Termo de apadrinhamento"
        value={isTermOfSponsorship}
        onChange={() => setIsTermOfSponsorship(!isTermOfSponsorship)}
      />
      <Checkbox
        name="Auxílio financeiro"
        value={isFinancialAid}
        onChange={() => setIsFinancialAid(!isFinancialAid)}
      />
      <View style={styles.subOptions}>
        <Checkbox
          name="Alimentação"
          value={isFood}
          onChange={() => setIsFood(!isFood)}
          isDisabled={isFinancialAid ? false : true}
        />
        <Checkbox
          name="Saúde"
          value={isHealth}
          onChange={() => setIsHealth(!isHealth)}
          isDisabled={isFinancialAid ? false : true}
        />
        <Checkbox
          name="Objetos"
          value={isObjects}
          onChange={() => setIsObjects(!isObjects)}
          isDisabled={isFinancialAid ? false : true}
        />
      </View>
      <Checkbox
        name="Visitas ao animal"
        value={isVisits}
        onChange={() => setIsVisits(!isVisits)}
      />
    </View>
  );
};

export default Sponsorship;

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
    marginBottom: 10,
  },
  label: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "700",
    color: "#f7a800",
  },
  subOptions: {
    marginLeft: 30,
  },
});
