import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { News } from "@/types/types";
import NewsListItemFooter from "../NewsListItemFooter";
import { Link } from "expo-router";

type NewsListItemProps = {
  newsArticle: News;
};

const NewsListItem = ({ newsArticle }: NewsListItemProps) => {
  return (
    <Link href={`newsArticle/${newsArticle.id}`} asChild>
      <Pressable
        style={{
          backgroundColor: "ghostwhite",
          gap: 25,
          borderRadius: 10,
          marginVertical: 10,
          padding: 5,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexShrink: 1, marginRight: 10, gap: 5 }}>
            <Image
              source={require("@assets/logo.png")}
              style={{ width: 50, height: 30 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              {newsArticle.title}
            </Text>
          </View>
          <Image
            source={{ uri: newsArticle.image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginLeft: "auto",
            }}
          />
        </View>

        <NewsListItemFooter
          author={newsArticle.author}
          publishedDate={newsArticle.created_at}
        />
      </Pressable>
    </Link>
  );
};

export default NewsListItem;

const styles = StyleSheet.create({});
