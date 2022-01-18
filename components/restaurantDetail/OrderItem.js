import React from "react";
import { View, Text } from "react-native";

const OrderItem = ({ item }) => {
  const { title, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 14 }}>{title}</Text>
      <Text style={{ opacity: 0.7, fontSize: 14 }}>{price}</Text>
    </View>
  );
};

export default OrderItem;
