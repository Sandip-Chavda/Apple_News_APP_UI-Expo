// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   FlatList,
//   Pressable,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import FeaturedMagazines from "@assets/data/featuredMagazines.json";
// import NewestMagazines from "@assets/data/newestMagazines.json";
// import PopularMagazines from "@assets/data/popularMagazines.json";
// import MagazineListItem from "@/components/ListItems/MagazineListItem";
// import { AntDesign, Entypo } from "@expo/vector-icons";
// import { Magazine } from "@/types/types";
// import { Menu } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import {
  Text,
  FlatList,
  Button,
  View,
  Pressable,
  StyleSheet,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Menu } from "react-native-paper";
import featuredMagazines from "@assets/data/featuredMagazines.json";
import newestMagazines from "@assets/data/newestMagazines.json";
import popularMagazines from "@assets/data/popularMagazines.json";
import MagazineListItem from "@/components/ListItems/MagazineListItem";
import { Magazine } from "@/types/types";

const FILTERS = {
  FEATURED: "Featured",
  POPULAR: "Popular",
  NEWEST: "Newest",
};

type FilterKey = keyof typeof FILTERS;

const NewsPlusScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    FILTERS.FEATURED
  );
  const [magazinesData, setMagazinesData] = useState<Magazine[]>([]);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  useEffect(() => {
    if (selectedOption === FILTERS.FEATURED) {
      return setMagazinesData(featuredMagazines);
    }
    if (selectedOption === FILTERS.POPULAR) {
      return setMagazinesData(popularMagazines);
    }
    if (selectedOption === FILTERS.NEWEST) {
      return setMagazinesData(newestMagazines);
    }
    return setMagazinesData([]);
  }, [selectedOption]);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsMenuVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={magazinesData}
        renderItem={({ item }) => <MagazineListItem item={item} />}
        ListHeaderComponent={
          <View>
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
                Discover
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
                <Text
                  style={{ fontSize: 27, fontWeight: "800", color: "white" }}
                >
                  News
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "400" }}>Showing: </Text>
              <Menu
                visible={isMenuVisible}
                onDismiss={() => setIsMenuVisible(false)}
                anchorPosition="bottom"
                anchor={
                  <Pressable
                    style={{ flexDirection: "row", alignItems: "center" }}
                    onPress={() => setIsMenuVisible(true)}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "#00a6fb",
                      }}
                    >
                      {selectedOption}
                    </Text>
                    <Entypo name="chevron-down" size={24} color="#00a6fb" />
                  </Pressable>
                }
              >
                {(Object.keys(FILTERS) as FilterKey[]).map((key) => (
                  <Menu.Item
                    key={key}
                    title={FILTERS[key]}
                    titleStyle={{
                      fontWeight: "bold",
                      fontSize: 15,
                      color: "black",
                    }}
                    onPress={() => handleSelectOption(FILTERS[key])}
                  />
                ))}
              </Menu>
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
