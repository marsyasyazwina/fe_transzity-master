import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const sampleRoutes = [
  {
    id: 'route1',
    from: 'Halte Perpustakaan Nasional',
    to: 'Halte Tosari',
    duration: 35, // menit
    segments: [
      { stopName: 'Dukuh Atas', subText: 'Perpustas (atau nama tujuan nyata)', time: null },
      { stopName: 'Dukuh Atas', subText: 'Jl. Jenderal Sudirman No.1', time: null },
      { stopName: 'Tortor Accumsan', subText: null, time: 2.5, note: 'Tepat Waktu' },
      { stopName: 'Halte Bundaran HI', subText: 'Ride 3 Stops 9 Min', time: 5.6 },
      { stopName: 'Halimun', subText: null, time: null },
    ],
  },
  {
    id: 'route2',
    from: 'Halte Perpustakaan Nasional',
    to: 'Halte Tosari',
    duration: 40,
    segments: [
      { stopName: 'Dukuh Atas', subText: 'Versi alternatif 2', time: null },
      { stopName: 'Halte XYZ', subText: 'Jalan ABC', time: 10 },
      { stopName: 'Halte Tosari', subText: null, time: 40 },
    ],
  },
];

const RouteAlternativeList = () => {
  const router = useRouter(); 

  const handleBackPress = () => {
    router.push('/'); 
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Pilih Rute Alternatif</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.container}>
        {sampleRoutes.map(route => (
          <View key={route.id} style={styles.routeCard}>
            <View style={styles.headerRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.fromToText}>
                  Dari: <Text style={styles.boldText}>{route.from}</Text>
                </Text>
                <Text style={styles.fromToText}>
                  Menuju: <Text style={styles.boldText}>{route.to}</Text>
                </Text>
              </View>
              <View style={styles.durationBox}>
                <Text style={styles.durationText}>{route.duration} Min</Text>
              </View>
            </View>

            <View style={styles.divider} />

            {route.segments.map((seg, idx) => (
              <View key={idx} style={styles.segmentRow}>
                <View style={styles.iconCol}>
                  <Ionicons name="ellipse" size={12} color="#337DFF" />
                  {idx < route.segments.length - 1 && <View style={styles.verticalLine} />}
                </View>

                <View style={styles.infoCol}>
                  <Text style={styles.stopName}>{seg.stopName}</Text>
                  {seg.subText && <Text style={styles.subText}>{seg.subText}</Text>}
                </View>

                <View style={styles.timeCol}>
                  {seg.time != null && <Text style={styles.timeText}>{seg.time} Min</Text>}
                  {seg.note && <Text style={styles.noteText}>{seg.note}</Text>}
                </View>
              </View>
            ))}

            <TouchableOpacity style={styles.buttonChoose}>
              <Text style={styles.buttonText}>Pilih Rute Ini</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4266B9',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // for android shadow
    marginRight: 16,
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  routeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fromToText: {
    fontSize: 14,
    color: '#555',
  },
  boldText: {
    fontWeight: '600',
    color: '#333',
  },
  durationBox: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  durationText: {
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 12,
  },
  segmentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconCol: {
    width: 20,
    alignItems: 'center',
  },
  verticalLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#337DFF',
    marginTop: 2,
  },
  infoCol: {
    flex: 1,
    marginLeft: 10,
  },
  stopName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  subText: {
    fontSize: 12,
    color: '#777',
  },
  timeCol: {
    width: 60,
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: '600',
  },
  noteText: {
    fontSize: 12,
    color: '#3498DB',
  },
  buttonChoose: {
    marginTop: 10,
    backgroundColor: '#337DFF',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default RouteAlternativeList;
