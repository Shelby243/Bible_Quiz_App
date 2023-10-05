import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Screen } from "../components";
import colors from "../config/colors";
import questions from "../data/question";
import { AntDesign } from "@expo/vector-icons";

const initialRandomIndex = Math.floor(Math.random() * questions.length);

const QuizScreen = () => {
  const navigation = useNavigation();
  const data = questions;

  //points
  const [points, setPoints] = useState(0);

  //index of the questions
  const [index, setIndex] = useState(0);

  //answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  //answers
  const [answers, setAnswers] = useState([]);

  //selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  //counter
  const [counter, setCounter] = useState(15);

  //interval
  let interval = null;
  //shuffle array
  //progress bar
  const progressPercentage = Math.floor((index / 10) * 100);
  const randomIndex = Math.floor(Math.random() * data.length);
  console.log();

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((counter) => counter - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
      interval = setTimeout(myInterval, 1000);

      //clean up

      return () => {
        clearTimeout(interval);
      };
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > 10) {
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);
  const currentQuestion = data[index];
  //console.log(selectedAnswerIndex);

  return (
    <Screen>
      <View style={styles.head}>
        <Text>Quiz Challenge</Text>
        <Pressable style={styles.count}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {counter}
          </Text>
        </Pressable>
      </View>
      <View style={styles.head2}>
        <Text>Your progress</Text>
        <Text>({index}/10) questions answered</Text>
      </View>

      {/** progress bar */}
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          height: 10,
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "#168AAD",
            borderRadius: 12,
            position: "absolute",
            left: 0,
            height: 10,
            right: 0,
            width: `${progressPercentage}%`,
            marginTop: 20,
          }}
        />
      </View>
      <View style={styles.quiz_container}>
        <Text style={styles.text} numberOfLines={2}>
          {currentQuestion?.question}
        </Text>
        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index &&
                index === currentQuestion.correctAnswerIndex
                  ? [
                      styles.button,
                      {
                        backgroundColor: colors.secondary,
                      },
                    ]
                  : selectedAnswerIndex !== null &&
                    selectedAnswerIndex === index
                  ? [styles.button, { backgroundColor: colors.primary }]
                  : styles.button
              }
              key={index}
            >
              {selectedAnswerIndex === index &&
              index === currentQuestion?.correctAnswerIndex ? (
                <AntDesign
                  name="checkcircle"
                  size={40}
                  style={styles.options}
                  color="white"
                />
              ) : selectedAnswerIndex !== null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  name="closecircle"
                  size={40}
                  style={styles.options}
                  color="white"
                />
              ) : (
                <Text style={styles.options}>{item.options}</Text>
              )}

              <Text style={{ marginLeft: 10, fontSize: 18 }}>
                {item.answer}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "#f0f8ff",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus === null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" }
            }
          >
            {!!answerStatus
              ? "Correct Answer"
              : `Wrong Answer! Answer is: ${
                  currentQuestion.options[currentQuestion.correctAnswerIndex]
                    .options
                }`}
          </Text>
        )}
        {index + 1 >= 10 ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Results", {
                points: points,
                answers: answers,
              })
            }
            style={{
              backgroundColor: "#1A759F",
              marginHorizontal: 10,
              padding: 16,
              borderRadius: 16,
              marginTop: 7,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
              Show Results
            </Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <TouchableOpacity
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: "#1A759F",
              marginHorizontal: 10,
              padding: 16,
              borderRadius: 16,
              marginTop: 7,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
              Next question
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </Screen>
  );
};
export default QuizScreen;
const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    borderColor: "#1A759F",
    borderWidth: 0.5,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  head2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  quiz_container: {
    backgroundColor: "#f0f8ff",
    padding: 10,
    marginTop: 20,
    borderRadius: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  options: {
    fontSize: 18,
    borderColor: "#1A759F",
    width: 30,
    height: 30,
    borderRadius: 15,
    padding: 5,
    borderWidth: 0.5,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  count: {
    padding: 10,
    backgroundColor: "#168AAD",
    borderRadius: 20,
  },
});
