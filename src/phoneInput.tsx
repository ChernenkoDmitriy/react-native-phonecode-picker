import React, { FC, useMemo } from 'react';
import { Text, View, StyleSheet, Image, ViewStyle, TextStyle, ColorValue, ImageStyle, TouchableOpacity, TextInput, TextInputProps } from 'react-native';
import { FlagsApi } from './api/flags/Flags';
import { Country } from './api/countries/ICountries';

interface Props extends TextInputProps {
    country: Country;
    onPress: () => void;
    value: string;
    onChangeText: (value: string) => void;
    styleComponent?: {
        container?: ViewStyle,
        flag?: ImageStyle;
        textInput?: TextStyle,
        textCode?: TextStyle,
        phoneCodeContainer?: ViewStyle,
        placeholderTextColor?: ColorValue,
    };
    showFlag?: boolean;
};

export const PhoneInput: FC<Props> = ({ country, value, onChangeText, styleComponent, showFlag = true, onPress, ...restProps }) => {


    const flagImage = useMemo(() => {
        return FlagsApi.getFlag(country?.key);
    }, [country?.key]);

    return (
        <View style={[styles.container, styleComponent?.container]}>
            <TouchableOpacity style={[styles.phoneCodeContainer, styleComponent?.phoneCodeContainer]} onPress={onPress} disabled={!onPress}>
                {!!showFlag && <Image source={flagImage} resizeMode='cover' style={[styles.flag, styleComponent?.flag]} />}
                {!!showFlag && <Image source={require('./resources/Vector.png')} resizeMode="stretch" style={styles.arrow} />}
                <Text style={[styles.text, styleComponent?.textCode]}>+{country?.phcode}</Text>
            </TouchableOpacity>
            <TextInput
                style={[styles.textImput, styleComponent?.textInput]}
                keyboardType={'phone-pad'}
                value={value}
                onChangeText={onChangeText}
                {...restProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 44,
        width: '100%',
        borderRadius: 4,
        alignItems: 'center',
    },
    flag: {
        width: 32,
        height: 24,
        borderRadius: 8,
        marginRight: 12,
    },
    arrow: {
        marginRight: 12,
        width: 9,
        height: 6,
    },
    phoneCodeContainer: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textImput: {
        padding: 0,
        paddingHorizontal: 10,
        flex: 1,
        fontSize: 16,
    },
    text: {
        alignSelf: 'center',
        fontSize: 16,
    },
});
