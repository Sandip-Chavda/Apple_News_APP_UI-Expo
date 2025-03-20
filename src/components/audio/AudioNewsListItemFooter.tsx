import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Author } from "@/types/types";

type AudioNewsListItemFooterProps = {
  publishedDate: string;
  author: Author;
  audioTime: string;
};

const AudioNewsListItemFooter = ({
  publishedDate,
  author,
  audioTime,
}: AudioNewsListItemFooterProps) => {
  return (
    <View style={{ alignItems: "center", flexDirection: "row", gap: 2 }}>
      {/* <Text>{formatDistanceToNow(publishedDate, { addSuffix: true })}</Text> */}
      <Text>Duration :</Text>
      <Text>{audioTime}</Text>
      <MaterialCommunityIcons
        name="dots-horizontal"
        size={22}
        color={"gray"}
        style={{ marginLeft: "auto" }}
      />
    </View>
  );
};

export default AudioNewsListItemFooter;

const styles = StyleSheet.create({});
