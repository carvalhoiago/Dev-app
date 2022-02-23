import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import { PlusIcon } from "../../../assets/icons/plus";

import FlatButton from "../../components/AnimalRegister/FlatButton";
import Checkbox from "../../components/AnimalRegister/Checkbox";
import RadioButton from "../../components/AnimalRegister/RadioButton";

import Adoption from "../../components/AnimalRegister/Adoption";

export const AnimalRegister = () => {
  const [adoptionButton, setAdoptionButton] = useState(true);
  const [godfatherButton, setGodfatherButton] = useState(false);
  const [helpButton, setHelpButton] = useState(false);

  const [title, setTitle] = useState("Adoção");
  const [name, setName] = useState("nome do animal");

  const [isDog, setIsDog] = useState(false);
  const [isCat, setIsCat] = useState(false);
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isBig, setIsBig] = useState(false);
  const [isYoung, setIsYoung] = useState(false);
  const [isAdult, setIsAdult] = useState(false);
  const [isOld, setIsOld] = useState(false);

  const [isPlayful, setIsPlayful] = useState(false);
  const [isShy, setIsShy] = useState(false);
  const [isCalm, setIsCalm] = useState(false);
  const [isGuard, setIsGuard] = useState(false);
  const [isLoving, setIsLoving] = useState(false);
  const [isLazy, setIsLazy] = useState(false);

  const [isVaccinated, setIsVaccinated] = useState(false);
  const [isWormed, setIsWormed] = useState(false);
  const [isCastrated, setIsCastrated] = useState(false);
  const [isSick, setIsSick] = useState(false);

  const [sickness, setSickness] = useState("Doenças do animal");
  const [options, setOptions] = useState(<Adoption />);
  const [aboutTheAnimal, setAboutTheAnimal] = useState(
    "Compartilhe a história do animal"
  );
  const [buttonTitle, setButtonTitle] = useState("COLOCAR PARA ADOÇÃO");

  const handleAdoptionButtonClick = () => {
    setAdoptionButton(true);
    setGodfatherButton(false);
    setHelpButton(false);
    setTitle("Adoção");
    setOptions(<Adoption />);
    setButtonTitle("COLOCAR PARA ADOÇÃO");
  };

  const handleGodfatherButtonClick = () => {
    setAdoptionButton(false);
    setGodfatherButton(true);
    setHelpButton(false);
    setTitle("Apadrinhar");
  };

  const handleHelpButtonClick = () => {
    setAdoptionButton(false);
    setGodfatherButton(false);
    setHelpButton(true);
    setTitle("Ajudar");
  };

  return (
    <ScrollView>
      <View style={styles.options}>
        <Text style={styles.infoText}>
          Tenho interesse em cadastrar o animal para:
        </Text>
        <View style={styles.optionsBox}>
          <FlatButton
            text="ADOÇÃO"
            isSelected={adoptionButton}
            onPress={handleAdoptionButtonClick}
          />
          <FlatButton
            text="APADRINHAR"
            isSelected={godfatherButton}
            onPress={handleGodfatherButtonClick}
          />
          <FlatButton
            text="AJUDA"
            isSelected={helpButton}
            onPress={handleHelpButtonClick}
          />
        </View>
      </View>
      <View style={styles.nameBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.inputLabel}>NOME DO ANIMAL</Text>
        <TextInput
          autoCorrect={false}
          value={name}
          onChangeText={(name) => setName(name)}
          underlineColorAndroid="transparent"
          placeholder={"Nome do animal"}
          style={styles.input}
        />
      </View>
      <View style={styles.photoWrapper}>
        <Text style={styles.inputLabel}>FOTOS DO ANIMAL</Text>
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.photoBox}>
            <PlusIcon />
            <Text style={styles.photoText}>adicionar fotos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.inputLabel}>ESPÉCIE</Text>
        <View style={styles.checkboxWrapper}>
          <RadioButton
            value="Cachorro"
            selected={isDog}
            onPress={() => setIsDog(!isDog)}
          />
          <RadioButton
            value="Gato"
            selected={isCat}
            onPress={() => setIsCat(!isCat)}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.inputLabel}>SEXO</Text>
        <View style={styles.checkboxWrapper}>
          <RadioButton
            value="Macho"
            selected={isMale}
            onPress={() => setIsMale(!isMale)}
          />
          <RadioButton
            value="Fêmea"
            selected={isFemale}
            onPress={() => setIsFemale(!isFemale)}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.inputLabel}>PORTE</Text>
        <View style={styles.checkboxWrapper}>
          <RadioButton
            value="Pequeno"
            selected={isSmall}
            onPress={() => setIsSmall(!isSmall)}
          />
          <RadioButton
            value="Médio"
            selected={isMedium}
            onPress={() => setIsMedium(!isMedium)}
          />
          <RadioButton
            value="Grande"
            selected={isBig}
            onPress={() => setIsBig(!isBig)}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.inputLabel}>IDADE</Text>
        <View style={styles.checkboxWrapper}>
          <RadioButton
            value="Filhote"
            selected={isYoung}
            onPress={() => setIsYoung(!isYoung)}
          />
          <RadioButton
            value="Adulto"
            selected={isAdult}
            onPress={() => setIsAdult(!isAdult)}
          />
          <RadioButton
            value="Idoso"
            selected={isOld}
            onPress={() => setIsOld(!isOld)}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>TEMPERAMENTO</Text>
        <View style={styles.checkboxWrapper}>
          <Checkbox
            name="Brincalhão"
            value={isPlayful}
            onChange={() => setIsPlayful(!isPlayful)}
          />
          <Checkbox
            name="Tímido"
            value={isShy}
            onChange={() => setIsShy(!isShy)}
          />
          <Checkbox
            name="Calmo"
            value={isCalm}
            onChange={() => setIsCalm(!isCalm)}
          />
          <Checkbox
            name="Guarda"
            value={isGuard}
            onChange={() => setIsGuard(!isGuard)}
          />
          <Checkbox
            name="Amoroso"
            value={isLoving}
            onChange={() => setIsLoving(!isLoving)}
          />
          <Checkbox
            name="Preguiçoso"
            value={isLazy}
            onChange={() => setIsLazy(!isLazy)}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>SAÚDE</Text>
        <View style={styles.checkboxWrapper}>
          <Checkbox
            name="Vacinado"
            value={isVaccinated}
            onChange={() => setIsVaccinated(!isVaccinated)}
          />
          <Checkbox
            name="Vermifugado"
            value={isWormed}
            onChange={() => setIsWormed(!isWormed)}
          />
          <Checkbox
            name="Castrado"
            value={isCastrated}
            onChange={() => setIsCastrated(!isCastrated)}
          />
          <Checkbox
            name="Doente"
            value={isSick}
            onChange={() => setIsSick(!isSick)}
          />
        </View>
      </View>
      <View style={styles.nameBox}>
        <TextInput
          autoCorrect={false}
          value={sickness}
          onChangeText={(item) => setSickness(item)}
          underlineColorAndroid="transparent"
          placeholder={"Doenças do animal"}
          style={styles.input}
        />
      </View>
      {options}
      <View style={styles.nameBox}>
        <Text style={styles.inputLabel}>SOBRE O ANIMAL</Text>
        <TextInput
          autoCorrect={false}
          value={aboutTheAnimal}
          onChangeText={(item) => setAboutTheAnimal(item)}
          underlineColorAndroid="transparent"
          placeholder={"Compartilhe a história do animal"}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.buttonBox}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
