import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import InputBox from "./components/InputBox";
import { useState } from "react";
import CheckBox from "./components/FormCheckBox";
import Btn from "./components/Btn";
import Output from "./components/Output";
import { btnType } from "./components/Btn";



function Main() : React.JSX.Element {


//***********************CheckBox Functions**************************** */
const [checkboxVal1, setCheckboxVal1] = useState(false);
function updateCheckBox1(status : boolean) {
    console.log(`checked box1 status: ${status}`);
    setCheckboxVal1(status);
}

const [checkboxVal2, setCheckboxVal2] = useState(false);
function updateCheckBox2(status : boolean) {
    console.log(`checked box2 status: ${status}`);
    setCheckboxVal2(status);
}

const [checkboxVal3, setCheckboxVal3] = useState(false);
function updateCheckBox3(status : boolean) {
    console.log(`checked box3 status: ${status}`);
    setCheckboxVal3(status);
}

const [checkboxVal4, setCheckboxVal4] = useState(false);
function updateCheckBox4(status : boolean) {
    console.log(`checked box4 status: ${status}`);
    setCheckboxVal4(status);
}
//********************************************************************************* */

//***************************InputBox********************************** */
const [userInputVal, setUserInputVal] = useState('');
//********************************************************************************* */

//**************************Button functions ************************* */

function ButtonPress1 () {
    console.log("Generate Password pressed");
}
function ButtonPress2 () {
    console.log("Reset Button  pressed");
}

//**************************Will we need this?************************* */
const [outputState, updateOutputState] = useState({
    inputVal : '',
    checkedVal1 : '',
});
//********************************************************************************* */



    return (
    <View>
        <View style={style.container}>
            <Text style={style.header}>Password Generator</Text>
            <InputBox></InputBox>
            
        </View>
        <View>
            <CheckBox label="Upper Case Letter" checkedStatus={checkboxVal1} updateCheckedStatus={updateCheckBox1} />
            <CheckBox label="Lower Case Letter" checkedStatus={checkboxVal2} updateCheckedStatus={updateCheckBox2} />
            <CheckBox label="Special Character" checkedStatus={checkboxVal3} updateCheckedStatus={updateCheckBox3} />
            <CheckBox label="Numbers" checkedStatus={checkboxVal4} updateCheckedStatus={updateCheckBox4} />
        </View>


        <View>
            <Btn type={btnType.Primary} title="Generate Password" onPress={ButtonPress1}></Btn>
            <Btn type={btnType.Danger} title="Reset" onPress={ButtonPress2}></Btn>
        </View>
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