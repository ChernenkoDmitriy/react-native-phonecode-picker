import React, { FC, useMemo } from 'react';
import { Text, View, StyleSheet, Image, ViewStyle, TextStyle, ColorValue, ImageStyle, TouchableOpacity, TextInput } from 'react-native';
import { FlagsApi } from './api/flags/Flags';
import { Country } from './api/countries/ICountries';

interface Props extends TextInput {
    country: Country;
    onPress: () => void;
    value: string;
    onChangeText: (value: string | undefined) => void;
    style?: {
        container?: ViewStyle,
        flag?: ImageStyle;
        textInput?: TextStyle,
        textCode?: TextStyle,
        phoneCodeContainer?: ViewStyle,
        placeholderTextColor?: ColorValue,
    };
    showFlag?: boolean;
};

export const PhoneInput: FC<Props> = ({ country, value, onChangeText, style, showFlag = true, onPress, ...restProps }) => {


    const flagImage = useMemo(() => {
        return FlagsApi.getFlag(country?.key);
    }, [country?.key]);

    return (
        <View style={[styles.container, style?.container]}>
            <TouchableOpacity style={[styles.phoneCodeContainer, style?.phoneCodeContainer]} onPress={onPress} disabled={!onPress}>
                {!!showFlag && <Image source={flagImage} resizeMode='cover' style={[styles.flag, style?.flag]} />}
                {!!showFlag && <Image source={require('./resources/Vector.png')} resizeMode="stretch" style={styles.arrow} />}
                <Text style={[styles.text, style?.textCode]}>+{country?.phcode}</Text>
            </TouchableOpacity>
            <TextInput
                style={[styles.textImput, style?.textInput]}
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
