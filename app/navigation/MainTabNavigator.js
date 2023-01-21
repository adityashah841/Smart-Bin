import React from "react";
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { Platform } from "react-native";

import TabBarIcon from "../components1/TabBarIcon";
import SignInScreen from "../screens/SignInScreen";
import GeneralInfoScreen from "../screens/GeneralInfoScreen";
// import SettingsScreen from "../screens/SettingsScreen";
import LearnMoreScreen from "../screens/LearnMoreScreen";
import AboutScreen from "../screens/AboutScreen";
import MyStatScreen from "../screens/MyStatScreen";

// const config = Platform.select({
//   web: { headerMode: "screen" },
//   default: {}
// });

// const SignInStack = createNativeStackNavigator(
//   {
//     SignIn: SignInScreen
//   },
//   config
// );

// SignInStack.navigationOptions = {
//   tabBarLabel: "My stats",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios" ? `ios-person${focused ? "" : ""}` : "md-person"
//       }
//     />
//   )
// };

// SignInStack.path = "";

// const GeneralInfoStack = createNativeStackNavigator(
//   {
//     GeneralInfo: GeneralInfoScreen
//   },
//   config
// );

// GeneralInfoStack.navigationOptions = {
//   tabBarLabel: "Neighbours",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? `ios-people` : "md-people"}
//     />
//   )
// };

// GeneralInfoStack.path = "";

// const LearnMoreStack = createNativeStackNavigator(
//   {
//     LearnMore: LearnMoreScreen
//   },
//   config
// );

// LearnMoreStack.navigationOptions = {
//   tabBarLabel: "Learn More",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-bulb" : "md-bulb"}
//     />
//   )
// };

// LearnMoreStack.path = "";

// const AboutStack = createNativeStackNavigator(
//   {
//     About: AboutScreen
//   },
//   config
// );

// AboutStack.navigationOptions = {
//   tabBarLabel: "About",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? "ios-information-circle-outline"
//           : "md-information-circle-outline"
//       }
//     />
//   )
// };

// AboutStack.path = "";

// const SettingsStack = createNativeStackNavigator(
//   {
//     Settings: SettingsScreen
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: "Settings",
//   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={""} />
// };

// SettingsStack.path = "";

// const MyStatStack = createNativeStackNavigator(
//   {
//     MyStat: MyStatScreen
//   },
//   config
// );

// MyStatStack.navigationOptions = {
//   tabBarLabel: "My Stat",
//   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={""} />
// };

// MyStatStack.path = "";

const Tabs = createBottomTabNavigator();
//   {
//     SignInStack,
//     GeneralInfoStack,
//     LearnMoreStack,
//     AboutStack
//     /* MyStatStack */
//     //SettingsStack}
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: "#009245",
//       labelStyle: {
//         fontSize: 14
//       },
//       style: {
//         backgroundColor: "white"
//       }
//     }
//   }
// );

// tabNavigator.path = "";


function MainTabNavigator() {
  return (<Tabs.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 14 } }}>
    <Tabs.Screen name="My stats" options={{
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios" ? `ios-person${focused ? "" : ""}` : "md-person"
          }
        />
      )
    }} component={SignInScreen} />
    <Tabs.Screen name="Neighbours" options={{
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === "ios" ? `ios-people` : "md-people"}
        />
      )
    }} component={GeneralInfoScreen} />
    <Tabs.Screen name="Learn More" options={{
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === "ios" ? "ios-bulb" : "md-bulb"}
        />
      )
    }} component={LearnMoreScreen} />
    <Tabs.Screen name="About" options={{
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? "ios-information-circle-outline"
              : "md-information-circle-outline"
          }
        />
      )
    }} component={AboutScreen} />

  </Tabs.Navigator >)

}

export default MainTabNavigator