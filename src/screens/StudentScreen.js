import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { student } from '../data/student';

export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información del estudiante</Text>
      <View style={styles.box}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>{student.nombre}</Text>
        <Text style={styles.label}>Carnet</Text>
        <Text style={styles.value}>{student.carnet}</Text>
        <Text style={styles.label}>Sección y grupo</Text>
        <Text style={styles.value}>{student.seccion} - {student.grupo}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Api')}>
        <Text style={styles.buttonText}>Ver personajes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 24, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  box: { backgroundColor: '#1e293b', borderRadius: 12, padding: 20, marginBottom: 24 },
  label: { color: '#97ce4c', fontSize: 13, marginTop: 8 },
  value: { color: '#fff', fontSize: 18 },
  button: { backgroundColor: '#97ce4c', padding: 14, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#0f172a', fontSize: 16, fontWeight: 'bold' },
});
