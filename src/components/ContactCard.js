import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContactCard = ({ item }) => {
  return (
    <View style={styles.contactCard}>
      <View style={styles.outerContainer}>
        <View>
          <Image source={require("../assets/user1.png")} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  contactCard: {
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
  },
  outerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
  },
  location: {
    fontSize: 14,
    color: "grey",
  },
});
