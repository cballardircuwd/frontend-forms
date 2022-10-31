import React, { useState } from "react";
import { View, SafeAreaView, Text, TouchableHighlight } from "react-native";
import styles from '../styles';
import CustomDropdown from './CustomDropdown';
import MultiSelectComponent from "./MultiSelectDropdown";
import TextField from "./TextField";
import SelectDropdown from "./SelectDropdown";
import DropdownSelectList from "./DropdownSelectList";
import Picker from "./Picker";
import SelectWithImage from "./SelectWithImage";
import DependentDropdown from "./DependentDropdown.js";
import Checkbox from "./Checkbox";
import Checkbox2 from "./Checkbox2";

const FormTest = () => {

    const handleSubmit = () => {
        console.log(CustomDropdown, MultiSelectComponent, TextField, SelectDropdown);
    }

    return (
    <SafeAreaView>
        <Checkbox2/>
        <Checkbox/>
        <br></br>
        <br></br>

        <DependentDropdown/>
        <CustomDropdown/>
        <MultiSelectComponent/>
        <SelectWithImage/>
        <TextField/>
        {/* <SelectDropdown/>
        <DropdownSelectList/>
        <Picker/> */}
        <View style={styles.container}>
            <TouchableHighlight onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
        </View>
    </SafeAreaView>
    )
}

export default FormTest;