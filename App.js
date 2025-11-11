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
import BlogAquecimento from "./pages/blogaquecimento";
import BlogMobilidade from "./pages/blogmobilidade";
import BlogForca from "./pages/blogforca";
import BlogPropriocepcao from "./pages/blogpropriocepcao";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1942ab" }, // fundo azul
        tabBarActiveTintColor: "#e2ca80ff", // selecionado branco
        tabBarInactiveTintColor: "#e0b336ff", // inativo amarelo
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Treinos") iconName = "dumbbell";
          else if (route.name === "SOS") iconName = "alarm-light-outline";
          else if (route.name === "Blog")
            iconName = "newspaper-variant-outline";

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
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
                    backgroundColor: "#e8ba44",
                    justifyContent: "center",
                  }}
                >
                  <Appbar.Content
                    title="Fisioace"
                    titleStyle={{
                      color: "#1843a9",
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
              headerStyle: { backgroundColor: "#e6e6e6ff" },
              headerTintColor: "#1843a9",
              title: "Detalhes do Produto",
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: { backgroundColor: "#e6e6e6ff" },
              headerTintColor: "#1843a9",
              title: "Detalhes do Produto",
            }}
          />
          <Stack.Screen
            name="BlogAquecimento"
            component={BlogAquecimento}
            options={{
              title: "Aquecimento",
              headerTintColor: "#1843a9",
              headerStyle: { backgroundColor: "#e8ba44" },
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
          <Stack.Screen
            name="BlogMobilidade"
            component={BlogMobilidade}
            options={{
              title: "Mobilidade",
              headerTintColor: "#1843a9",
              headerStyle: { backgroundColor: "#e8ba44" },
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
          <Stack.Screen
            name="BlogForca"
            component={BlogForca}
            options={{
              title: "Força",
              headerTintColor: "#1843a9",
              headerStyle: { backgroundColor: "#e8ba44" },
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
          <Stack.Screen
            name="BlogPropriocepcao"
            component={BlogPropriocepcao}
            options={{
              title: "Propriocepção",
              headerTintColor: "#1843a9",
              headerStyle: { backgroundColor: "#e8ba44" },
              headerTitleStyle: { fontWeight: "bold" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
