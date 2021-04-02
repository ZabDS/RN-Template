import React from "react";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";

export default function NineChat({navigation}){
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
                <Title>Nine Chat</Title>
              </Body>
              <Right />
            </Header>
            <Content padder>
              <Item floatingLabel style={{ marginTop: 20 }}>
                <Label>Nine Chat</Label>
                <Input />
              </Item>
              <Button rounded danger
                style={{ marginTop: 20, alignSelf: "center" }}
                onPress={() => navigation.navigate("Profile")}>
                <Text>Goto Nine Profile</Text>
              </Button>
            </Content>
        </Container>
    );
}