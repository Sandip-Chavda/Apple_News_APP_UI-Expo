import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FollowingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Krishiv}>Following</Text>
    </View>
  );
};

export default FollowingScreen;

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
