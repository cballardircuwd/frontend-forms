import React from "react";
import { View, SafeAreaView } from "react-native";
import styles from '../styles';
import SelectDropdown from 'react-native-select-dropdown';


const SelectDropdownOption = () => {
    const SelectDropdownOptions = [
        "Select an Option", 
        "Pee", 
        "Poop", 
        "Diarrhea", 
        "Vomit"
    ]

    return (
    <SafeAreaView>
        <View style={styles.inputBorderDropdown}>
            <SelectDropdown
                data={SelectDropdownOptions}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {

                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
        </View>
        </SafeAreaView>
    )
}
    export default SelectDropdownOption;