import React, { useState } from "react";
import { View, 
         Text, 
         TextInput, 
         TouchableOpacity,
         Vibration,
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
    if( imc === null) { 
        Vibration.vibrate();
        setErrorMessage('Campo Obrigatório*')
    }
}

function classImc() { 

      if ( imc < 18.5) {
        setTipoImc ('Abaixo do Peso')
    } else if ( imc < 25) {
        setTipoImc('Peso Normal')
    } else if ( imc < 30 ) {
        setTipoImc('Sobrepeso')
    } else if (imc < 35) {
        setTipoImc('Obesidade Grau I')
    } else if (imc < 40){
        setTipoImc('Obesidade Grau II')
    } else {
        setTipoImc('Obesidade Mórbida! Cuidado!')
    } 
    return


}
function validationImc() {
    if (weight != null && height != null){
        imcCalculator()
        classImc()
        setHeight(null)
        setWeight(null)
        setMessageImc('Seu Imc é Igual: ')
        setTextButton('Calcular novamente')
        setErrorMessage(null)
        return
    }
    setTipoImc(null)
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc('Preencha seu peso e altura')
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
                classificationImc = {tipoImc}

                />
            </View>
        </View>
    )
}