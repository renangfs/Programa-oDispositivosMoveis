import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Cliques </Text>
      <Text style={styles.count}>{count}</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="+" onPress={() => setCount(count + 1)} />
        </View>
        <View style={styles.button}>
          <Button title="-" onPress={() => setCount(count - 1)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  count: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    width: 100, // Defina a largura desejada
  },
});
