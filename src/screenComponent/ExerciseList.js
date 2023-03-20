import { View, Text, Image } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";

const ExerciseList = () => {
  const exercises = [
    {
      id: 1,
      title: "Jump Rope",
      time: "15 giây",
      img: require("../storages/img/exercises/avt.png"),
    },
    {
      id: 2,
      title: "Jump Rope",
      time: "15 giây",
      img: require("../storages/img/exercises/avt.png"),
    },
    {
      id: 3,
      title: "Jump Rope",
      time: "15 giây",
      img: require("../storages/img/exercises/avt.png"),
    },
    {
      id: 4,
      title: "Jump Rope",
      time: "15 giây",
      img: require("../storages/img/exercises/avt.png"),
    },
  ];
  return exercises.map((data, index) => {
    return (
      <View
        key={index}
        style={{
          width: "80%",
          alignSelf: "center",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Foundation name="list-bullet" size={24} color="black" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "10%",
            borderBottomWidth: 1,
            height: 120,
            width: "85%",
          }}
        >
          <Image source={data.img} style={{ marginRight: "10%" }} />
          <View>
            <Text>{data.title}</Text>
            <Text>{data.time}</Text>
          </View>
        </View>
      </View>
    );
  });
};

export default ExerciseList;
