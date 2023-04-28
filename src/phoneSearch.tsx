import React, { FC, memo } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, ViewStyle, TextInputProps } from 'react-native';
import { CloseIcon } from './closeIcon';
import { SearchIcon } from './searchIcon';

interface Props extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    containerStyle?: ViewStyle;
    iconColor?: string;
};

export const PhoneSearch: FC<Props> = memo(({ containerStyle, iconColor, value = '', onChangeText, ...restProps }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.svgContainer}>
                <SearchIcon color={iconColor} />
            </View>
            <TextInput
                value={value}
                style={styles.textInput}
                underlineColorAndroid='transparent'
                onChangeText={onChangeText}
                placeholderTextColor='#999'
                {...restProps}
            />
            {value ? <TouchableOpacity style={styles.svgContainer} onPress={() => { onChangeText('') }}  >
                <CloseIcon width={32} height={32} color={iconColor} />
            </TouchableOpacity> : null}
        </View>
    );
});

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#384868',
        borderRadius: 4,
        backgroundColor: '#e8e6e626',
        alignItems: 'center',
    },
    svgContainer: {
        width: 48,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        color: '#000',
        padding: 0,
        paddingVertical: 0,
        marginLeft: 12,
        width: '100%',
        fontSize: 16,
        height: '100%',
    },
});