import * as React from "react";
import { Provider as PaperProvider, Appbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./pages/Home";
import Treinos from "./pages/Treinos";
import SOS from "./pages/SOS";
import SplashScreen from "./pages/SplashScreen";
import Blog from "./pages/Blog";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#3e3b3b" },
        tabBarActiveTintColor: "#6A0DAD",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Treinos") iconName = "dumbbell";
          else if (route.name === "SOS") iconName = "alarm-light-outline";
          else if (route.name === "Blog")
            iconName = "newspaper-variant-outline";

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Treinos" component={Treinos} />
      <Tab.Screen name="SOS" component={SOS} />
      <Tab.Screen name="Blog" component={Blog} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              header: () => (
                <Appbar.Header
                  style={{
                    backgroundColor: "#3e3b3b",
                    justifyContent: "center",
                  }}
                >
                  <Appbar.Content
                    title="Voleizinho"
                    titleStyle={{
                      color: "#6A0DAD",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  />
                </Appbar.Header>
              ),
            }}
          />
          <Stack.Screen
            name="Blog"
            component={Blog}
            options={{
              headerStyle: { backgroundColor: "#3e3b3b" },
              headerTintColor: "#6A0DAD",
              title: "Detalhes do Produto",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
