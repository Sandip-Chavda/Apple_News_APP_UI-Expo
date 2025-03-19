import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, Slot, Stack } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { PaperProvider } from "react-native-paper";

const RootLayout = () => {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="newsArticle/[id]"
          options={{
            headerShown: false,
            headerLeft: () => (
              <View style={{ marginRight: 10 }}>
                <Ionicons
                  size={24}
                  name="chevron-back"
                  color="#00a6fb"
                  onPress={() => router.back()}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="sportsNewsArticle/[id]"
          options={{
            headerShown: false,
            headerLeft: () => (
              <View style={{ marginRight: 10 }}>
                <Ionicons
                  size={24}
                  name="chevron-back"
                  color="#00a6fb"
                  onPress={() => router.back()}
                />
              </View>
            ),
          }}
        />
      </Stack>
    </PaperProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
