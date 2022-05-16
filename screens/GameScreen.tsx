import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from 'react-native-elements';   
import Game from "../componets/Game";




const image = { uri: "https://i.pinimg.com/564x/fa/48/7d/fa487d072c17cf4053689616ddfc02b3.jpg" };

const GameScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Game/>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  buttons: {
    flex: 1,
  },
  button: {
    marginTop: 10
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default GameScreen;