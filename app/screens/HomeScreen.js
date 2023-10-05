import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Screen } from "../components";
import colors from "../config/colors";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Image
        style={styles.image}
        source={require("../../assets/images/quiz-pic.jpeg")}
      />
      <View style={styles.container}>
        <Text style={styles.title}>BIBLE QUIZ RULES</Text>
      </View>
      <View style={{ padding: 5 }}>
        <View style={styles.rules}>
          <View style={styles.rule}>
            <Text style={{ color: "#FEBE10", fontSize: 15, fontWeight: "700" }}>
              &gt;
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 15,
                color: "#FEBE10",
                fontWeight: "700",
              }}
            >
              For each correct answer you get 5 points
            </Text>
          </View>

          <View style={styles.rule}>
            <Text style={{ color: "#FEBE10", fontSize: 15, fontWeight: "700" }}>
              &gt;
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 15,
                color: "#FEBE10",
                fontWeight: "700",
              }}
            >
              There is no negative marking for wrong answer
            </Text>
          </View>
          <View style={styles.rule}>
            <Text style={{ color: "#FEBE10", fontSize: 15, fontWeight: "700" }}>
              &gt;
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 15,
                color: "#FEBE10",
                fontWeight: "700",
              }}
            >
              Each question has a time limit of 15 seconds
            </Text>
          </View>
          <View style={styles.rule}>
            <Text style={{ color: "#FEBE10", fontSize: 15, fontWeight: "700" }}>
              &gt;
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 15,
                color: "#FEBE10",
                fontWeight: "700",
              }}
            >
              You should answer all the questions compulsarily
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Quiz")}
        style={{
          backgroundColor: "magenta",
          paddingHorizontal: 25,
          paddingVertical: 18,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: colors.light,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Start Quiz
        </Text>
      </Pressable>
    </Screen>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  image: {
    height: 400,
    width: "100%",
    resizeMode: "contain",
  },
  container: {
    padding: 10,
    width: "100%",
  },
  title: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "800",
  },
  rules: {
    padding: 10,
    backgroundColor: "#0066b2",
    borderRadius: 6,
    marginTop: 10,
    gap: 5,
  },
  rule: {
    flexDirection: "row",
    alignItems: "center",
  },
});
