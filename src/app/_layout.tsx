import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

const RootLayout = () => {
  return (
    <PaperProvider>
      <Slot />;
    </PaperProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
