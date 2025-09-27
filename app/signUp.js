import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.headerBg}
        resizeMode="cover"
      >
        {/* Tombol Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/onboarding")}
        >
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>


      <View style={styles.card}>
   
        <View style={styles.headerText}>
          <Text style={styles.title}>Selamat Datang di Transzity!</Text>
          <Text style={styles.subtitle}>Silahkan daftarkan akun anda</Text>
        </View>


        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="Nama Pengguna"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="Kata Sandi"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="Konfirmasi Kata Sandi"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#aaa"
        />

 
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/")}
        >
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>

 
        <Text style={styles.footer}>
          Sudah memiliki akun?{" "}
          <Text style={styles.login} onPress={() => router.push("/login")}>
            Masuk
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#3b6ef5",
    alignItems: "center",
  },
  headerBg: {
    width: "100%",
    height: 260,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  backButton: {
    marginTop: 40,
    marginLeft: 15,
    alignSelf: "flex-start",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 20,
    padding: 5,
  },
  card: {
    marginTop: 30,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: width * 0.9,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  headerText: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#537FE7",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#537FE7",
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 14,
    color: "#333",
  },
  button: {
    width: "100%",
    backgroundColor: "#3b6ef5",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    fontSize: 14,
    color: "#444",
  },
  login: {
    fontWeight: "bold",
    color: "#000",
  },
});
