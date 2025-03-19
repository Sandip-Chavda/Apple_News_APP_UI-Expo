import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { News } from "@/types/types";
import NewsListItemFooter from "../NewsListItemFooter";
import { Link } from "expo-router";

type TrendingListItemProps = {
  newsArticle: News;
  index: number;
};

const SportsTrendingListItem = ({
  newsArticle,
  index,
}: TrendingListItemProps) => {
  return (
    <Link href={`sportsNewsArticle/${newsArticle.id}`} asChild>
      <Pressable style={{}}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 20,
            gap: 15,
            backgroundColor: "ghostwhite",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <View style={styles.bubbleContainer}>
            <Text style={styles.bubleTitle}>#{index + 1}</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={{ gap: 5 }}>
              <Image
                source={require("@assets/logo.png")}
                style={{ width: 50, height: 30 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {newsArticle.title}
              </Text>
            </View>
            <NewsListItemFooter
              publishedDate={newsArticle.created_at}
              author={newsArticle.author}
            />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default SportsTrendingListItem;

const styles = StyleSheet.create({
  bubbleContainer: {
    backgroundColor: "#00a6fb",
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  bubleTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  textContainer: {
    gap: 25,
    flex: 1,
    // borderBottomWidth: 0.5,
    // borderBottomColor: "lightgrey",
    // paddingBottom: 10,
  },
});
