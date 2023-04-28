import { ICountries } from 'react-native-phonecode-picker/src/resources/countries';
import { IFlags } from 'react-native-phonecode-picker/src/resources/flags';
import React, { FC } from 'react';
import { Text, View, StyleSheet, Image, ViewStyle, TextStyle, ColorValue, ImageStyle, TouchableOpacity, TextInput } from 'react-native';

declare module 'react-native-phonecode-picker' {

    export class PhoneSearch extends React.Component<{
        value: string;
        onChangeText: (text: string) => void;
        containerStyle?: ViewStyle;
        iconColor?: string;
    }> { };

    interface PhoneListProps extends FlatList {
        language: Language;
        onPress: (country: Country) => void;
        containerStyle?: object;
        itemContainerStyle?: object;
        textStyle?: object;
        filter?: string;
    };

    export class PhoneList extends React.Component<PhoneListProps> { }

    interface PhoneItemProps {
        country: Country;
        flag: any;
        onPress: (country: Country) => void;
        itemContainerStyle?: object;
        textStyle?: object;
    };

    export class PhoneItem extends React.Component<PhoneItemProps> { };

    interface PhoneInputProps extends TextInput {
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

    export class PhoneInput extends React.Component<PhoneInputProps> { };

    export const FlagsApi: IFlags;

    export const CountriesApi: ICountries;
};
