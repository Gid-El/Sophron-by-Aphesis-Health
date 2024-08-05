import { Text, View } from "react-native";
import Home from "./screens/home";
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <View>
      <Redirect href="/(tabs)" />
    </View>
  );
}
