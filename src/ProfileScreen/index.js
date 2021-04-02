import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EditScreenOne from "./EditScreenOne.js"
import EditScreenTwo from "./EditScreenTwo.js"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";

const Stack = createStackNavigator();

export default function DrawNav(){
    return(
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="EditScreenOne" component={EditScreenOne}/>
            <Stack.Screen name="EditScreenTwo" component={EditScreenTwo}/>
        </Stack.Navigator>
    );
}

