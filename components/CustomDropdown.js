// https://github.com/hoaphantn7604/react-native-element-dropdown
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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

const CustomDropdown = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
        return (
            <Text style={[styles.dropdownLabel, isFocus && { color: '#f6600' }]}>
            Select Item...
            </Text>
        );
        }
        return null;
    };

    return (
    <View style={styles.container}>
        {renderLabel()}
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
                    // itemTextStyle={styles.dropdownTextStyles2}
                    // itemContainerStyle={styles.inputBorderSelect1}
            // disable={true}
            // showsVerticalScrollIndicator={false}
            search={true}
            backgroundColor="#0000004f"
            dropdownPosition="bottom"
            activeColor={'#7d95ff23'}
            maxHeight={200}
            labelField="label"
            valueField="value"
            // autoScroll={false}
            placeholder={!isFocus ? 'Pick you Person' : 'This Changed too...'}
            searchPlaceholder="New Search, Who Dis?"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setValue(item.value);
                setIsFocus(false);
            }}
            renderRightIcon={() => (
                <MaterialIcon
                style={styles.icon}
                color={isFocus ? '#155f03' : 'blue'}
                name={isFocus ? 'alpha-x-circle' : 'sword'}
                size={20}
                />
            )}
            renderLeftIcon={() => (
                <MaterialIcon
                style={styles.icon}
                color={isFocus ? '#9100ca' : '#ca0000'}
                name={isFocus ? 'snowboard' : 'sledding'}
                size={20}
                />
        )}
        />
    </View>
    );
};

export default CustomDropdown;
