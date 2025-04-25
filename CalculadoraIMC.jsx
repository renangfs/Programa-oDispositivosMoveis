import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  // Duas variáveis: peso e altura, iniciando em 0
  const [peso, setPeso] = useState('0');
  const [altura, setAltura] = useState('0');

  const [pesoFinal, setPesoFinal] = useState('');
  const [alturaFinal, setAlturaFinal] = useState('');
  
  const [resultado, setResultado] = useState('');

  const Calcular = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum) {
      setResultado('Por favor, insira valores válidos.');
    return;
    }
  
    const imc = pesoNum / (alturaNum * alturaNum);

    setPesoFinal(peso);
    setAlturaFinal(altura);
    setResultado(imc.toFixed(2));
  };

  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>

      <TextInput
        style={styles.campos}
        placeholder="Digite seu peso"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.campos}
        placeholder="Digite sua altura"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular" onPress={Calcular} />

      <Text>Peso informado: {pesoFinal} kg</Text>
      <Text>Altura informada: {alturaFinal} m</Text>
      <Text>Resultado IMC: {resultado}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    margin: 40,
  },
  titulo: {
    fontSize: 30,
  },
  campos: {
    marginVertical: 12,
    height: 30,
    borderWidth: 1,
  },
});
