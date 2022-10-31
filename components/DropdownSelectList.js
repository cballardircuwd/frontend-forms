import React from "react";
import { View, SafeAreaView } from "react-native";
import styles from '../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectList from 'react-native-dropdown-select-list';


const DropdownSelectList = () => {

    const [selected, setSelected] = React.useState("");
    const data = [
        {key: 'null', value: 'Select a Person' },
        {key:'1',value:'Michael',}, 
        {key:'2',value:'TJ'}, 
        {key:'3',value:'Chris'}, 
        {key:'4',value:'Jared'}, 
        {key:'5',value:'Austin'},
    ];
    const searchIcon = <MaterialIcon name="account-search-outline" size={20} color={'black'}/>;
    const downIcon = <MaterialIcon name="gamepad-round-down" size={20} color={'black'} />;
    const downIcon2 = <MaterialIcon name="arrow-down-circle" size={20} color={'#e63434'}  />;


    return (
    <SafeAreaView>
        <View style={styles.inputBorderDropdown}>
            <SelectList 
                setSelected={setSelected} 
                data={data} 
                onSelect={() => alert(selected)}
                style={styles.textInput}
                arrowicon={downIcon} 
                searchicon={searchIcon} 
                search={true} 
                boxStyles={styles.inputBorderSelect1} //override default styles
                inputStyles={styles.inputStyles}
                dropdownStyles={styles.dropdownStyles}
                dropdownItemStyles={styles.dropdownItemStyles}
                dropdownTextStyles={styles.dropdownTextStyles}
                placeholder='Select a Person'
                searchPlaceholder="Find who you're looking for?"
                maxHeight={300}
                // defaultOption={{ key:'1',value:'Michael' }}   //default selected option
            />
        </View>
        <View style={styles.inputBorderDropdown}>
            <SelectList 
                setSelected={setSelected} 
                data={data} 
                onSelect={() => alert(selected)}
                style={styles.textInput}
                arrowicon={downIcon2} 
                searchicon={searchIcon} 
                search={true} 
                boxStyles={styles.inputBorderSelect2} //override default styles
                inputStyles={styles.inputStyles}
                dropdownStyles={styles.dropdownStyles}
                dropdownItemStyles={styles.dropdownItemStyles}
                dropdownTextStyles={styles.dropdownTextStyles}
                placeholder='Select a Person'
                searchPlaceholder="Find who you're looking for?"
                maxHeight={300}
                // defaultOption={{ key:'1',value:'Michael' }}   //default selected option
            />
        </View>   
    </SafeAreaView>
    )
}
    export default DropdownSelectList;