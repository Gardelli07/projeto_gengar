import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-paper";

const FORCA = [
  {
    id: "1",
    nome: "Agachamento",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Agachamento",
    desc: "Flexione os joelhos e quadris até formar 90°, mantendo abdômen firme e joelhos alinhados com os pés.",
  },
  {
    id: "2",
    nome: "Afundo",
    type: "reps",
    value: 10,
    image: "https://via.placeholder.com/600x350?text=Afundo",
    desc: "Dê um passo à frente e flexione ambos os joelhos até formarem 90°, mantendo o equilíbrio e retornando lentamente.",
  },
  {
    id: "3",
    nome: "Saltos pliométricos",
    type: "reps",
    value: 8,
    image: "https://via.placeholder.com/600x350?text=Saltos+Pliometricos",
    desc: "Agache e, ao subir, salte o mais alto possível. Aterre suavemente, flexionando os joelhos para amortecer o impacto.",
  },
  {
    id: "4",
    nome: "Prancha frontal",
    type: "time",
    value: 45,
    image: "https://via.placeholder.com/600x350?text=Prancha+Frontal",
    desc: "Apoie antebraços e pontas dos pés no chão, mantendo o corpo alinhado e o abdômen contraído.",
  },
  {
    id: "5",
    nome: "Ponte unilateral",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Ponte+Unilateral",
    desc: "Deite-se e eleve o quadril apoiando-se em apenas uma perna. Troque o lado a cada série.",
  },
  {
    id: "6",
    nome: "Salto em 1 perna",
    type: "reps",
    value: 10,
    image: "https://via.placeholder.com/600x350?text=Salto+1+Perna",
    desc: "Realize pequenos saltos com uma perna, controlando o equilíbrio. Troque a perna a cada série.",
  },
  {
    id: "7",
    nome: "Ponte",
    type: "reps",
    value: 15,
    image: "https://via.placeholder.com/600x350?text=Ponte",
    desc: "Deite-se, flexione os joelhos e eleve o quadril até alinhar ombros e joelhos. Contraia o glúteo no topo.",
  },
  {
    id: "8",
    nome: "Flexão de braços",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Flexao+de+bracos",
    desc: "Mantenha o corpo reto e mãos alinhadas aos ombros. Desça até o peito quase tocar o chão e empurre de volta.",
  },
  {
    id: "9",
    nome: "Flexão com joelhos apoiados",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Flexao+com+joelhos",
    desc: "Versão mais leve da flexão, com os joelhos apoiados no chão. Ideal para iniciantes.",
  },
  {
    id: "10",
    nome: "Prancha lateral",
    type: "time",
    value: 30,
    image: "https://via.placeholder.com/600x350?text=Prancha+Lateral",
    desc: "Apoie-se em um antebraço e na lateral de um pé, mantendo o corpo reto e o abdômen firme.",
  },
  {
    id: "11",
    nome: "Abdominal tradicional",
    type: "reps",
    value: 15,
    image: "https://via.placeholder.com/600x350?text=Abdominal+Tradicional",
    desc: "Flexione o tronco elevando os ombros do chão e volte lentamente, evitando puxar o pescoço.",
  },
  {
    id: "12",
    nome: "Abdominal bicicleta",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Abdominal+Bicicleta",
    desc: "Simule pedalar no ar, tocando o cotovelo direito no joelho esquerdo e vice-versa.",
  },
  {
    id: "13",
    nome: "Elevação de panturrilhas",
    type: "reps",
    value: 15,
    image: "https://via.placeholder.com/600x350?text=Panturrilhas",
    desc: "Fique em pé e eleve os calcanhares, sustentando 2 segundos antes de descer.",
  },
  {
    id: "14",
    nome: "Prancha dinâmica",
    type: "reps",
    value: 10,
    image: "https://via.placeholder.com/600x350?text=Prancha+Dinâmica",
    desc: "Alterne entre prancha baixa e alta, controlando o movimento e evitando girar o corpo.",
  },
  {
    id: "15",
    nome: "Agachamento com isometria",
    type: "time",
    value: 30,
    image: "https://via.placeholder.com/600x350?text=Agachamento+Isometria",
    desc: "Desça até metade do agachamento e mantenha a posição parada por 30 segundos.",
  },
  {
    id: "16",
    nome: "Extensão de quadril em quatro apoios",
    type: "reps",
    value: 12,
    image: "https://via.placeholder.com/600x350?text=Extensao+Quadril",
    desc: "Em quatro apoios, eleve uma perna mantendo o joelho a 90°, e retorne sem arquear as costas.",
  },
];

export default function ForcaPropriocepcaoList({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.subtitle}>
          {item.type === "time" ? `${item.value}s` : `${item.value} repetições`}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={FORCA}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate("ForcaPropriocepcaoExercise", {
              exercises: FORCA,
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
