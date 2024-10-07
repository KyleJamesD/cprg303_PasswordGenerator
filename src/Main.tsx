import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import InputBox from "./components/InputBox";




function Main() : React.JSX.Element {
    return (
        <View style={style.container}>
            <Text style={style.header}>Password Generator</Text>
            <InputBox></InputBox>
        </View>
    );
}
    

const style = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        alignItems:'center',
           
    },
    header:{
        fontSize: 30,
        fontWeight:"600",
        color:'black',
    },
});

export default Main;