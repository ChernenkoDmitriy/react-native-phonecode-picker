import React, { FC } from 'react';
import { Text, View, StyleSheet, TextInput, NativeSyntheticEvent, TextInputFocusEventData, Image, Pressable } from 'react-native';

interface Props {
    country: { countryName: string; phcode: string; key: string; mask: string };
    onPress: () => void;
    value: string;
    onChangeText: (text: string) => void;
    style?: {
        container?: object,
        textInput?: object,
        phoneCodeContainer?: object,
        placeholderTextColor?: string,
    };
    autoFocus?: boolean;
    testID?: string;
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void | undefined;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void | undefined;
};

export const PhoneInput: FC<Props> = ({ country, value, onChangeText, style, autoFocus = false, testID = 'PhoneInput', onBlur = () => { }, onFocus = () => { }, onPress = () => { } }) => {
    const placeholder = country.mask?.substring(country.phcode.length, country.mask.length).trim() || '';

    const formatedValue = (value: string) => {
        let result = value;
        if (placeholder) {
            result = '';
            let counter = 0;
            Array.from(placeholder).forEach((number) => {
                if (counter < value.length) {
                    if (number === '0') {
                        result += value[counter];
                        counter++;
                    } else {
                        result += number;
                    }
                }
            });
        }
        return result;
    };

    const onChange = (str: string) => {
        const number = str.replace(/[^0-9]/g, '');
        onChangeText(number);
    };

    return (
        <View style={[styles.container, style?.container]}>
            <Pressable style={({ pressed }) => [styles.phoneCodeContainer, style?.phoneCodeContainer, { opacity: pressed ? 0.5 : 1 }]} onPress={onPress}>
                <Text style={styles.text}>+{country?.phcode}</Text>
                <Image source={require('./resources/Vector.png')} resizeMode="stretch" style={{ width: 9, height: 6 }} />
            </Pressable>
            <TextInput
                maxLength={placeholder.length ? placeholder.length : undefined}
                autoFocus={autoFocus}
                keyboardType={'phone-pad'}
                testID={`textInput${testID}`}
                accessibilityLabel={`textInput${testID}`}
                placeholderTextColor={style?.placeholderTextColor || '#DCE1E2'}
                style={[styles.textImput, style?.textInput]}
                value={formatedValue(value)}
                onChangeText={onChange}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                numberOfLines={1}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 44,
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        alignItems:'center',
    },
    phoneCodeContainer: {
        flexDirection: 'row',
        height: '100%',
        width: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textImput: {
        padding: 0,
        paddingHorizontal: 10,
        height: 44,
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    text:{
        alignSelf:'center',
        fontSize: 16,
        fontWeight: 'bold', 
    },
});
