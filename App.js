import React, {useState} from 'react';
import Calc from './src/Calc';
import { StyleSheet, Text, View, Button } from 'react-native';

const init = 4;

export default function App() {
  return (
    <View>
      <View style={styles.containerRes}>
        <Text style={{color: '#EB144C', fontWeight: "bold"}}> Valor Inicial: {init}</Text>
      </View>
      <Calc data={init}/>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRes: {
    backgroundColor: '#bec6c2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '25%',
  },
  containerCalc: {
    alignContent: 'stretch',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0693E3',
    alignItems: 'center',
  },
});
