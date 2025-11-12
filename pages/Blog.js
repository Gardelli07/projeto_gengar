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
      rota: "BlogAquecimento",
    },
    {
      id: 2,
      nome: "Alongamento",
      imagem: "https://via.placeholder.com/400x200",
      rota: "BlogAlongamento",
    },
    {
      id: 3,
      nome: "Força",
      imagem: "https://via.placeholder.com/400x200",
      rota: "BlogForca",
    },
    {
      id: 4,
      nome: "Propriocepção",
      imagem: "https://via.placeholder.com/400x200",
      rota: "BlogPropriocepcao",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Cabeçalho da página */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Blog</Text>
      </View>

      {/* Botões do blog */}
      <View style={styles.conteudo}>
        {botoes.map((b) => (
          <TouchableOpacity
            key={b.id}
            style={styles.botao}
            activeOpacity={0.9}
            onPress={() => navigation.navigate(b.rota)}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6ff",
  },
  header: {
    backgroundColor: "#e6e6e6ff",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1843a9",
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 20,
  },
  botao: {
    width: "100%",
    height: 100,
    borderWidth: 3,
    borderColor: "#e8bb44",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 14,
    backgroundColor: "#e6e6e6ff",
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
