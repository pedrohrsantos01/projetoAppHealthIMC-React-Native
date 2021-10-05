import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contextImc:{
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems:"center",
        width:"100%",
        fontSize: 48,
        color: '#FF0043',
        fontWeight: 'bold'
    },
    numberImc: {
        fontSize: 48,
        color: '#FF0043',
        fontWeight: 'bold'
    },
    information: {
        fontSize: 18,
        color: '#FF0043',
        fontWeight: 'bold'
    },
    classImc: {
        fontSize: 15,
        color:'#FF00',
        fontWeight: 'bold'
    },
    boxShareButton: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: -25
    },
    shared: {
        backgroundColor: '#1877f2',
        borderRadius: 20,
        paddingBottom: 15,
        paddingTop: 15,

    },
    sharedText: {
        color: 'white',
        marginVertical: -10,
        fontWeight: 'bold',
        paddingHorizontal: 50
    }

})

export default styles