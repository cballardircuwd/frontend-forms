import React, { useState } from 'react';
import { View } from "react-native";

import styles from '../styles';
import { SelectCountry } from 'react-native-element-dropdown';

const data = [

    {
        value: '1',
        lable: 'Michael',
        image: {
        uri: 'https://scontent.ftol2-1.fna.fbcdn.net/v/t1.6435-9/92997995_10215961100528110_2504501786572750848_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HYhzlIe6EAUAX-K4ARv&_nc_ht=scontent.ftol2-1.fna&oh=00_AfCZRVXnYwMrD7lgdWdhNerKzcok6v173oRuBs9bOdGNcg&oe=6380E987',
        },
    },
    {
        value: '2',
        lable: 'TJ',
        image: {
        uri: 'https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/311639496_10222185736778889_2648309153043849378_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SWLBPxSjFVcAX_X5Mbt&_nc_ht=scontent.ftol2-1.fna&oh=00_AfArzbY8qrwUcW-tGx7nyxKPOoLiEYiNFcOkC21NXYBn-g&oe=63609976',
        },
    },
    {
        value: '3',
        lable: 'Chris',
        image: {
        uri: 'https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/223442594_10218553547780057_6061718083755583014_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hXDhUaSuWMYAX_q83I5&_nc_ht=scontent.ftol2-1.fna&oh=00_AfB7hdactAj-IOKyVwYO96mEwFnQnconykzx1o05m1e4Bw&oe=6360FF9F',
        },
    },
    {
        value: '4',
        lable: 'Jared',
        image: {
        uri: 'https://media-exp1.licdn.com/dms/image/C5603AQFVlX2gqS4c5Q/profile-displayphoto-shrink_200_200/0/1660449508298?e=1672272000&v=beta&t=W0bFIHFWgi0OCtrXJMKy3HYWOIKCc3mxHVimbz9Epdc',
        },
    },
    {
        value: '5',
        lable: 'Austin',
        image: {
        uri: 'https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/215046201_4029785337120541_5258268838600477559_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7DQ1A0aQADgAX9kmF66&_nc_ht=scontent.ftol2-1.fna&oh=00_AfB_SoyZu9ON8v0IETJF1uERSg3a6JhYsj-gylW7yHIyAA&oe=636019FB',
        },
    },
    ];


const SelectWithImage = () => {
    const [item, setItem] = useState('1');

    return (
        <View style={styles.container}>
            <SelectCountry
                style={styles.dropdownSelectImage}
                selectedTextStyle={styles.selectedTextStyle2}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={300}
                data={data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="Select Employee"
                searchPlaceholder="Search..."
                onChange={e => {
                    setItem(e.value);
                }}
            />
        </View>
    );
};

export default SelectWithImage;

