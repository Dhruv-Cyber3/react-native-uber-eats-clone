import { View, Text, Platform } from "react-native";
import RootNavigation from "./navigation";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";

import { LogBox } from "react-native";
import _ from "lodash";

LogBox.ignoreLogs(["Setting a timer"]); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

if (Platform.OS === "android") {
  // only android needs polyfill
  require("intl"); // import intl object
  require("intl/locale-data/jsonp/en-IN"); // load the required locale details
}

export default function App() {
  return <RootNavigation />;
}
