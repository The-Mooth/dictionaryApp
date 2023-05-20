import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import handleSearch from '../hooks/HandleSearch';
import Logo from '../components/svgs/logo';

const HomeScreen = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  return (
    <View style={styles.container}>
      <Logo/> 
      <Text style={styles.title}>Dictionary App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a word"
        value={word}
        onChangeText={text => setWord(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSearch(setDefinition, word)}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {definition ? (
        <Text style={styles.definition}>{definition}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4285f4',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  definition: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default HomeScreen;
