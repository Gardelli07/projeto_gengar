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
      <Text style={styles.title}>🏋️ Blog de Treinos</Text>

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
    backgroundColor: "#3e3b3b",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6A0DAD",
    marginBottom: 20,
    textAlign: "center",
  },
  botao: {
    width: "100%",
    height: 110,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 18,
    backgroundColor: "#2f2d2d",
  },
  fundoImagem: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imagem: {
    resizeMode: "cover",
  },
  texto: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    left: 14,
    bottom: 12,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
