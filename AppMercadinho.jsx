import { Text, View, StyleSheet, Button, Alert } from 'react-native';

export default function App() {

  const showAlert = () => {
    Alert.alert('Título do Alerta', 'Essa é a mensagem do alerta.');
  };

  const handleTopButton = () => {
    Alert.alert('Botão Superior', 'Você clicou no botão da esquerda!');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Botão na parte superior esquerda */}
      <View style={styles.topLeftButton}>
        <Button title="Voltar" onPress={handleTopButton} />
      </View>

      {/* Botão na parte inferior */}
      <View style={styles.bottomButton}>
        <Button title="Ver Produtos" onPress={showAlert} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomButton: {
    position: 'absolute',
    bottom: 130,
    left: 40,
    right: 40,
  },
  topLeftButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
