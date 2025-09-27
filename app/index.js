import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.iconProfile}>
            <Ionicons name="person" size={40} color="#fff" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.greeting}>Halo, Sue Shei</Text>
            <Text style={styles.brand}>Transzity</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.iconWrapper}>
          <Ionicons name="notifications-outline" size={22} color="#3b6ef5" />
        </TouchableOpacity>
      </View>


      <View style={styles.card}>
        <Text style={styles.cardDate}>12/10/2021</Text>
        <Text style={styles.cardBalance}>Rp 20.000</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

 
      <View style={styles.transport}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.iconWrapper, { backgroundColor: "#3b6ef5" }]}>
            <Ionicons name="bus" size={22} color="#fff" />
          </View>
          <Text style={styles.menuText}>Live Bus</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.iconWrapper, { backgroundColor: "#3b6ef5" }]}>
            <Ionicons name="chatbubbles" size={22} color="#fff" />
          </View>
          <Text style={styles.menuText}>Keluhan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.iconWrapper, { backgroundColor: "#3b6ef5" }]}>
            <Ionicons name="shield-checkmark" size={22} color="#fff" />
          </View>
          <Text style={styles.menuText}>Kondisi Bus</Text>
        </TouchableOpacity>
      </View>

   
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perjalanan Terbaru</Text>

        <View style={styles.tripCard}>
          <Image
            source={require("../assets/images/map.png")}
            style={styles.map}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.tripTitle}>Grand Indonesia</Text>
            <Text>Blok M → Bundaran HI</Text>
            <Text>Kepadatan: Sangat Padat</Text>
            <Text>Rute 1: Blok M - Kota</Text>
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
            <Text>Bundaran HI → Tosari</Text>
            <Text>Kepadatan: Sedang</Text>
            <Text>Rute 1: Blok M - Kota</Text>
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

  card: {
    backgroundColor: "#3b6ef5",
    borderRadius: 14,
    padding: 25,
    marginBottom: 30,
    position: "relative",
    minHeight: 200,
    justifyContent: "center",
  },
  cardDate: {
    color: "#fff",
    textAlign: "right",
    fontSize: 13,
    marginBottom: 120,
  },
  cardBalance: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
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
    justifyContent: "space-around",
    marginBottom: 40,
  },
  menuItem: { alignItems: "center" },
  menuText: { marginTop: 5, fontSize: 13 },

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
});
