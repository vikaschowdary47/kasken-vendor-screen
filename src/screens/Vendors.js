import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ContactCard from "../components/ContactCard";
import SearchBar from "../components/SearchBar";

const vendors = [
  {
    id: 1,
    name: "Kolour Koncepts Intl.",
    location: "Bangalore, India",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 2,
    name: "Smart Tekstil",
    location: "Istanbul, Turkey",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 3,
    name: "Apparel Promoters",
    location: "Chittagong, Bangladesh",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 4,
    name: "YJC China Co.",
    location: "Guangzhou, China",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 5,
    name: "Khimjee Industries ",
    location: "Delhi, India",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 6,
    name: "C and S Medical Equipment Group",
    location: "Phnom Penh, Cambodia",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 7,
    name: "Sara footwear Co. Ltd",
    location: "Ho Chi Minh, Vietnam",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 11,
    name: "Kolour Koncepts Intl.",
    location: "Bangalore, India",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 22,
    name: "Smart Tekstil",
    location: "Istanbul, Turkey",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 33,
    name: "Apparel Promoters",
    location: "Chittagong, Bangladesh",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 44,
    name: "YJC China Co.",
    location: "Guangzhou, China",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 55,
    name: "Khimjee Industries ",
    location: "Delhi, India",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 66,
    name: "C and S Medical Equipment Group",
    location: "Phnom Penh, Cambodia",
    image: 'require("../assets/user1.png")',
  },
  {
    id: 77,
    name: "Sara footwear Co. Ltd",
    location: "Ho Chi Minh, Vietnam",
    image: 'require("../assets/user1.png")',
  },
];
const Vendors = () => {
  const [search, setSearch] = React.useState("");

  const filteredValue = vendors.filter((vendor) => {
    return vendor.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <View style={styles.container}>
      <SearchBar setSearch={setSearch} />
      <FlatList
        data={filteredValue}
        keyExtractor={(item) => item.id}
        renderItem={ContactCard}
        extraData={search}
      />
    </View>
  );
};

export default Vendors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
