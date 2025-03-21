import { FontAwesome, FontAwesome6, Foundation } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FollowingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#00a6fb",
          marginVertical: 25,
        }}
      >
        Apple News UI Clone
      </Text>

      <Image
        source={require("@assets/AppLogo1.png")}
        style={{ width: 150, height: 150 }}
        resizeMode="contain"
      />
      <Image
        source={require("@assets/AppLogo2.png")}
        style={{ width: "100%", height: 45, marginTop: 5 }}
        resizeMode="contain"
      />

      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          marginTop: 35,
          // color: "#00a6fb",
        }}
      >
        Coonect with me on
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 25,
          marginTop: 10,
        }}
      >
        <Link
          href="https://www.linkedin.com/in/sandip-chavda-86704a2aa/"
          asChild
        >
          <TouchableOpacity>
            <FontAwesome name="linkedin-square" size={60} color="#0A66C2" />
          </TouchableOpacity>
        </Link>
        <Link
          href="https://github.com/Sandip-Chavda?tab=overview&from=2024-12-01&to=2024-12-31"
          asChild
        >
          <TouchableOpacity>
            <FontAwesome name="github-square" size={60} color="black" />
          </TouchableOpacity>
        </Link>
        <Link href="https://sandip-chavda-portfolio.vercel.app/" asChild>
          <TouchableOpacity>
            <Foundation name="link" size={60} color="orange" />
          </TouchableOpacity>
        </Link>
        <Link href="https://x.com/@SandipC70731202" asChild>
          <TouchableOpacity>
            <FontAwesome6 name="square-x-twitter" size={55} color="black" />
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "white",
    alignItems: "center",
  },
});
