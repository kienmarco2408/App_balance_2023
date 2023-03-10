import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Banner from "../screenComponent/Banner";
import Topic from "../screenComponent/Topic";
import ContentHome from "../screenComponent/ContentHome";
import CardHome from "../screenComponent/CardHome";
import CardHome_2 from "../screenComponent/CardHome_2";

const Home = () => {
  return (
    <View
      style={{ backgroundColor: "white", height: "100%", paddingBottom: "21%" }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "10%",
            marginTop: "5%",
          }}
        >
          <Image
            source={require("../storages/img/avt.png")}
            style={{ borderRadius: 50 }}
          />
          <View style={{ alignContent: "center", marginLeft: "2%" }}>
            <Text
              style={{ fontWeight: "300", color: "#A5A5A5", lineHeight: 21 }}
            >
              Chào Xuân An
            </Text>
            <Text style={{ width: "80%", fontWeight: "700" }}>
              Cùng nhau làm nóng cơ thể bắt đầu ngày mới nào!
            </Text>
          </View>
        </View>
        <View>
          <Banner />
        </View>
        <View style={{ marginTop: "10%", marginLeft: "5.5%" }}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>Bộ môn</Text>
        </View>
        <View
          style={{
            marginTop: "2%",
            marginHorizontal: "3%",
            flexDirection: "row",
          }}
        >
          <ScrollView horizontal>
            <Topic />
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: "10%",
            marginHorizontal: "5.5%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700" }}>Bài Viết</Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#F08281" }}>
            Xem tất cả
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: "5%" }}>
          <ContentHome />
        </View>
        <View
          style={{
            marginTop: "10%",
            marginHorizontal: "5.5%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700" }}>
            Khởi động (warm up)
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#F08281" }}>
            Xem tất cả
          </Text>
        </View>
        <View>
          <CardHome />
        </View>
        <View
          style={{
            marginTop: "10%",
            marginHorizontal: "5.5%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700" }}>
            Giãn cơ (Stretching)
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#F08281" }}>
            Xem tất cả
          </Text>
        </View>
        <View>
          <CardHome_2 />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
