/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState}from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [primero, setPrimero] = useState(0);
  const [segundo, setSegundo] = useState(0);

  const x = parseFloat (primero);
  const y = parseFloat (segundo);
  const suma = x + y;
  const resta = x -y;
  const division = Number(x / y).toFixed(2);
  const multiplicacion= x * y;

  

  return(
    <View style ={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>

      <TextInput
      keyboardType="decimal-pad"
       style ={styles.input}
      value={primero} 
      onChangeText={setPrimero}
      />
      <TextInput
      keyboardType="decimal-pad" 
      style ={styles.input} 
      value={segundo} 
      onChangeText={setSegundo}
      />

      <Text style={styles.subtitle}>Resultado</Text>
      <Text style={styles.result}>{`Suma: ${suma}`}</Text>
      <Text style={styles.result}>{`Resta: ${resta}`}</Text>
      <Text style={styles.result}>{`Division: ${division}`}</Text>
      <Text style={styles.result}>{`Multiplicacion: ${multiplicacion}`}</Text>
     

      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '100' ,
  },
  input:{
    textAlign: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 36,
    height: 50,
    fontSize: 36,
    fontWeight: '100',
    backgroundColor: '#DDD',
    marginTop: 20,
  },
  subtitle: {
    marginTop: 20,
    marginBottom:20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  result:{
    fontWeight: '100',
    fontSize: 24,



  }
});