import { SportData } from "@/types/types";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

type SportItemProps = {
  item: SportData;
};

const { width } = Dimensions.get("window");

const SportItem = ({ item }: SportItemProps) => {
  return (
    <View
      style={{
        width: width - 50,
        // borderWidth: 0.3,
        // borderColor: "gray",
        paddingHorizontal: 10,
        paddingVertical: 10,
        // marginVertical: 20,
        borderRadius: 12,
        backgroundColor: "ghostwhite",
        shadowColor: "#00a6fb",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.0,
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Image
            source={{ uri: item.sportIcon }}
            style={{ width: 20, height: 20, borderRadius: 10 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 14, fontWeight: "500" }}>
            {item.sportType}
          </Text>
        </View>

        <View>
          <Text style={{ color: "gray" }}>{item.date}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "lightgreen",
              borderRadius: 10,
            }}
          />
          <Text style={{ color: "lightgreen" }}>{item.status}</Text>
        </View>

        {/* sdsd */}
      </View>

      {item.teams.map((team, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            marginVertical: 3,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image
              source={{ uri: team.flag }}
              style={{ width: 25, height: 25, borderRadius: 20 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 15, fontWeight: "600" }}>{team.name}</Text>
          </View>

          <Text style={{ fontSize: 15, fontWeight: "600" }}>{team.score}</Text>
        </View>
      ))}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
          marginTop: 5,
        }}
      >
        <Text>{item.series}</Text>
        <Text>|</Text>
        <Text>{item.venue}</Text>
      </View>

      <View>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 5,
            color: "#00a6fb",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          {item.result}
        </Text>
      </View>
    </View>
  );
};

export default SportItem;

{
  /* <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: item.sportIcon }} style={styles.icon} />
        <Text style={styles.title}>{item.sportType}</Text>
      </View>
      <Text style={styles.date}>
        {item.date} - {item.status}
      </Text>
      <Text style={styles.series}>
        {item.series} at {item.venue}
      </Text>
      <View style={styles.teamsContainer}>
        {item.teams.map((team, index) => (
          <View key={index} style={styles.team}>
            <Image source={{ uri: team.flag }} style={styles.flag} />
            <Text style={styles.teamName}>{team.name}</Text>
            <Text style={styles.score}>{team.score}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.result}>{item.result}</Text>
    </View> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  card: {
    width: width - 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#555",
  },
  series: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  teamsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  team: {
    alignItems: "center",
    flex: 1,
  },
  flag: {
    width: 40,
    height: 25,
    resizeMode: "contain",
    marginBottom: 5,
  },
  teamName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  score: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  result: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#d9534f",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#f8f9fa",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 5,
//   },
//   icon: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   date: {
//     fontSize: 14,
//     color: "#555",
//   },
//   series: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   teamsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   team: {
//     alignItems: "center",
//   },
//   flag: {
//     width: 40,
//     height: 25,
//     resizeMode: "contain",
//     marginBottom: 5,
//   },
//   teamName: {
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   score: {
//     fontSize: 14,
//     color: "#333",
//   },
//   result: {
//     marginTop: 10,
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#d9534f",
//   },
// });
