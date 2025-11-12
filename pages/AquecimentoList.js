import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-paper";

const AQUECIMENTO = [
  {
    id: "1",
    nome: "Deslocamentos laterais",
    type: "time",
    value: 120,
    image: "https://via.placeholder.com/600x350?text=Deslocamentos+Laterais",
    desc: "Corra em ritmo leve lateralmente por toda a quadra, alternando a direção a cada 30 segundos.",
  },
  {
    id: "2",
    nome: "Elevação de joelhos",
    type: "time",
    value: 30,
    image: "https://via.placeholder.com/600x350?text=Elevacao+de+joelhos",
    desc: "Corra no mesmo lugar elevando bem os joelhos (skipping).",
  },
  {
    id: "3",
    nome: "Polichinelos",
    type: "time",
    value: 30,
    image: "https://via.placeholder.com/600x350?text=Polichinelos",
    desc: "Realize polichinelos contínuos a um ritmo leve a moderado.",
  },
  {
    id: "4",
    nome: "Mobilidade articular",
    type: "time",
    value: 120,
    image: "https://via.placeholder.com/600x350?text=Mobilidade+Articular",
    desc: "Faça rotações lentas dos ombros, quadril, joelhos e tornozelos em ambos os sentidos.",
  },
  {
    id: "5",
    nome: "Passe no lugar",
    type: "time",
    value: 30,
    image: "https://via.placeholder.com/600x350?text=Passe+no+Lugar",
    desc: "Lance a bola acima da cabeça e devolva em passe alto, mantendo-se parado. Pode ser feito contra uma parede.",
  },
  {
    id: "6",
    nome: "Passe em movimento",
    type: "time",
    value: 90,
    image: "https://via.placeholder.com/600x350?text=Passe+em+movimento",
    desc: "Caminhe de um lado ao outro da quadra fazendo o passe alto enquanto se desloca.",
  },
  {
    id: "7",
    nome: "Manchete no lugar",
    type: "time",
    value: 30,
    image: "https://via.placeholder.com/600x350?text=Manchete+no+lugar",
    desc: "Lance a bola acima da cabeça e devolva com a manchete, mantendo-se parado e controlando a bola.",
  },
  {
    id: "8",
    nome: "Manchete em movimento",
    type: "time",
    value: 90,
    image: "https://via.placeholder.com/600x350?text=Manchete+em+movimento",
    desc: "Caminhe de um lado ao outro da quadra fazendo a manchete enquanto se desloca.",
  },
  {
    id: "9",
    nome: "Passe com precisão (dupla)",
    type: "time",
    value: 60,
    image: "https://via.placeholder.com/600x350?text=Passe+com+Precisao",
    desc: "Em duplas, façam passes alternados sem deixar a bola cair, a cerca de 3 metros de distância.",
  },
  {
    id: "10",
    nome: "Ataque na rede (dupla)",
    type: "time",
    value: 60,
    image: "https://via.placeholder.com/600x350?text=Ataque+na+Rede",
    desc: "Um jogador lança a bola e o outro realiza o ataque em direção ao parceiro. Depois, troquem de função.",
  },
];

export default function AquecimentoList({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.subtitle}>{item.value} segundos</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={AQUECIMENTO}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate("AquecimentoExercise", {
              exercises: AQUECIMENTO,
              index: 0,
            })
          }
          style={styles.startButton}
          labelStyle={styles.startLabel}
        >
          Iniciar sessão
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f1f2", padding: 14 },
  card: {
    width: "100%",
    height: 90,
    borderWidth: 3,
    borderColor: "#e8bb44",
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { color: "#1843a9", fontSize: 18, fontWeight: "700" },
  subtitle: { color: "#666", fontSize: 14 },
  footer: { paddingVertical: 12, alignItems: "center" },
  startButton: { width: "60%", backgroundColor: "#1843a9", borderRadius: 10 },
  startLabel: { color: "#e8bb44", fontWeight: "900", fontSize: 16 },
});
