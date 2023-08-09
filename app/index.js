import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
const Home = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: "",
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{flex:1 , padding:SIZES.medium}}
          >
            <Welcome/>
            <Popularjobs/>
            <Nearbyjobs/>
          </View>
          </ScrollView>
        {/* <Text>Hello React Native</Text> */}
      </SafeAreaView>
    </>
  );
};

export default Home;
