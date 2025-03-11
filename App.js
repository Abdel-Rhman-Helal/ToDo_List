import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  TextInput, 
  FlatList, 
  Text, 
  TouchableOpacity 
} from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        text: input.trim(),
      }]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInput}
          placeholder="Add a new task"
          placeholderTextColor="#888"
        />
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={addTodo}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#fff',
    backgroundColor: '#1a1a1a',
  },
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  todoItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 5,
  },
  todoText: {
    fontSize: 16,
    color: '#fff',
  },
  listContent: {
    flexGrow: 1,
  },
});