import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Button } from "react-native-paper";

export default function MobilidadeExercise({ route, navigation }) {
  const { exercises = [], index = 0 } = route.params ?? {};
  const [currentIndex, setCurrentIndex] = useState(index);
  const exercise = exercises[currentIndex];

  // Timer state
  const [running, setRunning] = useState(false);
  const [remaining, setRemaining] = useState(
    exercise?.type === "time" ? exercise.value : 0
  );
  const intervalRef = useRef(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // when exercise changes, reset timer/flags
    setRunning(false);
    setFinished(false);
    setRemaining(exercise?.type === "time" ? exercise.value : 0);
    clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  useEffect(() => {
    if (running && exercise?.type === "time") {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            setFinished(true);
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  function handleStartTimer() {
    if (exercise?.type !== "time") return;
    setRunning(true);
    setFinished(false);
  }

  function handleCompleteReps() {
    // For reps: simply mark as completed and go next
    goNext();
  }

  function goNext() {
    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      Alert.alert("Sessão finalizada", "Você concluiu todos os exercícios!");
      navigation.goBack();
    }
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  if (!exercise) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Nenhum exercício encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{exercise.nome}</Text>

      <Image
        source={{ uri: exercise.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.desc}>{exercise.desc}</Text>

      <View style={styles.footer}>
        {exercise.type === "reps" ? (
          <>
            <Text style={styles.info}>{exercise.value} repetições</Text>
            <Button
              mode="contained"
              onPress={handleCompleteReps}
              style={styles.actionButton}
              labelStyle={styles.actionLabel}
            >
              Concluído
            </Button>
          </>
        ) : (
          <>
            <Text style={styles.info}>{exercise.value} segundos</Text>

            {!running && !finished && (
              <Button
                mode="contained"
                onPress={handleStartTimer}
                style={styles.actionButton}
                labelStyle={styles.actionLabel}
              >
                Iniciar
              </Button>
            )}

            {running && (
              <View style={styles.timerBox}>
                <Text style={styles.timerText}>{formatTime(remaining)}</Text>
              </View>
            )}

            {finished && (
              <>
                <View style={styles.timerBox}>
                  <Text style={styles.timerText}>00:00</Text>
                </View>
                <Button
                  mode="contained"
                  onPress={goNext}
                  style={styles.actionButton}
                  labelStyle={styles.actionLabel}
                >
                  Próximo
                </Button>
              </>
            )}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f1f2", padding: 18 },
  titulo: {
    fontSize: 22,
    color: "#1843a9",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#ddd",
  },
  desc: { fontSize: 16, color: "#333", lineHeight: 22, marginBottom: 14 },
  footer: { alignItems: "center" },
  info: { fontSize: 16, color: "#666", marginBottom: 8 },
  actionButton: {
    width: "60%",
    backgroundColor: "#1843a9",
    borderRadius: 10,
    marginTop: 8,
  },
  actionLabel: { color: "#e8bb44", fontWeight: "900" },
  timerBox: {
    marginVertical: 8,
    padding: 18,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#e8bb44",
  },
  timerText: {
    fontSize: 36,
    fontWeight: "900",
    color: "#1843a9",
    textAlign: "center",
  },
});
