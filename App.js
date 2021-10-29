import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login';

export default function App() {

  const [user, setUser] = useState(null);

  // se não tiver user mostra o login
  if(!user){
    return <Login />
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text>Tela de tarefas</Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
