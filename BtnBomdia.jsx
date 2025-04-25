import { Text, View, StyleSheet, Button, Alert } from 'react-native';

export default function App() {

  const showAlert = () => {
    Alert.alert('Título do Alerta', 'Essa é a mensagem do alerta.');
  };

  return (
    <View style={styles.container}>
      <Text> Clique no botão para enviar uma mensagem de bom dia </Text>
      <Button title="Bom dia" onPress={showAlert} />

      <Text> Clique no botão para enviar uma mensagem de boa tarde </Text>
      <Button title="Boa Tarde" onPress={showAlert} />

      <Text> Clique no botão para enviar uma mensagem de boa noite </Text>
      <Button title="Boa noite" onPress={showAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
