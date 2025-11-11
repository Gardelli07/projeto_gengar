import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function BlogAquecimento() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.titulo}>SOS VÔLEI — Prevenir e Socorrer Lesões</Text>

      <Text style={styles.subtitulo}>Como Prevenir Lesões:</Text>

      <Text style={styles.item}>
        <Text style={styles.numero}>1. Cuidados constantes{"\n"}</Text>• Use
        tênis com bom amortecimento e solado firme.{"\n"}• Evite jogar em
        superfície irregular ou escorregadia.{"\n"}• Hidrate-se antes, durante e
        depois do jogo.
      </Text>

      <Text style={styles.item}>
        <Text style={styles.numero}>2. Atenção aos sinais do corpo{"\n"}</Text>•{" "}
        <Text style={styles.negrito}>Dor leve e passageira:</Text> observe e
        reduza o esforço.{"\n"}•{" "}
        <Text style={styles.negrito}>Dor persistente:</Text> pare o jogo,
        aplique gelo e procure um profissional.{"\n"}
        Ignorar dor é o erro mais comum no vôlei.
      </Text>

      <Text style={styles.subtitulo}>
        Socorro Rápido (durante ou após o jogo)
      </Text>

      <Text style={styles.item}>
        <Text style={styles.numero}>
          1. Entorse ou torção (tornozelo, joelho){"\n"}
        </Text>
        <Text style={styles.negrito}>SOS imediato: método RICE</Text>
        {"\n"}R – Repouso: pare o jogo.{"\n"}I – Ice (gelo): aplique 15–20 min,
        a cada 2h nas primeiras 24h.{"\n"}C – Compressão: enfaixe com faixa
        elástica, sem apertar demais.{"\n"}E – Elevação: mantenha o membro
        elevado.{"\n"}
        Se houver inchaço intenso ou dor forte → procurar pronto atendimento.
      </Text>

      <Text style={styles.item}>
        <Text style={styles.numero}>2. Dor muscular ou cãibra{"\n"}</Text>• Pare
        o esforço e alongue o músculo afetado.{"\n"}• Beba água ou isotônico.
        {"\n"}• Faça massagem leve e aplique calor morno se persistir.{"\n"}
        <Text style={styles.negrito}>Prevenção:</Text> boa hidratação e
        alimentação com potássio (banana, água de coco).
      </Text>

      <Text style={styles.item}>
        <Text style={styles.numero}>3. Impacto ou queda{"\n"}</Text>• Aplique
        gelo imediato na área.{"\n"}• Se houver hematoma, evite calor nas
        primeiras 48h.{"\n"}• Mantenha repouso relativo.
      </Text>

      <Text style={styles.item}>
        <Text style={styles.numero}>
          4. Dores no ombro (muito comum em saque e ataque){"\n"}
        </Text>
        • Pausa imediata.{"\n"}• Compressa gelada por 15–20 min.{"\n"}• Evite
        movimentos acima da cabeça até melhora.{"\n"}
        Se persistir, procure fisioterapeuta ou ortopedista.
      </Text>

      <Text style={styles.item}>
        <Text style={styles.numero}>5. Situações de emergência{"\n"}</Text>•
        Queda com suspeita de fratura: imobilize e chame ambulância.{"\n"}•
        Tontura, falta de ar, palpitação: interrompa o jogo e busque socorro
        médico.
      </Text>
      <ScrollView contentContainerStyle={{ marginBottom: 25 }}></ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6ff",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1843a9",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e8bb44",
    marginBottom: 8,
    marginTop: 10,
  },
  item: {
    fontSize: 16,
    color: "#333",
    marginBottom: 14,
    lineHeight: 24,
  },
  numero: {
    fontWeight: "bold",
    color: "#1843a9",
  },
  negrito: {
    fontWeight: "bold",
  },
});
