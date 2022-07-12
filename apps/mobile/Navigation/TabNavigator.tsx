import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import ProfileScreen from "../screens/ProfileScreen";
import TodoScreen from "../screens/TodoScreen";
import { ParamListBase, RouteProp,  } from "@react-navigation/native";
import { RootTabParamList } from "../types";

type ScreenOptions = (props: {
  route: RouteProp<RootTabParamList, 'Todos' | 'Profile'>
  navigation: any;
}) => BottomTabNavigationOptions;

type IconTypes = "list" | "list-outline" | "person" | "person-outline";

const Tab = createBottomTabNavigator<RootTabParamList>();

const tabNavigatorOptions: ScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName: IconTypes;

    if (route.name === "Todos") {
      iconName = focused ? "list" : "list-outline";
    } else {
      iconName = focused ? "person" : "person-outline";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const TabNavigator = () => (
  <Tab.Navigator screenOptions={tabNavigatorOptions}>
    <Tab.Screen name="Todos" component={TodoScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
