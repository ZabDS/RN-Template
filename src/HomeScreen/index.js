import React, { Component } from "react";
import { Text, View } from "react-native";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import Profile from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
function HomeScreenRouter(){
  return(
  <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Chat" component={MainScreenNavigator} />
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
  );
};

export default HomeScreenRouter;