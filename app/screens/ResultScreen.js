import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Screen } from "../components";
import { AntDesign } from "@expo/vector-icons";
const ResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  //console.log(route.params);
  return (
    <Screen style={{ margin: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18 }}>Your Results</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 14,
          }}
        >
          <Text style={{ fontSize: 18 }}>Share</Text>
          <AntDesign
            style={{ marginLeft: 4 }}
            name="sharealt"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 30,
        }}
      >
        <Text style={{ fontSize: 18 }}>Questions Answered</Text>
        <Text style={{ fontSize: 18 }}>(10/10)</Text>
        <Text style={{ fontSize: 18 }}>Score:{route.params.points} </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "white",

          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: "500",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Score Card
        </Text>
        <FlatList
          numColumns={5}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                marginLeft: 25,
              }}
            >
              <Text style={{ fontSize: 20 }}>{item.question} </Text>
              {item.answer === true ? (
                <AntDesign
                  name="checkcircle"
                  size={39}
                  style={styles.options}
                  color="green"
                />
              ) : (
                <AntDesign
                  name="closecircle"
                  size={39}
                  style={styles.options}
                  color="red"
                />
              )}
            </View>
          )}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#1A759F",
            marginHorizontal: 10,
            padding: 16,
            borderRadius: 16,
            marginTop: 25,
          }}
        >
          <Text
            onPress={() => navigation.navigate("Welcome")}
            style={{ fontSize: 18, color: "white", textAlign: "center" }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </Pressable>
    </Screen>
  );
};
export default ResultScreen;
const styles = StyleSheet.create({
  options: {
    borderColor: "#00ffff",
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 0,
    borderWidth: 0.5,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
