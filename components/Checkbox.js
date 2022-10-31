import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";
import { Checkbox } from 'react-native-paper';

const App = () => {
    const [isSelected, setSelection] = useState(false);
    const [checked, setChecked] = React.useState(false);

    return (
// https://reactnative.dev/docs/0.68/checkbox
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox} />
                <Text style={styles.label}>Is TJ Good at Fantasy Football? {isSelected ? "No 👎" : ""}</Text>
            </View>
{/* https://callstack.github.io/react-native-paper/checkbox.html#uncheckedColor */}
        <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                uncheckedColor='#aaaa15'
                color= '#66360a'
                style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}
                onPress={() => {
                    setChecked(!checked);
                } }/>
                <Text>I have to go: {!checked ? "Pee" : "Poop"}</Text>
                    

        </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        backgrounColor: "pink"
    },
    checkbox: {
        alignSelf: "center",
        backgrounColor: "pink"

    },
    label: {
        margin: 8,
    },
});

export default App;