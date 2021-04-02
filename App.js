import { NavigationContainer } from "@react-navigation/native";
import { View } from "native-base";
import React, { Component } from "react";
import HomeScreenRouter from "./src/HomeScreen/index.js";

export default function App(){
return(
  <NavigationContainer>
    <HomeScreenRouter/>
  </NavigationContainer>
);
};
