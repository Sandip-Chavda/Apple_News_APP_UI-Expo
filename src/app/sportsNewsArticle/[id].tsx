import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { router, Stack, useLocalSearchParams } from "expo-router";
import AllSportsNews from "@assets/data/sports/allSportsNews.json";
import Markdown from "react-native-markdown-display";
import { format } from "date-fns";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const SportsDetailedArticle = () => {
  const { id } = useLocalSearchParams();

  const newsArticle = AllSportsNews.find((article) => article.id === id);

  if (!newsArticle) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text>The article you are looking for is not found.</Text>
      </View>
    );
  }

  const { publisher, image, author, created_at, body } = newsArticle;

  return (
    <ScrollView
      contentContainerStyle={{
        // flex: 1,
        backgroundColor: "white",
        // paddingHorizontal: 15,
        // paddingBottom: 50,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Stack.Screen
        name="sportsNewsArticle/[id]"
        options={{
          headerShown: true,
          title: publisher.name,
          // headerLeft: () => (
          //   <View style={{ marginRight: 10 }}>
          //     <Ionicons
          //       size={24}
          //       name="chevron-back"
          //       color="#00a6fb"
          //       onPress={() => router.back()}
          //     />
          //   </View>
          // ),
          headerRight: () => (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Ionicons name="share-outline" size={20} color={"#00a6fb"} />
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color={"#00a6fb"}
              />
            </View>
          ),
        }}
      />
      <Image
        source={{ uri: image }}
        style={{ width: "100%", aspectRatio: 1 }}
      />
      <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
        <View style={{ gap: 5, marginBottom: 8 }}>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>
            {newsArticle.title}
          </Text>
          <Text style={{ fontWeight: "400", color: "gray", fontSize: 12 }}>
            - {`by ${author.name} ${format(created_at, "dd MMM yyyy")}`}
          </Text>
        </View>
        <Markdown>{body}</Markdown>
      </View>

      <StatusBar
        style="auto"
        backgroundColor="transparent"
        // hidden
        // hideTransitionAnimation="slide"
      />
    </ScrollView>
  );
};

export default SportsDetailedArticle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "white",
    marginTop: 55,
  },
});
