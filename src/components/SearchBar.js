import React from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";

const SearchBar = ({ setSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/search.png")} />
        <TextInput
          placeholder="Search"
          inlineImageLeft="search_icon"
          style={styles.input}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  inputContainer: {
    backgroundColor: "rgba(118, 118, 128, 0.12)",
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 5,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "93%",
    paddingLeft: 3,
  },
});
