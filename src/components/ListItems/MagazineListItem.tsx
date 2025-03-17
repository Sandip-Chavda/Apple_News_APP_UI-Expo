import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Magazine } from "@/types/types";
import { Entypo, Octicons, SimpleLineIcons } from "@expo/vector-icons";

type MagazineListItemProps = {
  item: Magazine;
};

const MagazineListItem = ({ item }: MagazineListItemProps) => {
  const [isFollowingPressed, setIsFollowingPressed] = useState<boolean>(
    item.isFollowing
  );

  const renderFollowButton = () => {
    if (isFollowingPressed) {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            justifyContent: "center",
            paddingVertical: 3,
            borderRadius: 5,
            borderColor: "#00a6fb",
            backgroundColor: "#00a6fb",
            gap: 2,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 13, color: "white" }}>
            Following
          </Text>
          <Entypo name="check" size={14} color="white" />
        </View>
      );
    }

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          justifyContent: "center",
          paddingVertical: 3,
          borderRadius: 5,
          borderColor: "#00a6fb",
          gap: 2,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 13, color: "#00a6fb" }}>
          Follow
        </Text>
        <Octicons name="person-add" size={14} color="#00a6fb" />
      </View>
    );
  };

  return (
    <View style={{ flex: 0.5 }}>
      <View
        style={{
          backgroundColor: "ghostwhite",
          padding: 10,
          borderRadius: 10,
          margin: 5,
          gap: 5,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", aspectRatio: 3 / 4, borderRadius: 5 }}
        />
        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>

        <TouchableOpacity
          onPress={() => setIsFollowingPressed((currentValue) => !currentValue)}
        >
          {renderFollowButton()}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MagazineListItem;

const styles = StyleSheet.create({});
