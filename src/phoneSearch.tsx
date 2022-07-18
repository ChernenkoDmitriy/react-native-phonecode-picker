import React, { FC, memo } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { CloseIcon } from './closeIcon';
import { SearchIcon } from './searchIcon';

interface Props {
    searchString: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
};

export const PhoneSearch: FC<Props> = memo(({ searchString = '', onChangeText, placeholder }) => {
    return (
        <View style={styles.container}>
            <View style={styles.svgContainer}>
                <SearchIcon />
            </View>
            <TextInput
                value={searchString}
                style={styles.textInput}
                underlineColorAndroid='transparent'
                onChangeText={onChangeText}
                placeholderTextColor='#999'
                placeholder={placeholder}
            />
            {searchString ? <TouchableOpacity style={styles.svgContainer} onPress={() => { onChangeText('') }}  >
                <CloseIcon width={32} height={32} color={'#696969'} />
            </TouchableOpacity> : null}
        </View>
    );
});

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        paddingHorizontal: 10,
    },
    svgContainer: {
        width: 56,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        color: '#000',
        padding: 0,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderColor: '#000',
    },
});