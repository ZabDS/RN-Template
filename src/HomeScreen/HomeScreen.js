import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

const routes = ["Home", "Chat", "Profile"];

export default function HomeScreen({navigation}){
 return(
  <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate("Chat")}>
            <Text>Chat With People</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate("Profile")}>
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
 );
}