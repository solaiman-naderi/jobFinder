import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { SIZES, COLORS } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard ";
const Popularjobs = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Popularjobs</Text>
    </View>
  );
};

export default Popularjobs;
