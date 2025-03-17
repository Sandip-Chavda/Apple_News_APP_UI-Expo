import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Author } from "@/types/types";

type NewsListItemFooterProps = {
  publishedDate: string;
  author: Author;
};

const NewsListItemFooter = ({
  publishedDate,
  author,
}: NewsListItemFooterProps) => {
  return (
    <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
      <Text>{formatDistanceToNow(publishedDate, { addSuffix: true })}</Text>
      <Text>&#x2022;</Text>
      <Text>{author.name}</Text>
      <MaterialCommunityIcons
        name="dots-horizontal"
        size={22}
        color={"gray"}
        style={{ marginLeft: "auto" }}
      />
    </View>
  );
};

export default NewsListItemFooter;

const styles = StyleSheet.create({});
