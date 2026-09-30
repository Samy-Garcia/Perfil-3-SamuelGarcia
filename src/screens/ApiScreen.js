import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useFetchData from '../hooks/useFetchData';
import Card from '../components/Card';
import Loading from '../components/Loading';

const API_URL = 'https://rickandmortyapi.com/api/character';

export default function ApiScreen() {
  const { data, loading, error, refetch } = useFetchData(API_URL);

  if (loading) return <Loading />;

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={refetch}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={{ padding: 16 }}
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Card
          title={item.name}
          image={item.image}
          description={`${item.species} • ${item.status}\nOrigen: ${item.origin?.name}`}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: '#0f172a' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f172a' },
  error: { color: '#f87171', fontSize: 16, marginBottom: 12 },
  button: { backgroundColor: '#97ce4c', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 },
  buttonText: { color: '#0f172a', fontWeight: 'bold' },
});
