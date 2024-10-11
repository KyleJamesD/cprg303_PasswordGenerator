import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Clipboard
} from "react-native";
import InputBox from "./components/InputBox";
import { useState } from "react";
import CheckBox from "./components/FormCheckBox";
import Btn from "./components/Btn";
import Output from "./components/Output";
import { btnType } from "./components/Btn";
import { generatePasswordString } from "./utility/passwordGenerator";
import * as utils from "./utility/Consts.ts"
import { showErrorSnackbar } from "./utility/utils.ts";
import { showInfoSnackBar } from "./utility/utils.ts";
import { showSuccessSnackBar } from "./utility/utils.ts";


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

//***************************InputBox********************************** */
const [inputTxt, setInputTxt] = useState('');


//**************************Button functions ************************* */

const passwordReq: utils.PasswordRequirement = {
    length: Number(inputTxt),              // e.g., password length set to 12
    includeUpper: checkboxVal1,       // e.g., include uppercase letters
    includeLower: checkboxVal2,       // e.g., include lowercase letters
    includeSymbol: checkboxVal3,      // e.g., include special characters
    includeNumber: checkboxVal4,      // e.g., include numbers
};

const [generatedPassword, setGeneratedPassword] = useState("");


function GeneratePassword () {
    console.log("Generate Password pressed");
    if (isNaN(Number(inputTxt)) || inputTxt=='') {
        setGeneratedPassword("Select Options");
        showErrorSnackbar('Invalid length value');
        return;

    }
    else if(!checkboxVal1 && !checkboxVal2 && !checkboxVal3 && !checkboxVal4) {
        showErrorSnackbar('Make a selection');
        setGeneratedPassword("Select Options");
        return;
    }
    else if(Number(inputTxt) > 16 || Number(inputTxt) < 8 ) {
        showErrorSnackbar('Enter Number between 8-16');
        setGeneratedPassword("Select Options");8
        return;
    }
    else{
        const newPassword = generatePasswordString(passwordReq);
        setGeneratedPassword(newPassword);
    }

    
}


//**************************Will we need this?************************* */
const [outputState, updateOutputState] = useState({
    inputVal : '',
    checkedVal1 : '',
});
//********************************************************************************* */

//**************************output Functions and State management************************* */
function handlecopyfunc () {
    Clipboard.setString(generatedPassword);
    showSuccessSnackBar('Password Copied');
}


//********************************************************************************* */


//**********************************RESET ALL VALUES******************************** */
function Reset () {
    console.log("Reset Button pressed");
    setGeneratedPassword("Select Options");
    updateCheckBox1(false);
    updateCheckBox2(false);
    updateCheckBox3(false);
    updateCheckBox4(false);
    setInputTxt('');
    showInfoSnackBar('Cleared');
}

function ResetError () {

}

//********************************************************************************* */




    return (
    <View>
        <View style={style.container}>
            <Text style={style.header}>Password Generator</Text>
            <InputBox inputTxt={inputTxt} setInputTxt={setInputTxt}></InputBox>
            
        </View>
        <View>
            <CheckBox label="Upper Case Letter" checkedStatus={checkboxVal1} updateCheckedStatus={updateCheckBox1} />
            <CheckBox label="Lower Case Letter" checkedStatus={checkboxVal2} updateCheckedStatus={updateCheckBox2} />
            <CheckBox label="Special Character" checkedStatus={checkboxVal3} updateCheckedStatus={updateCheckBox3} />
            <CheckBox label="Numbers" checkedStatus={checkboxVal4} updateCheckedStatus={updateCheckBox4} />
        </View>
        <View>
            <Output generatedPassword={generatedPassword} placeholder="Select Options" handleCopy={handlecopyfunc}></Output>
        </View>


        <View>
            <Btn type={btnType.Primary} title="Generate Password" onPress={GeneratePassword}></Btn>
            <Btn type={btnType.Danger} title="Reset" onPress={Reset}></Btn>
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