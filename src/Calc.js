import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

let resp = 4;

export default function calculadora({data}){

    const [resp, setResp] = useState(data);

    function calcular(){
        setResp(resp*2)
    }

    return(
        <View style={styles.containerCalc}>
            <View style={styles.btnView}>
                <Button title="Calcular Dobro" color="grey" style={styles.btn} onPress={calcular}/>
            </View>
            <View style={styles.btnResp}>
                <Text style={{color: '#000000', fontWeight: "bold", fontSize: 22}}> Resposta: {resp}</Text>  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCalc: {
        backgroundColor: '#0693E3',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'stretch',
        flexDirection: 'row',
        padding: '25%',
    },
    btnView: {
        justifyContent: 'center',
        padding: '10%',
        marginRight: '20%',
    },
    btnResp: {
        padding: '10%',
    },
    btn: {
        color: '#000000',
    }
  });
  