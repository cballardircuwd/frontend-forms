import React, { useState } from "react";
import { View, TextInput, SafeAreaView, Text } from "react-native";
import styles from '../styles';


const TextField = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
    <SafeAreaView style={{alignItems: 'center',}}>
        <View style={styles.textInputBorder}> 
                <TextInput
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    style={styles.textInput}
                    placeholder="First Name"
                />
        <Text>  </Text>
                <TextInput
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    style={styles.textInput}
                    placeholder="Last Name"
                />
            </View>

            <View style={styles.textInputBorder}>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    style={styles.textInput}
                    placeholder="Email"
                />
            </View>
        </SafeAreaView>
    )
}

export default TextField;