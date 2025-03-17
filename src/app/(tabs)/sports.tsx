import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SportsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Krishiv}>Sport</Text>
    </View>
  );
};

export default SportsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Krishiv: {
    fontSize: 80,
    fontWeight: "900",
  },
});
