import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../components";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <Screen style={styles.container}>
      <View style={{ marginVertical: 8 }}>
        <Text
          style={{
            fontSize: wp(10),
            textAlign: "center",
            fontWeight: "bold",
            color: "#D9ED92",
          }}
        >
          BIBLE
        </Text>
        <Text
          style={{
            fontSize: wp(3.5),
            textAlign: "center",
            letterSpacing: 1,
            fontWeight: 800,
            color: "#D9ED92",
          }}
        >
          Médite le jour et nuit.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://cdn3d.iconscout.com/3d/premium/thumb/bible-book-8364760-6649346.png",
          }}
          style={{ width: wp(75), height: wp(75) }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Rules")}
        style={{
          backgroundColor: "#34a0a4",
          marginHorizontal: 5,
          padding: 16,
          borderRadius: 16,
        }}
      >
        <Text
          style={{
            fontSize: wp(6),
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          Commencer
        </Text>
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#1A759F",
  },
});
