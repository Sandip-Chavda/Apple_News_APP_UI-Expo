import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Audio } from "@/types/types";
import AudioNewsListItemFooter from "./AudioNewsListItemFooter";

type AudioMainNewsCardProps = {
  item: Audio;
};

const { width } = Dimensions.get("window");

const AudioMainNewsCard = ({ item }: AudioMainNewsCardProps) => {
  return (
    // <Link href={`newsArticle/${item.id}`} asChild>
    <Link href={``} asChild>
      <Pressable
        style={{
          backgroundColor: "ghostwhite",
          marginBottom: 15,
          borderRadius: 10,
          width: width - 58,
        }}
      >
        <Image
          source={{ uri: item.image }}
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
            {item.title}
          </Text>

          <AudioNewsListItemFooter
            audioTime={item.audio_duration}
            author={item.author}
            publishedDate={item.created_at}
          />
        </View>
      </Pressable>
    </Link>
  );
};

export default AudioMainNewsCard;

const styles = StyleSheet.create({});
