import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FeaturedMagazines from "@assets/data/featuredMagazines.json";
import MagazineListItem from "@/components/ListItems/MagazineListItem";
import { AntDesign } from "@expo/vector-icons";

const NewsPlusScreen = () => {
  const date = new Date();

  const [magazinesData, setMagazinesData] = useState([]);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={FeaturedMagazines}
        renderItem={({ item }) => <MagazineListItem item={item} />}
        ListHeaderComponent={
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 18,
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 27, fontWeight: "bold", color: "gray" }}>
              {date.toLocaleString("default", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#00a6fb",
                paddingVertical: 3,
                paddingHorizontal: 6,
                borderRadius: 10,
              }}
            >
              <AntDesign name="apple1" size={31} color="white" />
              <Text style={{ fontSize: 27, fontWeight: "800", color: "white" }}>
                News
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default NewsPlusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
});
