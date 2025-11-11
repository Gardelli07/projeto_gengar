import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Button } from "react-native-paper";

const EXERCICIOS = [
  {
    id: "1",
    nome: "Mobilidade sumô",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Sumo",
    desc: "Agachamento sumô com movimentação lateral dos joelhos, focando rotação do quadril.",
  },
  {
    id: "2",
    nome: "Escorpião (quadril)",
    type: "reps",
    value: 10,
    image: "https://via.placeholder.com/600x350?text=Escorpiao",
    desc: "Deitado de barriga para baixo, cruze a perna sobre o corpo para torção controlada.",
  },
  {
    id: "3",
    nome: "Postura do sapo",
    type: "time",
    value: 40,
    image: "https://via.placeholder.com/600x350?text=Sapo",
    desc: "Ajoelhado, movimente para frente e trás para abrir quadris e joelhos.",
  },
  {
    id: "4",
    nome: "Rotação interna alternada",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Rotacao+Interna",
    desc: "Sentada, alterne rotação interna das pernas para ambos os lados.",
  },
  {
    id: "5",
    nome: "Abdução e adução de quadril",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Abducao+Adducao",
    desc: "Com um joelho no chão, movimente o quadril lateralmente.",
  },
  {
    id: "6",
    nome: "Mobilidade lombar",
    type: "reps",
    value: 10,
    image: "https://via.placeholder.com/600x350?text=Lombar",
    desc: "Sentada, gire as pernas juntas para direita e esquerda.",
  },
  {
    id: "7",
    nome: "Movimento de bicicleta",
    type: "reps",
    value: 30,
    image: "https://via.placeholder.com/600x350?text=Bicicleta",
    desc: "Deitada, simule pedalada para ativar quadris e joelhos.",
  },
  {
    id: "8",
    nome: "Mobilidade de panturrilha",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Panturrilha",
    desc: "Com um pé à frente, empurre o joelho para frente mantendo calcanhar no chão.",
  },
  {
    id: "9",
    nome: "Rotação de tornozelo",
    type: "reps",
    value: 20,
    image: "https://via.placeholder.com/600x350?text=Tornozelo",
    desc: "Eleve a perna e gire o pé em todas as direções.",
  },
  {
    id: "10",
    nome: "Circundução de ombros",
    type: "reps",
    value: 20,
    image: "https://via.placeholder.com/600x350?text=Ombros",
    desc: "Faça círculos amplos com os ombros para frente e para trás.",
  },
  {
    id: "11",
    nome: "Mobilidade com bastão",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Bastao",
    desc: "Elevando e levando o bastão por trás do corpo dentro do seu limite.",
  },
  {
    id: "12",
    nome: "Flexão e extensão ativa (cotovelo)",
    type: "reps",
    value: 15,
    image: "https://via.placeholder.com/600x350?text=Cotovelo",
    desc: "Dobre e estenda o cotovelo lentamente.",
  },
  {
    id: "13",
    nome: "Pronação e supinação",
    type: "reps",
    value: 20,
    image: "https://via.placeholder.com/600x350?text=Antebraco",
    desc: "Gire o antebraço alternando palma para cima e para baixo.",
  },
  {
    id: "14",
    nome: "Circundução dos punhos",
    type: "reps",
    value: 20,
    image: "https://via.placeholder.com/600x350?text=Punhos",
    desc: "Faça movimentos circulares com os punhos.",
  },
  {
    id: "15",
    nome: "Flexão e extensão de punho",
    type: "reps",
    value: 15,
    image: "https://via.placeholder.com/600x350?text=Punho2",
    desc: "Flexione e estenda o punho apoiado em superfície.",
  },
  {
    id: "16",
    nome: "Abertura e fechamento completo",
    type: "reps",
    value: 20,
    image: "https://via.placeholder.com/600x350?text=Maos",
    desc: "Feche as mãos e abra o máximo possível estendendo os dedos.",
  },
];

export default function MobilidadeList({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.nome}</Text>
          <Text style={styles.subtitle}>
            {item.type === "time"
              ? `${item.value} segundos`
              : `${item.value} repetições`}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={EXERCICIOS}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate("MobilidadeExercise", {
              exercises: EXERCICIOS,
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
