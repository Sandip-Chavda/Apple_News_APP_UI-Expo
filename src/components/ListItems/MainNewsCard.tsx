import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { News } from "@/types/types";
import NewsListItemFooter from "../NewsListItemFooter";

type MainNewsCardProps = {
  newsArticle: News;
};

const MainNewsCard = ({ newsArticle }: MainNewsCardProps) => {
  return (
    <View
      style={{
        backgroundColor: "ghostwhite",
        marginBottom: 15,
        borderRadius: 10,
      }}
    >
      <Image
        source={{ uri: newsArticle.image }}
        style={{
          width: "100%",
          aspectRatio: 4 / 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Image
        source={require("@assets/logo.png")}
        style={{ width: 50, height: 35 }}
      />
      <View style={{ paddingHorizontal: 10, paddingBottom: 5 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 25 }}>
          {newsArticle.title}
        </Text>

        <NewsListItemFooter
          author={newsArticle.author}
          publishedDate={newsArticle.created_at}
        />
      </View>
    </View>
  );
};

export default MainNewsCard;

const styles = StyleSheet.create({});
