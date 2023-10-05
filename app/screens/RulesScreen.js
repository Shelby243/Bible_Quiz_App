import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Screen } from "../components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
const RulesScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://res.cloudinary.com/dluwcubyw/image/upload/v1696427598/Bible%20quiz/bot_icnust.gif",
          }}
          style={{ height: hp(15), width: hp(15), borderRadius: 60 }}
        />
      </View>
      <View style={{ height: hp(60), marginVertical: 20 }}>
        <Text style={{ fontSize: wp(6.5), fontWeight: "bold", color: "#333" }}>
          Consignes
        </Text>
        <View
          style={{
            backgroundColor: "#D9ED92",
            padding: 16,
            borderRadius: 16,
            marginVertical: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: wp(4.8), color: "#333" }}>
              Pour chaque réponse correcte, vous obtenez 10 points.
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#B5E48C",
            padding: 16,
            borderRadius: 16,
            marginVertical: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: wp(4.8), color: "#333" }}>
              Il n'y a pas de pénalité pour les réponses incorrectes.
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#76C893",
            padding: 16,
            borderRadius: 16,
            marginVertical: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: wp(4.8), color: "#333" }}>
              Chaque question a une limite de temps de 15 secondes.
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#52B69A",
            padding: 16,
            borderRadius: 16,
            marginVertical: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: wp(4.8), color: "#333" }}>
              Vous devez répondre à toutes les questions obligatoirement.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Quiz")}
          style={{
            backgroundColor: "#184E77",
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
            Jouer
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};
export default RulesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, // Equivalent to flex-1

    marginHorizontal: 5, // Equivalent to mx-5
  },
});
