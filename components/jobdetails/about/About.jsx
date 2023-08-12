import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ title, content, fitstName, lastName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>{title}</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>
          {fitstName} {lastName}
        </Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ textAlign: "justify" }}>{content}</Text>
        </View>
      </View>
    </View>
  );
};

export default About;
