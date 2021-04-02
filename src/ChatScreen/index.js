import React, { Component } from "react";
import LucyChat from "./LucyChat.js";
import JadeChat from "./JadeChat.js";
import NineChat from "./NineChat.js";
import { Button, Text, Icon, Footer, FooterTab } from "native-base"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabBar({state,descriptors,navigation}){
    return(
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={state.index === 0}
              onPress={() => navigation.navigate("LucyChat")}>
              <Icon name="paw" />
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              active={state.index === 1}
              onPress={() => navigation.navigate("NineChat")}>
              <Icon name="briefcase" />
              <Text>Nine</Text>
            </Button>
            <Button
              vertical
              active={state.index === 2}
              onPress={() => navigation.navigate("JadeChat")}>
              <Icon name="headset" />
              <Text>Jade</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
}

export default function MainScreenNavigator(){
    return(
        <Tab.Navigator tabBar={props=><MyTabBar {...props}/>}>
            <Tab.Screen name="LucyChat" component={LucyChat}/>
            <Tab.Screen name="NineChat" component={NineChat}/>
            <Tab.Screen name="JadeChat" component={JadeChat}/>
        </Tab.Navigator>
    );
}
