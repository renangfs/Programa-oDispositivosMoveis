import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

export default function App() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('Desconhecido');

  const saveData = async () => {
    const state = await NetInfo.fetch();
    if (!state.isConnected) {
      await AsyncStorage.setItem('offlineData', value);
      setStatus('Salvo localmente');
    } else {
      setStatus('Enviado com sucesso!');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite algo"
        onChangeText={setValue}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Salvar" onPress={saveData} />
      <Text>{status}</Text>
    </View>
  );
}







colocar na pasta package.json
            {
              "dependencies": {
                "@expo/vector-icons": "^14.0.2",
                "react-native-paper": "4.9.2",
                "@react-native-community/netinfo": "11.4.1",
                "@react-native-async-storage/async-storage": "1.23.1"
              }
            }
