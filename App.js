import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const imagens = [
    "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/05/gato-laranja-e1748043537291.jpg?w=1200&h=1200&crop=1",
    "https://adimax.com.br/wp-content/uploads/2025/01/shutterstock_2492403467-scaled.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRBo7SSh7CRJeqdSfB-Cyv9JkDiF-Z1oT6w&s",
    "https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_1200/public/2025-01/ra%C3%A7as%20de%20gatos.jpg.webp?itok=MrSziZqu",
    "https://blog.appegada.com/thumb/blog/1/780/500/631f8d71e4d6f0d6dbed715070d453bc.jpg",
    "https://img.freepik.com/fotos-gratis/kitty-com-parede-monocromatica-atras-dela_23-2148955132.jpg?semt=ais_hybrid&w=740&q=80",
  ];

  const [index, setIndex] = useState(0);
  const [borderColor, setBorderColor] = useState("#000");

  function proximaImagem() {
    // pega próxima imagem (ciclo infinito)
    setIndex((prev) => (prev + 1) % imagens.length);
  }

  function handleLike() {
    setBorderColor("green");
    setTimeout(() => {
      setBorderColor("#000");
      proximaImagem();
    }, 1000);
  }

  function handleDislike() {
    setBorderColor("red");
    setTimeout(() => {
      setBorderColor("#000");
      proximaImagem();
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tinder de gatos</Text>
      <Text style={styles.title}>da um A sora</Text>
      <Image
        source={{ uri: imagens[index] }}
        style={[styles.image, { borderColor: borderColor }]}
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "green" }]} onPress={handleLike}>
          <Text style={styles.textBtn}>like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "red" }]} onPress={handleDislike}>
          <Text style={styles.textBtn}>dislike</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 250,
    borderWidth: 5,
    borderColor: "#000",
    borderRadius: 20,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    padding: 15,
    borderRadius: 10,
  },
  textBtn: {
    color: "#fff",
    fontWeight: "bold",
  },
});
