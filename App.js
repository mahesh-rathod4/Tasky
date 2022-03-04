import * as React from "react";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "./src/modules/Home/homeView";
import LoginView from "./src/modules/Login/LoginView";
import NewChatView from "./src/modules/NewChat/NewChatView";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import { configureStore } from "./src/store";

const Stack = createNativeStackNavigator();
const store = configureStore();

function App() {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="NewChat">
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{ title: "Tasky" }}
          />
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewChat"
            component={NewChatView}
            options={{ headerShown: true, title: "New Messgae" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
