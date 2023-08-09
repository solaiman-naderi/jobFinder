import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons } from "../../../constants";
const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Solix</Text>
        <Text style={styles.userName}>Finde your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
      </View>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;
