import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "./Checkbox";

export const Adoption = () => {
  const [isTermOfAdoption, setIsTermOfAdoption] = useState(false);
  const [isHousePhotos, setIsHousePhotos] = useState(false);
  const [isEarlyVisit, setIsEarlyVisit] = useState(false);
  const [isFollowUp, setIsFollowUp] = useState(false);
  const [isOneMonth, setIsOneMonth] = useState(false);
  const [isThreeMonths, setIsThreeMonths] = useState(false);
  const [isSixMonths, setIsSixMonths] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>EXIGÊNCIAS PARA ADOÇÃO</Text>
      <Checkbox
        name="Termo de adoção"
        value={isTermOfAdoption}
        onChange={() => setIsTermOfAdoption(!isTermOfAdoption)}
      />
      <Checkbox
        name="Fotos da casa"
        value={isHousePhotos}
        onChange={() => setIsHousePhotos(!isHousePhotos)}
      />
      <Checkbox
        name="Visita prévia ao animal"
        value={isEarlyVisit}
        onChange={() => setIsEarlyVisit(!isEarlyVisit)}
      />
      <Checkbox
        name="Acompanhamento pós adoção"
        value={isFollowUp}
        onChange={() => setIsFollowUp(!isFollowUp)}
      />
      <View style={styles.subOptions}>
        <Checkbox
          name="1 mês"
          value={isOneMonth}
          onChange={() => setIsOneMonth(!isOneMonth)}
          isDisabled={isFollowUp ? false : true}
        />
        <Checkbox
          name="3 meses"
          value={isThreeMonths}
          onChange={() => setIsThreeMonths(!isThreeMonths)}
          isDisabled={isFollowUp ? false : true}
        />
        <Checkbox
          name="6 meses"
          value={isSixMonths}
          onChange={() => setIsSixMonths(!isSixMonths)}
          isDisabled={isFollowUp ? false : true}
        />
      </View>
    </View>
  );
};

export default Adoption;

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
