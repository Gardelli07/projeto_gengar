import React from "react";
import { Image } from "expo-image";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* GIF acima dos botões */}
      <Image
        source={require("../assets/home.png")}
        style={styles.gif}
        contentFit="contain"
        transition={1000}
      />

      <View style={styles.topRow}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("SOS")}
          style={styles.button}
          labelStyle={{ color: "#e8ba44", fontWeight: "900", fontSize: 18 }}
        >
          SOS
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Blog")}
          style={styles.button}
          labelStyle={{ color: "#e8ba44", fontWeight: "900", fontSize: 18 }}
        >
          Blog
        </Button>
      </View>

      <View style={styles.bottomRow}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Treinos")}
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
    backgroundColor: "#e6e6e6ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  gif: {
    width: 350, // largura do gif
    height: 350, // altura do gif
    marginBottom: 30, // espaço entre o gif e os botões
    borderRadius: 60,
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
