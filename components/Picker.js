import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import styles from '../styles';
import {Picker} from '@react-native-picker/picker';


const FormTest = () => {
    const data = [
        {key: 'null', value: 'Select a Person' },
        {key:'1',value:'Michael',}, 
        {key:'2',value:'TJ'}, 
        {key:'3',value:'Chris'}, 
        {key:'4',value:'Jared'}, 
        {key:'5',value:'Austin'},
    ];
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
    <SafeAreaView>
        <View style={styles.inputBorderDropdown}>
            <Picker
                style={styles.inputBorderSelect3}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Select" value="Select" />
                <Picker.Item label="Java" value="java" color="red"/>
                <Picker.Item label="JavaScript" value="js" color="blue"/>
                <Picker.Item label="PHP" value="php" color="yellow"/>
            </Picker>
        </View>
    </SafeAreaView>
    )
}
    export default Picker;