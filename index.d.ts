import { ICountries } from 'react-native-phonecode-picker/src/resources/countries';
import { IFlags } from 'react-native-phonecode-picker/src/resources/flags';
import React, { FC } from 'react';
import { Text, TextInputProps, View, StyleSheet, Image, ViewStyle, TextStyle, ColorValue, ImageStyle, TouchableOpacity, TextInput, FlatListProps } from 'react-native';

declare module 'react-native-phonecode-picker' {

    interface PhoneSearchProps extends TextInputProps {
        value: string;
        onChangeText: (text: string) => void;
        containerStyle?: ViewStyle;
        iconColor?: string;
    };

    export function PhoneSearch(props: PhoneSearchProps): JSX.Element;

    interface PhoneListProps extends Omit<Omit<FlatListProps<Country>, 'data'>, 'renderItem'> {
        language: Language;
        onPress: (country: Country) => void;
        containerStyle?: object;
        itemContainerStyle?: object;
        textStyle?: object;
        filter?: string;
    };

    export function PhoneList(props: PhoneListProps): JSX.Element;

    interface PhoneItemProps {
        country: Country;
        flag: any;
        onPress: (country: Country) => void;
        itemContainerStyle?: object;
        textStyle?: object;
    };

    export function PhoneItem(props: PhoneItemProps): JSX.Element;

    interface PhoneInputProps extends TextInputProps {
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

    export function PhoneInput(props: PhoneInputProps): JSX.Element;

    export const FlagsApi: IFlags;

    export const CountriesApi: ICountries;
};
