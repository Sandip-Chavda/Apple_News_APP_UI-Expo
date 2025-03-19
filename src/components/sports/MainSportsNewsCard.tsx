import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { News } from "@/types/types";
import NewsListItemFooter from "../NewsListItemFooter";
import { Link } from "expo-router";

type MainNewsCardProps = {
  newsArticle: News;
};

const MainSportsNewsCard = ({ newsArticle }: MainNewsCardProps) => {
  return (
    <Link href={`sportsNewsArticle/${newsArticle.id}`} asChild>
      <Pressable
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
      </Pressable>
    </Link>
  );
};

export default MainSportsNewsCard;

const styles = StyleSheet.create({});
