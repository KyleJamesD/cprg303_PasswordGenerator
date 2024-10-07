import React, { useState } from "react";
import { 
    Button,
    Clipboard,
    StyleSheet,
    TextInput,
    View,
 } from "react-native";



 type InputBoxProps = {
    inputTxt: string;
    setInputTxt: (text: string) => void;
};


 function InputBox(props : InputBoxProps) : React.JSX.Element {

    let inputTxt = props.inputTxt
    let setInputTxt = props.setInputTxt;

    

    function handleInput(newTxt : string) {
        if (newTxt.length <= 2) {
            setInputTxt(newTxt); // Only update state if input length is 2 or less
            console.log(newTxt);
          }
    }


return (


    <View style={styles.inputArea}>
    <TextInput
    style={styles.inputField}
    placeholder="Password Length (8-16)"
    value={inputTxt}
    onChangeText={handleInput}
    />
    </View>
    

);


 }

 const styles = StyleSheet.create(
    {
        inputArea: {
            margin: 30,
            width: '100%',

        },

        inputField: {
            borderWidth: 2,
            borderColor: '#3B3030',
            borderRadius: 15,
            fontWeight: '400',
            fontSize: 25,
            padding: 10,
            backgroundColor: '#FFF',
        },
    }
);


export default InputBox;