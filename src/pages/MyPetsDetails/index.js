import React from "react";
import { Image, Text, ScrollView, View } from "react-native";
import styles from "./styles";

export const MyPetsDetails = (props) => {
  const animal = props.route.params.animal;
  const sex = animal.isFemale ? "Fêmea" : "Macho";
  const size = animal.size.isBig
    ? "Grande"
    : animal.size.isMedium
    ? "Médio"
    : "Pequeno";
  const age = animal.Age.isOld
    ? "Idoso"
    : animal.Age.isAdult
    ? "Adulto"
    : "Filhote";
  const isCastrated = animal.health.isCastrated ? "Sim" : "Não";
  const isWormed = animal.health.isWormed ? "Sim" : "Não";
  const isVaccinated = animal.health.isVaccinated ? "Sim" : "Não";

  console.log(animal);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={
          animal.animalImage
            ? { uri: animal.animalImage }
            : require("../../../assets/cat.jpeg")
        }
      />
      <View style={styles.infoContainer}>
        <Text style={styles.screenTitle}>{animal.name}</Text>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>sexo</Text>
          <Text style={styles.infoNormalText}>{sex}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>porte</Text>
          <Text style={styles.infoNormalText}>{size}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>idade</Text>
          <Text style={styles.infoNormalText}>{age}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>castrado</Text>
          <Text style={styles.infoNormalText}>{isCastrated}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>vermifugado</Text>
          <Text style={styles.infoNormalText}>{isWormed}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>vacinado</Text>
          <Text style={styles.infoNormalText}>{isVaccinated}</Text>
        </View>
        <View style={styles.textSection}>
          <Text style={styles.infoBlueText}>{`mais sobre ${animal.name}`}</Text>
          <Text style={styles.infoNormalText}>{animal.aboutTheAnimal}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
