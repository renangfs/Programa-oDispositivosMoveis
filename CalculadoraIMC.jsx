import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
// Importa os componentes necessários do React Native

import React, { useState } from 'react';
// Importa o React e o hook useState para gerenciar estados

export default function App() {
  // Função principal que representa o componente do aplicativo

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  // Declaração de estados para armazenar o peso, altura e o resultado do IMC

  const Calcular = () => {
    // Função chamada ao clicar no botão "Calcular"

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    // Converte os valores de entrada de string para número

    if (!pesoNum || !alturaNum) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }
    // Verifica se os valores são válidos; se não forem, mostra uma mensagem de erro

    const imc = pesoNum / (alturaNum * alturaNum);
    // Fórmula para calcular o IMC: peso dividido pela altura ao quadrado

    setResultado(imc.toFixed(2));
    // Armazena o IMC formatado com 2 casas decimais no estado 'resultado'
  };

  return (
    // JSX que define o layout da interface

    <View style={styles.container}>
      {/* Container principal da tela */}

      <Text style={styles.titulo}>Calculadora IMC</Text>
      {/* Título da aplicação */}

      <TextInput
        style={styles.campos}
        placeholder="Digite seu peso"
        value={peso}
        onChangeText={setPeso}
      />
      {/* Campo de texto para o usuário digitar o peso */}

      <TextInput
        style={styles.campos}
        placeholder="Digite sua altura"
        value={altura}
        onChangeText={setAltura}
      />
      {/* Campo de texto para o usuário digitar a altura */}

      <Button title="Calcular" onPress={Calcular} />
      {/* Botão que chama a função Calcular quando pressionado */}

      <Text>Peso informado: {peso} kg</Text>
      <Text>Altura informada: {altura} m</Text>
      <Text>Resultado IMC: {resultado}</Text>
      {/* Exibe os dados digitados e o resultado do IMC */}
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos para os componentes

  container: {
    flex: 1,
    paddingTop: 50,
    margin: 40,
  },
  // Estilo do container principal: preenche a tela, com margem e espaçamento superior

  titulo: {
    fontSize: 30,
  },
  // Estilo do título: define o tamanho da fonte

  campos: {
    marginVertical: 12,
    height: 50,
    borderWidth: 1,
    height: 40,
  },
  // Estilo dos campos de entrada: altura, margem vertical e borda
});
