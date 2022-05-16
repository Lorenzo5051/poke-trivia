import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image,} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { DataTable } from 'react-native-paper';


const image = { uri: "https://i.pinimg.com/564x/fa/48/7d/fa487d072c17cf4053689616ddfc02b3.jpg" };
const optionsPerPage = [2, 3, 4];

const LeaderboardsScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text>Leaderboards</Text>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>User</DataTable.Title>
        <DataTable.Title>Score</DataTable.Title>

      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Lencho</DataTable.Cell>
        <DataTable.Cell numeric>25</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Fati</DataTable.Cell>
        <DataTable.Cell numeric>15</DataTable.Cell>

      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Esteban</DataTable.Cell>
        <DataTable.Cell numeric>10</DataTable.Cell>

      </DataTable.Row>

    </DataTable>
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

export default LeaderboardsScreen;