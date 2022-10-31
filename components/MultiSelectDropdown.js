import React, { useState } from 'react';
    import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
    import { MultiSelect } from 'react-native-element-dropdown';
    import AntDesign from 'react-native-vector-icons/AntDesign';
    import Icon from 'react-native-vector-icons/EvilIcons';
    import styles from '../styles';



    const data = [
        { label: 'Michael', value: '1' },
        { label: 'TJ', value: '2' },
        { label: 'Chris', value: '3' },
        { label: 'Jared', value: '4' },
        { label: 'Austin', value: '5' },
        { label: 'Josh', value: '6' },
        { label: 'Phil', value: '7' },
        { label: 'Caleb', value: '8' },
        { label: 'Kyle', value: '9' },
        { label: 'Kent', value: '10' },
        { label: 'Joe', value: '11' },
    ];

    const MultiSelectComponent = () => {
        const [selected, setSelected] = useState([]);

        return (
        
        <View style={styles.container}>
            <View style={styles.container2}>
            <MultiSelect
            style={styles.dropdown2}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Pick Only Cool People"
            value={selected}
            search
            searchPlaceholder="Search..."
            onChange={item => {
                setSelected(item);
            }}
            renderLeftIcon={() => (
                <AntDesign
                style={styles.icon}
                color="black"
                name="meh"
                size={20}
                />
            )}
            renderSelectedItem={(item, unSelect) => (
                    <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                        <View style={styles.selectedStyle}>
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            <Icon color="black" name="trash" size={17} />
                        </View>
                    </TouchableOpacity>
            )}
            />
        </View>
        </View>
        );
    };

    export default MultiSelectComponent;

