import React, { FC, useMemo } from 'react';
import { Text, View, StyleSheet, Image, ViewStyle, TextStyle, ColorValue, ImageStyle, TouchableOpacity } from 'react-native';
import { FlagsApi } from './api/flags/Flags';
import TextInputMask, { TextInputMaskProps } from 'react-native-text-input-mask';

interface Props {
    country: { countryName: string; phcode: string; key: string; mask: string };
    onPress: () => void;
    value: string;
    onChangeText: (formatted: string, extracted: string | undefined) => void;
    style?: {
        container?: ViewStyle,
        flag?: ImageStyle;
        textInput?: TextStyle,
        textCode?: TextStyle,
        phoneCodeContainer?: ViewStyle,
        placeholderTextColor?: ColorValue,
    };
    inputProps: TextInputMaskProps;
    showFlag?: boolean;
};

export const PhoneInput: FC<Props> = (props) => {
    const {
        country,
        value,
        onChangeText,
        style,
        inputProps = {},
        showFlag = true,
        onPress
    } = props;

    const placeholder = country.mask?.replace(/[\[\]]/g, '') || '';

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
            <TextInputMask
                mask={country.mask}
                keyboardType={'phone-pad'}
                style={[styles.textImput, style?.textInput]}
                value={value}
                placeholderTextColor={style?.placeholderTextColor || '#DCE1E2'}
                onChangeText={onChangeText}
                placeholder={placeholder}
                numberOfLines={1}
                {...{ inputProps }}
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
