import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import AudioMainNewsCard from "@/components/audio/AudioMainNewsCard";
import AudioNews from "@assets/data/audio/AudioNews.json";
import UpNextAudioCard from "@/components/audio/UpNextAudioCard";

const AudioScreen = () => {
  const date = new Date();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 18,
            paddingHorizontal: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <View>
              <Image
                source={require("@assets/AudioLogo.png")}
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={{ fontWeight: "bold", color: "#00a6fb" }}>
                Audio
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>
                {date.toLocaleString("default", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </Text>
            </View>
          </View>
          <Link
            href={""}
            asChild
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#00a6fb",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity>
              <Feather name="headphones" size={16} color="white" />
              <Text style={{ fontSize: 17, fontWeight: "800", color: "white" }}>
                Play
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Text
          style={{
            marginTop: 15,
            marginBottom: 15,
            color: "#00a6fb",
            fontSize: 25,
            fontWeight: "bold",
            paddingHorizontal: 15,
          }}
        >
          Editor's Picks
        </Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={AudioNews}
          renderItem={({ item }) => <AudioMainNewsCard item={item} />}
          contentContainerStyle={{ gap: 15, paddingHorizontal: 15 }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#00a6fb",
            marginHorizontal: 15,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
              Now available in Podcasts
            </Text>
            <Text style={{ color: "#ebebeb", fontWeight: "500", fontSize: 13 }}>
              Discover more narrated audio stories{" "}
              <MaterialIcons name="arrow-outward" size={13} color="#ebebeb" />
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons name="waveform" size={40} color="white" />
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#00a6fb", fontSize: 25, fontWeight: "bold" }}>
            Up Next
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
          >
            <Text style={{ fontWeight: "500", color: "#00a6fb" }}>See All</Text>
            <Feather name="chevron-right" size={20} color={"#00a6fb"} />
          </TouchableOpacity>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={AudioNews}
          renderItem={({ item }) => <UpNextAudioCard item={item} />}
          contentContainerStyle={{ gap: 15, paddingHorizontal: 15 }}
        />

        <Text
          style={{
            marginTop: 15,
            marginBottom: 15,
            color: "#00a6fb",
            fontSize: 25,
            fontWeight: "bold",
            paddingHorizontal: 15,
          }}
        >
          Audios to Listen
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AudioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // paddingHorizontal: 15,
  },
});
