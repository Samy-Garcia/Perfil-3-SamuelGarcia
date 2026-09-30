import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ title, image, description }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  image: { width: 110, height: 110 },
  info: { flex: 1, padding: 12, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  description: { color: '#cbd5e1', fontSize: 14 },
});
