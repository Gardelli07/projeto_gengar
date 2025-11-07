import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";

export default function Blog({ navigation }) {
  const botoes = [
    {
      id: 1,
      nome: "Aquecimento",
      imagem: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      nome: "Mobilidade",
      imagem: "https://via.placeholder.com/400x200",
    },
    { id: 3, nome: "Força", imagem: "https://via.placeholder.com/400x200" },
    {
      id: 4,
      nome: "Propriocepção",
      imagem: "https://via.placeholder.com/400x200",
    },
  ];

  const abrirPost = (nome) => {
    navigation.navigate("Post", { titulo: nome });
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
    backgroundColor: "#3e3b3b",
    paddingHorizontal: 14, // pequena borda lateral
    justifyContent: "center",
  },
  botao: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 14,
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
    left: 12,
    bottom: 10,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
