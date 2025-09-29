import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HalteReview() {
  const router = useRouter();
  const [rating, setRating] = useState(4);
  const [review, setReview] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 14,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "700", marginLeft: 12 }}>
          Berikan Ulasan
        </Text>
      </View>

      <Image
        source={require("../assets/images/halte.png")}
        style={{ width: "100%", height: 280, resizeMode: "contain" }}
      />

      <View
        style={{
          backgroundColor: "#fff",
          marginHorizontal: 16,
          padding: 16,
          borderRadius: 12,
          marginTop: -30,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Halte Halimun</Text>
        <Text style={{ color: "#666", marginBottom: 8 }}>
          Jl Raya Setiabudi
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {[...Array(5)].map((_, i) => (
            <Ionicons
              key={i}
              name={i < 4 ? "star" : "star-outline"}
              size={18}
              color="#FFD700"
              style={{ marginRight: 2 }}
            />
          ))}
          <Text style={{ marginLeft: 6, color: "#666" }}>440+ Peninjau</Text>
        </View>
      </View>

      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", textAlign: "center" }}>
          Bagaimana pengalaman Anda di Halte?
        </Text>
        <Text style={{ textAlign: "center", marginTop: 6, color: "#555" }}>
          Keseluruhan Penilaian
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 14,
          }}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <TouchableOpacity key={num} onPress={() => setRating(num)}>
              <Ionicons
                name={num <= rating ? "star" : "star-outline"}
                size={32}
                color="#FFD700"
                style={{ marginHorizontal: 4 }}
              />
            </TouchableOpacity>
          ))}
        </View>


        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 10,
            padding: 12,
            height: 100,
            textAlignVertical: "top",
            marginBottom: 20,
          }}
          multiline
          placeholder="Tambahkan Ulasan"
          value={review}
          onChangeText={setReview}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#1976D2",
            paddingVertical: 14,
            borderRadius: 10,
          }}
          onPress={() => alert(`Rating: ${rating}\nUlasan: ${review}`)}
        >
          <Text
            style={{ color: "#fff", fontSize: 16, fontWeight: "600", textAlign: "center" }}
          >
            Simpan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
