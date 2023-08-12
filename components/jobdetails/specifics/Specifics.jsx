import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.pointsContainer}></View>
      <View style={styles.pointsContainer}>
        <View style={styles.pointWrapper}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-start",
            }}
          >
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>Fullstack Developer </Text>
          </View>

          <View style={styles.pointDot} />
          <Text style={styles.pointText}>React </Text>

          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Three js </Text>

          <View style={styles.pointDot} />
          <Text style={styles.pointText}>React Native</Text>
        </View>
      </View>
    </View>
  );
};

export default Specifics;
