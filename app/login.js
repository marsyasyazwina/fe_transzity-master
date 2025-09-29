import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import api from '../services/api.js';


const { width } = Dimensions.get("window");

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan password wajib diisi!");
      return;
    }

    console.log(email, password)

    try {
      const res = await api.post("/api/auth/login", { email, password });
   
      const token = res.data.token;

      if (token !== null) {
        await AsyncStorage.setItem("token", token);

        console.log("Login sukses, token disimpan");
        router.replace("/"); 
      } else {
        Alert.alert("Login gagal", "Token tidak diterima dari server");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      Alert.alert(
        "Login gagal",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
   
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.headerBg}
        resizeMode="cover"
      >
   
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/onboarding")}
        >
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>


      <View style={styles.card}>

        <View style={styles.headerText}>
          <Text style={styles.title}>Selamat Datang</Text>
          <Text style={styles.subtitle}>Masuk ke akun anda</Text>
        </View>


        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
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

        <TouchableOpacity style={{ alignSelf: "flex-end", marginBottom: 15 }}>
          <Text style={{ fontSize: 12, color: "#666" }}>Lupa kata sandi?</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>

 
        <Text style={styles.footer}>
          Belum memiliki akun?{" "}
          <Text style={styles.login} onPress={() => router.push("/signUp")}>
            Daftar
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
    color: "#000",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
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
