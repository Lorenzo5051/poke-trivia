import React from "react";
import { ImageBackground,StyleSheet, Text, View,Image} from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from 'firebase/auth';
import { StackScreenProps } from "@react-navigation/stack";

const auth = getAuth();
const image = { uri: "https://i.pinimg.com/564x/fa/48/7d/fa487d072c17cf4053689616ddfc02b3.jpg" };

const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text >Welcome {user?.email}</Text>
      <Image source={require('../img/name.png')} style={{ width: 200, height: 150 }}/>
      <View style={styles.buttons}>
      <Button
        title="Play Game"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Game') }/>
      <Button
        title="Leaderboards"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Leaderboards') }/>
      <Button
        title="Sign Out"
        buttonStyle={styles.button}
        onPress={() => signOut(auth) }
      />
       </View>
      </ImageBackground>
    </View>
  );
}

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


export default HomeScreen;