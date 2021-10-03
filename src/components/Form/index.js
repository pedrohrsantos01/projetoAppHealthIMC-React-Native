import React, { useState } from "react";
import { View, 
         Text, 
         TextInput, 
         TouchableOpacity,
         Vibration
         } from "react-native"; 
import ResultImc from './ResultImc/';
import styles from "./style";

export default function Form() {

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("preencha o peso e a altura.")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState('Calcular')
const [tipoImc , setTipoImc] = useState(null)
const [errorMessage, setErrorMessage] = useState(null)


function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
}

function verificationImc() {
    if( imc == null) { 
        Vibration.vibrate();
        setErrorMessage('Campo Obrigatório*')
    }
}

function validationImc() {
    if (weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc('Seu Imc é Igual: ')
        setTextButton('Calcular novamente')
        setErrorMessage(null)

        return
    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc('Preencha seu peso e altura')
}

function classImc() { 
    if ( imc < 18.5) {
        setTipoImc('Abaixo do Peso')
    } if  (imc => 18.5 || imc <= 24.9) {
        setTipoImc('Peso Normal') 
    } if (imc => 25 || imc <= 29.9 ) {
        setTipoImc('Sobrepeso')
    } if (imc => 30 || imc <= 34.9) {
        setTipoImc('Obesidade Grau I')
    } if (imc => 35 || imc <= 39.9){
        setTipoImc('Obesidade Grau II')
    } if (imc => 40) {
        setTipoImc('Obesidade Mórbida! Cuidado!')
    }
    return
}


return(
    <View style = {styles.formContext}>
            <View style= {styles.form}>
                <Text style = {styles.formLabel} >Altura: </Text>
                <Text style = {styles.errorMessage}> {errorMessage} </Text>
                <TextInput
                style = {styles.input}
                onChangeText = {setHeight}
                value = {height}
                placeholder= "Ex. 1.75"
                keyboardType="numeric"
                /> 
                <Text style = {styles.formLabel} >Peso: </Text>
                <Text style = {styles.errorMessage}> {errorMessage} </Text>
                <TextInput
                style = {styles.input}
                onChangeText = {setWeight}
                value = { weight}
                placeholder= "Ex. 72.37"
                keyboardType="numeric"
                />
                <TouchableOpacity 
                onPress= {() => validationImc()}
                style ={styles.buttonCalculator}
                >
                    <Text style= {styles.textButtonCalculator}> {textButton} </Text>
                </TouchableOpacity>

                <ResultImc 
                messageResultImc = {messageImc}
                resultImc={imc}

                />
            </View>
        </View>
    )
}