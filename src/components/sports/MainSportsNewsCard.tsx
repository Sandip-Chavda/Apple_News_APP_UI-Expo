import {
  FlatList,
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
import sportsData from "@assets/data/sports/SportsScoreCard.json";
import SportItem from "./SportItem";

type MainNewsCardProps = {
  newsArticle: News;
};

const MainSportsNewsCard = ({ newsArticle }: MainNewsCardProps) => {
  return (
    <>
      <FlatList
        horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={sportsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <SportItem item={item} />}
        contentContainerStyle={{
          gap: 15,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      />
      <Link href={`sportsNewsArticle/${newsArticle.id}`} asChild>
        <Pressable
          style={{
            backgroundColor: "ghostwhite",
            marginBottom: 15,
            borderRadius: 10,
            marginTop: 20,
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
            <Text
              style={{ fontSize: 17, fontWeight: "bold", marginBottom: 25 }}
            >
              {newsArticle.title}
            </Text>

            <NewsListItemFooter
              author={newsArticle.author}
              publishedDate={newsArticle.created_at}
            />
          </View>
        </Pressable>
      </Link>
    </>
  );
};

export default MainSportsNewsCard;

const styles = StyleSheet.create({});
