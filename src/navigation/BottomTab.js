import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Vendors from "../screens/Vendors";
import Showroom from "../screens/Showroom";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF7F50",
        tabBarInactiveTintColor: "#828282",
        tabBarStyle: {
          height: 50,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
      initialRouteName="Vendors"
    >
      <Tab.Screen
        name="Vendors"
        component={Vendors}
        options={{
          title: "My Vendors",
          tabBarLabel: "Vendors",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Image
              source={require("../assets/menu.png")}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => (
            <Image
              source={require("../assets/add.png")}
              style={{ marginRight: 20 }}
            />
          ),
          tabBarIcon: ({ focused, color }) => (
            <View>
              {focused ? (
                <Image
                  source={require("../assets/vendor_filled.png")}
                  style={{ tintColor: color }}
                />
              ) : (
                <Image
                  source={require("../assets/vendor.png")}
                  style={{ tintColor: color }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Showroom"
        component={Showroom}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Image
                source={require("../assets/showroom.png")}
                style={{ tintColor: color }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
