import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { News } from "@/types/types";
import NewsListItemFooter from "../NewsListItemFooter";
import { Link } from "expo-router";

type TrendingListItemProps = {
  newsArticle: News;
  index: number;
};

const TrendingListItem = ({ newsArticle, index }: TrendingListItemProps) => {
  return (
    // <View
    //   style={{
    //     flexDirection: "row",
    //     marginBottom: 15,
    //     backgroundColor: "ghostwhite",
    //     borderRadius: 10,
    //     padding: 5,
    //     gap: 15,
    //   }}
    // >
    //   <View
    //     style={{
    //       backgroundColor: "#00a6fb",
    //       padding: 5,
    //       borderRadius: 30,
    //       width: 35,
    //       height: 35,
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Text style={{ textAlign: "center", color: "white", fontSize: 17 }}>
    //       #{newsArticle.id.split("-")[1]}
    //     </Text>
    //   </View>
    //   <View style={{ gap: 25 }}>
    //     <View>
    //       <Image
    //         source={require("@assets/logo.png")}
    //         style={{ width: 50, height: 30, marginRight: "auto" }}
    //         resizeMode="contain"
    //       />
    //       <Text style={{ fontSize: 17, fontWeight: "bold" }}>
    //         {newsArticle.title}
    //       </Text>
    //     </View>

    //     <NewsListItemFooter
    //       author={newsArticle.author}
    //       publishedDate={newsArticle.created_at}
    //     />
    //   </View>
    // </View>

    <Link href={`newsArticle/${newsArticle.id}`} asChild>
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

export default TrendingListItem;

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
