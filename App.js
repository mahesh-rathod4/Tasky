import * as React from "react";
import { useColorScheme, Image, TouchableOpacity } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "./src/modules/Home/HomeView";
import LoginView from "./src/modules/Login/LoginView";
import NewChatView from "./src/modules/NewChat/NewChatView";
import { initializeApp } from "firebase/app";
import ChatView from "./src/modules/Chat/ChatView";
import ProfileView from "./src/modules/Profile/ProfileView";
import configureStore from "./src/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const store = configureStore();

function App() {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{
              title: "Tasky",
              headerRight: () => (
                // <Button
                //   onPress={() => alert("This is a button!")}
                //   title="Info"
                //   color="#fff"
                // />
                <TouchableOpacity
                  onPress={() => {
                    // const {navigation }
                    //navigation.navigate("Profile");
                  }}
                >
                  <Image
                    source={{
                      uri: "https://reactjs.org/logo-og.png",
                    }}
                    style={{ width: 32, height: 32, borderRadius: 32 / 2 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileView}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewChat"
            component={NewChatView}
            options={{ headerShown: true, title: "Select User" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
