import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";

export default function RoutePage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderColor: "#eee",
        }}
      >
        <TouchableOpacity
          onPress={() => router.push("/")} 
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#673AB7",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5, 
          }}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Map */}
      <View style={{ height: 220, borderBottomWidth: 1, borderColor: "#eee" }}>
        <WebView
          source={{
            uri: "https://www.google.com/maps/@-6.200000,106.816666,15z",
          }}
          style={{ flex: 1 }}
        />
      </View>

      <ScrollView style={{ padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <View>
            <Text style={{ fontSize: 13 }}>
              <Text style={{ fontWeight: "700" }}>Dari: </Text>
              <Text style={{ color: "#666" }}>Halte Perpustakaan Nasional</Text>
            </Text>

            <Text style={{ fontSize: 13, marginTop: 4 }}>
              <Text style={{ fontWeight: "700" }}>Menuju: </Text>
              <Text style={{ color: "#666" }}>Halte Tosari</Text>
            </Text>
          </View>

          <Ionicons name="bus-outline" size={26} color="#3B82F6" />
        </View>

        {/* Tabs */}
        <View style={{ flexDirection: "row", marginBottom: 16 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#673AB7",
              paddingVertical: 10,
              borderRadius: 8,
              marginRight: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "600", color: "#fff" }}>Berangkat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              borderColor: "#673AB7",
              borderWidth: 1,
              paddingVertical: 10,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "600", color: "#673AB7" }}>Jalur</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>35 Min</Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="bicycle" size={18} color="#673AB7" style={{ marginHorizontal: 8 }} />
            <Ionicons name="location" size={18} color="#673AB7" style={{ marginHorizontal: 8 }} />
            <Ionicons name="time" size={18} color="#673AB7" style={{ marginHorizontal: 8 }} />
            <Ionicons name="person" size={18} color="#673AB7" />
          </View>
        </View>

     
        <View style={{ borderLeftWidth: 2, borderColor: "#673AB7", paddingLeft: 16 }}>
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: "#673AB7",
                position: "absolute",
                left: -23,
                top: 4,
              }}
            />
            <Text style={{ fontWeight: "600" }}>Dukuh Atas</Text>
            <Text style={{ color: "#666" }}>Perpusnas (atau nama tujuan nyata)</Text>
          </View>

   
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: "#673AB7",
                position: "absolute",
                left: -23,
                top: 4,
              }}
            />
            <Text style={{ fontWeight: "600" }}>Halte Tosari</Text>
            <Text style={{ color: "#666" }}>Jarak: 2.5 Menit – Tortor Accumsan</Text>
            <Text style={{ color: "#673AB7", fontWeight: "600" }}>Tepat Waktu</Text>
          </View>

    
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: "#673AB7",
                position: "absolute",
                left: -23,
                top: 4,
              }}
            />
            <Text style={{ fontWeight: "600" }}>Halte Bundaran HI</Text>
            <Text style={{ color: "#666" }}>Ride 3 Stops 9 Min</Text>
            <Text style={{ color: "#673AB7", fontWeight: "600" }}>Tepat Waktu</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
