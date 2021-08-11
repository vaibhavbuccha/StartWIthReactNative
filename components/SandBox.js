import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SandBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

export default SandBox;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 20,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 30,
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 40,
  },
  boxFour: {
    backgroundColor: "skyblue",
    padding: 50,
  },
});
