import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import Login from './src/components/Login/Login';
import TaskList from './src/components/TaskList/TaskList';

let task = [
  { key: '1', nome: 'Comprar Coca' },
  { key: '2', nome: 'Comprar droga' },
  { key: '3', nome: 'Comprar remédio' },
  { key: '4', nome: 'Comprar remédio' },
]

export default function App() {

  const [user, setUser] = useState(null);
  const [newTask, setNewTask] = useState('')

  // se não tiver user mostra o login
  if (!user) {
    // Como eu vou passar algum user para o setUser, vai deixar de ser null e vai mostrar as Tarefas
    return <Login changeStatus={(user) => setUser(user)} />
  }

  
  function DeleteItem(key){
    console.log(key)
  }

  function EditItem(data){
    console.log(`Item Clicado ${data}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TaskView}>
        <TextInput
          placeholder="O que vai ser feito hoje?"
          value={newTask}
          onChangeText={(textInput) => setNewTask(textInput)}
          style={styles.TextInput}
        />

        <TouchableOpacity style={styles.ButttonAddTask}>
          <Text style={styles.TextButton}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={task}
        // KeyExtractor aponta na nossa lista qual é a chave única na nossa lista 
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          //monta o componente
          <TaskList data={item} deleteItem={DeleteItem} editItem={EditItem} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    marginHorizontal: 10
  },

  TaskView: {
    flexDirection: 'row'
  },

  TextInput: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10
  },

  ButttonAddTask: {
    backgroundColor: 'black',
    width: "20%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 5
  },

  TextButton: {
    color: '#fff',
    fontSize: 30
  }
});
