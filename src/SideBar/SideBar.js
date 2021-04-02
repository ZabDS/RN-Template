import React from "react";
import { Image, ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["Home", "Chat", "Profile"];

export default function SideBar({navigation}){
  return (
    <Container>
      <Content>
      <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1616861502237-425e8089c690?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHhqUFI0aGxrQkdBfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>{/*
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: ""
              }}
            />*/}
          </ImageBackground>
          <List
          dataArray={routes}
          renderRow={data => {
            return (
              <ListItem
                button
                onPress={() => navigation.navigate(data)}>
                <Text>{data}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
}