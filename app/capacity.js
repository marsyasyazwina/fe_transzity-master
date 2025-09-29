import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const CapacityBox = ({ color, label }) => (
  <View style={{ alignItems: "center", marginHorizontal: 12 }}>
    <View
      style={{
        width: 26,
        height: 26,
        backgroundColor: color,
        borderRadius: 6,
        marginBottom: 6,
      }}
    />
    <Text style={{ fontSize: 13 }}>{label}</Text>
  </View>
);

const BusCard = ({ status, halte, waktu, nomorBus, rute, kondisi }) => {
  const kondisiMap = {
    lega: { color: "#4CAF50", label: "Lega" },
    sedang: { color: "#FFC107", label: "Sedang" },
    penuh: { color: "#F44336", label: "Penuh" },
  };

  const { label } = kondisiMap[kondisi] || { color: "#9E9E9E", label: "Unknown" };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginVertical: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
      }}
    >
  
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>
          Bus Koridor 1 (Blok M - Kota)
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#1976D2",
            fontWeight: "600",
            textDecorationLine: "underline",
          }}
        >
          {nomorBus}
        </Text>
      </View>


      <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 16 }}>
        <CapacityBox color={kondisi === "lega" ? "#4CAF50" : "#E0E0E0"} label="Lega" />
        <CapacityBox color={kondisi === "sedang" ? "#FFC107" : "#E0E0E0"} label="Sedang" />
        <CapacityBox color={kondisi === "penuh" ? "#F44336" : "#E0E0E0"} label="Penuh" />
      </View>


      <Text
        style={{
          fontSize: 13,
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: 14,
          color: "#555",
        }}
      >
        Nomor Bus {nomorBus} saat ini {label}
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="bus" size={28} color="#673AB7" />

          <View
            style={{
              backgroundColor: "red",
              borderRadius: 6,
              paddingHorizontal: 8,
              paddingVertical: 3,
              marginLeft: 6,
            }}
          >
            <Text style={{ fontSize: 13, color: "#fff", fontWeight: "700" }}>{rute}</Text>
          </View>

          <Text style={{ fontSize: 15, marginLeft: 8, fontWeight: "600" }}>
            {status} Halte {halte}
          </Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>{waktu}</Text>
          {waktu !== "Tiba" && <Text style={{ fontSize: 14, fontWeight: "500" }}>Menit</Text>}
        </View>
      </View>
    </View>
  );
};

export default function App() {
  const router = useRouter(); 

  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 14,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
        }}
      >
        <TouchableOpacity onPress={() => router.push("/")}>  
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={{ fontSize: 17, fontWeight: "700", textAlign: "center", flex: 1 }}>
          Ketersediaan Kursi BUS
        </Text>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>


      <ScrollView style={{ flex: 1 }}>
        <BusCard status="Menuju" halte="Kota" waktu="6" nomorBus="B364748" rute="1" kondisi="penuh" />
        <BusCard status="Menuju" halte="Harmoni" waktu="3" nomorBus="B769748" rute="1" kondisi="sedang" />
        <BusCard status="Berangkat Dari" halte="Blok-M" waktu="Tiba" nomorBus="B123456" rute="1" kondisi="lega" />
      </ScrollView>
    </View>
  );
}
