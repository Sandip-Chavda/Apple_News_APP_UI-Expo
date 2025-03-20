import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Audio } from "@/types/types";
import { Link } from "expo-router";
import AudioNewsListItemFooter from "./AudioNewsListItemFooter";

type UpNextAudioCardProps = {
  item: Audio;
};

const { width } = Dimensions.get("window");

const UpNextAudioCard = ({ item }: UpNextAudioCardProps) => {
  return (
    // <Link href={`newsArticle/${newsArticle.id}`} asChild>
    <Link href={``} asChild>
      <Pressable
        style={{
          backgroundColor: "ghostwhite",
          gap: 25,
          borderRadius: 10,
          marginVertical: 10,
          padding: 5,
          width: width - 58,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexShrink: 1, marginRight: 10, gap: 5 }}>
            <Image
              source={require("@assets/logo.png")}
              style={{ width: 50, height: 30 }}
              resizeMode="contain"
            />
            <Text
              numberOfLines={3}
              style={{ fontSize: 17, fontWeight: "bold" }}
            >
              {item.title}
            </Text>
          </View>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginLeft: "auto",
            }}
          />
        </View>

        <AudioNewsListItemFooter
          audioTime={item.audio_duration}
          author={item.author}
          publishedDate={item.created_at}
        />
      </Pressable>
    </Link>
  );
};

export default UpNextAudioCard;

const styles = StyleSheet.create({});
