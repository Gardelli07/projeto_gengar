import React from "react";
import { Image } from "expo-image";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* GIF acima dos botões */}
      <Image
        source={require("../assets/home.gif")}
        style={styles.gif}
        contentFit="contain"
        transition={1000}
      />

      <View style={styles.topRow}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Produtos")}
          style={styles.button}
          labelStyle={{ color: "#e8ba44", fontWeight: "900", fontSize: 18 }}
        >
          SOS
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Produtos")}
          style={styles.button}
          labelStyle={{ color: "#e8ba44", fontWeight: "900", fontSize: 18 }}
        >
          Blog
        </Button>
      </View>

      <View style={styles.bottomRow}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Produtos")}
          style={styles.button}
          labelStyle={{ color: "#e8ba44", fontWeight: "900", fontSize: 18 }}
        >
          Treinos
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f1f2",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  gif: {
    width: 200, // largura do gif
    height: 200, // altura do gif
    marginBottom: 30, // espaço entre o gif e os botões
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 15,
  },
  bottomRow: {
    width: "50%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1843a9",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
});
