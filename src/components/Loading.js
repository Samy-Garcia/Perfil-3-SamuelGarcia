import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function Loading({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#97ce4c" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f172a' },
  text: { marginTop: 12, color: '#fff', fontSize: 16 },
});
