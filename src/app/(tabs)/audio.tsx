import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AudioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Krishiv}>Audio</Text>
    </View>
  );
};

export default AudioScreen;

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
