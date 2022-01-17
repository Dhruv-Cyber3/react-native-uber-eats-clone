import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons";

const SearchBar = (props) => {
  const [value, setValue] = useState(props.city);
  const sendCityDataToHome = () => {
    props.cityHandler(value);
  };
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#eee",
        borderRadius: 50,
        alignItems: "center",
        marginRight: 10,
      }}
    >
      {/* <GooglePlacesAutocomplete
        query={{ key: "AIzaSyAsQ9zS4mPiE03h8Xe9I8c5qOuot8gcKfw" }}
        onPress={(data, details = null) => {
          console.log(data);
        }}
        
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      /> */}

      <View style={{ marginLeft: 10 }}>
        <Ionicons name="location-sharp" size={24} />
      </View>
      {/* input component */}
      <TextInput
        style={{
          flex: 1,
          // backgroundColor: "#eee",
          // borderRadius: 20,
          fontWeight: "700",
          // marginTop: 7,
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
        }}
        placeholder="Search"
        value={value}
        onChangeText={setValue}
        onSubmitEditing={() => {
          sendCityDataToHome();
        }}
        returnKeyType="done"
      />
      <View
        style={{
          flexDirection: "row",
          marginRight: 0,
          backgroundColor: "white",
          padding: 9,
          borderRadius: 30,
          alignItems: "center",
        }}
      >
        <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
        <Text>Search</Text>
      </View>
    </View>
  );
};

export default SearchBar;
