import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const image = { uri: "https://i.pinimg.com/564x/fa/48/7d/fa487d072c17cf4053689616ddfc02b3.jpg" };

const SignInScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
    error: '',
  });

  async function signIn() {
    if (!value.email || !value.password) {
      setValue({ ...value, error: 'Email and password must be provided.' })
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error: any) {
      setValue({ ...value, error: error.message })
    }
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text>Sign up screen!</Text>
      {!!value.error && 
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      }

      <View style={styles.controls}>
        <Input
          placeholder="Email"
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon name='envelope' size={16} />}
        />
        <Input
          placeholder="Password"
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          leftIcon={<Icon name='key' size={16} />}
          secureTextEntry={true}
        />
        <Button title="Sign in" buttonStyle={styles.control} onPress={signIn} />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controls: {
    flex: 1,
  },
  control: {
    marginTop: 10,
    minWidth: 300,
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default SignInScreen;
