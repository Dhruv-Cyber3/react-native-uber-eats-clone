import { View, Text, Platform } from "react-native";
import RootNavigation from "./navigation";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";

if (Platform.OS === "android") {
  // only android needs polyfill
  require("intl"); // import intl object
  require("intl/locale-data/jsonp/en-IN"); // load the required locale details
}

export default function App() {
  return <RootNavigation />;
}
