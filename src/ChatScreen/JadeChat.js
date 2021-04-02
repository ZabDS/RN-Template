import React from "react";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";

export default function JadeChat({navigation}){
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
                <Title>Jade Chat</Title>
              </Body>
              <Right />
            </Header>
            <Content padder>
              <Item floatingLabel style={{ marginTop: 20 }}>
                <Label>Jade Chat</Label>
                <Input />
              </Item>
              <Button rounded danger
                style={{ marginTop: 20, alignSelf: "center" }}
                onPress={() => navigation.navigate("Profile")}>
                <Text>Goto Jade Profile</Text>
              </Button>
            </Content>
        </Container>
    );
}