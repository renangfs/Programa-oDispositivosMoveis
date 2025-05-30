import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput, Button, Alert, StyleSheet,} from 'react-native';

export default function App() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [curso, setCurso] = useState('');

  const API_URL = 'https://6838f9fd6561b8d882aebae2.mockapi.io/api/v1/alunos';

  useEffect(() => {
    buscarAlunos();
  }, []);

  const buscarAlunos = async () => {
    try {
      const resposta = await fetch(API_URL);
      if (!resposta.ok) {
        throw new Error('Erro na requisição');
      }
      const dados = await resposta.json();
      setAlunos(dados);
    } catch (erro) {
      console.error('Erro ao buscar alunos:', erro);
      Alert.alert('Erro ao buscar alunos');
    } finally {
      setLoading(false);
    }
  };

  const adicionarAluno = async () => {
    if (!nome || !idade || !curso) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    try {
      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, idade: Number(idade), curso }),
      });
      if (resposta.ok) {
        setNome('');
        setIdade('');
        setCurso('');
        buscarAlunos();
        Alert.alert('Aluno cadastrado com sucesso!');
      } else {
        Alert.alert('Erro ao cadastrar aluno');
      }
    } catch (erro) {
      console.error('Erro ao adicionar aluno:', erro);
      Alert.alert('Erro na requisição');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Alunos</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          placeholder="Idade"
          style={styles.input}
          keyboardType="numeric"
          value={idade}
          onChangeText={setIdade}
        />
        <TextInput
          placeholder="Curso"
          style={styles.input}
          value={curso}
          onChangeText={setCurso}
        />
        <Button title="+ Adicionar aluno" onPress={adicionarAluno} />
      </View>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Nome: {item.nome}</Text>
            <Text>Curso: {item.curso}</Text>
            <Text>Idade: {item.idade}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  form: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
