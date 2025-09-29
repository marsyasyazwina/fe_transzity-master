import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomePage() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("User");

  useEffect(() => {
    const getUserData = async () => {
      const token = await AsyncStorage.getItem("token");
      const name = await AsyncStorage.getItem("displayName");

      if (!token) {
        router.replace("/login");
      }
      if (name) setDisplayName(name);
    };
    getUserData();
  }, []);

  const handleLogout = async () => {
    Alert.alert("Konfirmasi", "Apakah Anda yakin ingin logout?", [
      { text: "Batal" },
      {
        text: "Logout",
        onPress: async () => {
          await AsyncStorage.removeItem("token");
          router.replace("/login");
        },
      },
    ]);
  };

  const getKepadatanColor = (status) => {
    switch (status.toLowerCase()) {
      case "sangat padat":
      case "padat":
        return "#e63946"; // merah
      case "sedang":
        return "#f4a261"; // kuning
      case "kosong":
      case "lancar":
        return "#2a9d8f"; // hijau
      default:
        return "#999"; // abu2
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.iconProfile}>
            <Ionicons name="person" size={40} color="#fff" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.greeting}>Halo, {displayName}!</Text>
            <Text style={styles.brand}>Transzity</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.iconWrapper} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} color="#3b6ef5" />
        </TouchableOpacity>
      </View>

      {/* Card Saldo */}
      <View style={styles.card}>
        <Text style={styles.cardDate}>12/10/2021</Text>
        <Text style={styles.cardBalance}>Rp 20.000</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Menu Transport with 4 buttons */}
      <View style={styles.transport}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/rute")}
        >
          <View style={[styles.iconWrapperBlue]}>
            <Ionicons name="bus" size={22} color="#fff" />
          </View>
          <Text style={styles.menuText}>Live Bus</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/review")}
        >
          <View style={[styles.iconWrapperBlue]}>
            <Ionicons name="chatbubbles" size={22} color="#fff" />
          </View>
          <Text style={styles.menuText}>Keluhan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/capacity")}
        >
          <View style={[styles.iconWrapperBlue]}>
            <Ionicons name="shield-checkmark" size={22} color="#fff" />
          </View>
          <Text style={styles.menuText}>Kondisi Bus</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/alternatif")}
        >
          <View style={[styles.iconWrapperBlue]}>
            <Ionicons name="repeat" size={22} color="#fff" />
          </View>
          <Text style={styles.menuText}>Alternatif Rute</Text>
        </TouchableOpacity>
      </View>

      {/* Perjalanan Terbaru */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perjalanan Terbaru</Text>

        <View style={styles.tripCard}>
          <Image
            source={require("../assets/images/map.png")}
            style={styles.map}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.tripTitle}>Grand Indonesia</Text>

            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={16} color="#3b6ef5" />
              <Text style={styles.infoText}>Blok M → Bundaran HI</Text>
            </View>

            <View style={styles.infoRow}>
              <View
                style={[
                  styles.kepadatanBox,
                  { backgroundColor: getKepadatanColor("Sangat Padat") },
                ]}
              />
              <Text style={styles.infoText}>Kepadatan: Sangat Padat</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="bus-outline" size={16} color="#3b6ef5" />
              <Text style={styles.infoText}>Rute 1: Blok M - Kota</Text>
            </View>
          </View>
          <Text style={styles.time}>45 Menit</Text>
        </View>

        <View style={styles.tripCard}>
          <Image
            source={require("../assets/images/map.png")}
            style={styles.map}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.tripTitle}>Autograph Tower</Text>

            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={16} color="#3b6ef5" />
              <Text style={styles.infoText}>Bundaran HI → Tosari</Text>
            </View>

            <View style={styles.infoRow}>
              <View
                style={[
                  styles.kepadatanBox,
                  { backgroundColor: getKepadatanColor("Sedang") },
                ]}
              />
              <Text style={styles.infoText}>Kepadatan: Sedang</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="bus-outline" size={16} color="#3b6ef5" />
              <Text style={styles.infoText}>Rute 1: Blok M - Kota</Text>
            </View>
          </View>
          <Text style={styles.time}>12 Menit</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  profile: { flexDirection: "row", alignItems: "center" },
  greeting: { fontSize: 18, fontWeight: "bold" },
  brand: { color: "#3b6ef5", fontSize: 14 },
  iconProfile: {
    backgroundColor: "#3b6ef5",
    padding: 12,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#e6edff",
    padding: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  iconWrapperBlue: {
    backgroundColor: "#3b6ef5",
    padding: 12,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#3b6ef5",
    borderRadius: 14,
    padding: 25,
    marginBottom: 30,
    position: "relative",
    minHeight: 200,
    justifyContent: "center",
  },
  cardDate: { color: "#fff", textAlign: "right", fontSize: 13, marginBottom: 120 },
  cardBalance: { color: "#fff", fontSize: 25, fontWeight: "bold", marginBottom: 10 },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#5a87ff",
    borderRadius: 25,
    padding: 10,
  },

  transport: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  menuItem: {
    alignItems: "center",
    width: 70,
  },
  menuText: {
    marginTop: 6,
    fontSize: 13,
    textAlign: "center",
  },

  section: { marginBottom: 20 },
  sectionTitle: { fontWeight: "bold", marginBottom: 15, fontSize: 16 },

  tripCard: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: "center",
  },
  map: { width: 65, height: 65, borderRadius: 6 },
  tripTitle: { fontWeight: "bold", fontSize: 15, marginBottom: 3 },
  time: { fontSize: 13, color: "purple" },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  infoText: { fontSize: 13, color: "#333" },

  kepadatanBox: {
    width: 12,
    height: 12,
    borderRadius: 3,
    marginRight: 6,
  },
});
