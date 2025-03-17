import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import NewsListItem from "@/components/ListItems/NewsListItem";
import homeNews from "@assets/data/homeNews.json";
import MainNewsCard from "@/components/ListItems/MainNewsCard";
import TrendingListItem from "@/components/ListItems/TrendingListItem";
import { AntDesign } from "@expo/vector-icons";

const TITLES = {
  TOP_STORIES: "Top Stories",
  TRENDING: "Trending",
  FOR_YOU: "For You",
};

const index = () => {
  const date = new Date();

  const showSectionHeader = (title: string) => {
    if (title === TITLES.TOP_STORIES) {
      return (
        <View style={{ gap: 2, marginBottom: 15, marginTop: 15 }}>
          <Text style={{ color: "#00a6fb", fontSize: 25, fontWeight: "bold" }}>
            {TITLES.TOP_STORIES}
          </Text>
          <Text style={{ color: "#aaaaaa" }}>
            Chosen by the Apple News editors.
          </Text>
        </View>
      );
    }

    if (title === TITLES.TRENDING) {
      return (
        <View
          style={{
            gap: 5,
            marginBottom: 15,
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#00a6fb", fontSize: 25, fontWeight: "bold" }}>
            {TITLES.TRENDING}
          </Text>
        </View>
      );
    }

    if (title === TITLES.FOR_YOU) {
      return (
        <View style={{ gap: 2, marginBottom: 15, marginTop: 15 }}>
          <Text style={{ color: "#00a6fb", fontSize: 25, fontWeight: "bold" }}>
            {TITLES.FOR_YOU}
          </Text>
          <Text style={{ color: "#aaaaaa" }}>
            Recommendations based on topics you read.
          </Text>
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        showsVerticalScrollIndicator={false}
        // stickySectionHeadersEnabled={true} // if want to enable give padding and background color
        sections={homeNews}
        renderItem={({ item, index, section }) => {
          switch (section.title) {
            case TITLES.TOP_STORIES:
              return index === 0 ? (
                <MainNewsCard newsArticle={item} />
              ) : (
                <NewsListItem newsArticle={item} />
              );
            case TITLES.TRENDING:
              return <TrendingListItem newsArticle={item} index={index} />;
            case TITLES.FOR_YOU:
              return <NewsListItem newsArticle={item} />;
            default:
              return null;
          }
        }}
        renderSectionHeader={({ section }) => showSectionHeader(section.title)}
        ListHeaderComponent={
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 18,
            }}
          >
            <Text style={{ fontSize: 27, fontWeight: "bold", color: "gray" }}>
              {date.toLocaleString("default", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#00a6fb",
                paddingVertical: 3,
                paddingHorizontal: 6,
                borderRadius: 10,
              }}
            >
              <AntDesign name="apple1" size={31} color="white" />
              <Text style={{ fontSize: 27, fontWeight: "800", color: "white" }}>
                News
              </Text>
            </View>
          </View>
        }
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
});
