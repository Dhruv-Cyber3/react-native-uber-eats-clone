import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browse" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  );
};

export default BottomTabs;

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.name}
          size={25}
          style={{ marginBottom: 3, alignSelf: "center" }}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
