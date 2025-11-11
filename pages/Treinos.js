import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text } from "react-native-paper";

export default function Blog({ navigation }) {
  const botoes = [
    {
      id: 1,
      nome: "Aquecimento",
      imagem: "https://via.placeholder.com/400x200.png?text=Aquecimento",
    },
    {
      id: 2,
      nome: "Mobilidade",
      imagem: "https://via.placeholder.com/400x200.png?text=Mobilidade",
    },
    {
      id: 3,
      nome: "Força + Propriocepção",
      imagem:
        "https://via.placeholder.com/400x200.png?text=Força+Propriocepção",
    },
  ];

  const abrirPost = (titulo) => {
    navigation.navigate("Post", { titulo });
  };

  return (
    <View style={styles.container}>
      {botoes.map((b) => (
        <TouchableOpacity
          key={b.id}
          style={styles.botao}
          activeOpacity={0.9}
          onPress={() => abrirPost(b.nome)}
        >
          <ImageBackground
            source={{ uri: b.imagem }}
            style={styles.fundoImagem}
            imageStyle={styles.imagem}
          >
            <Text style={styles.texto}>{b.nome}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f1f2",
    paddingHorizontal: 14,
    justifyContent: "center",
  },
  botao: {
    width: "100%",
    height: 100,
    borderWidth: 3, // borda mais visível
    borderColor: "#e8bb44", // 🔶 borda amarela
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 14,
    backgroundColor: "#f3f1f2",
  },
  fundoImagem: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imagem: {
    resizeMode: "cover",
  },
  texto: {
    color: "#1843a9",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    left: 12,
    bottom: 10,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
