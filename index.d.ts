import React, { FC } from 'react';

declare module 'react-native-phonecode-picker' {

    export class PhoneSearch extends React.Component<{
        searchString: string;
        onChangeText: (text: string) => void;
        placeholder?: string;
    }> { };

    interface PhoneListProps {
        language: 'ru' | 'es' | 'en' | 'uk' | 'ar';
        isSearch?: boolean;
        onPress: (country: { countryName: string; phcode: string; key: string; mask: string; }) => void;
        containerStyle?: object;
        itemContainerStyle?: object;
        textStyle?: object;
        testID?: string;
        placeholder?: string;
        filtered?: string;
    }

    export class PhoneList extends React.Component<PhoneListProps> { }

    export class PhoneItem extends React.Component<{
        country: { countryName: string; phcode: string; key: string; };
        flag: any;
        testID: string;
        onPress: (country: { countryName: string; phcode: string; key: string; mask: string; }) => void;
        itemContainerStyle?: object;
        textStyle?: object;
    }> { };

    interface IPhoneInput {
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
        inputProps?: TextInputMaskProps;
        showFlag?: boolean;
    }

    type Country = { countryName: string, phcode: string, key: string; mask?: string; };

    type Language = 'ru' | 'es' | 'en' | 'ua' | 'ar' | 'de' | 'el' | 'fr' | 'it' | 'pl' | 'tr';

    interface ICountries {
        getCountries: (lang: Language, search?: string) => Array<Country>;
        getCountryByIso: (lang: Language, key: string) => Array<Country>;
        getCountryByPhoneCode: (lang: Language, key: string) => Country | undefined;
    }

    interface IFlags {
        getFlag: (key: string) => any;
        getAllFlags: () => object;
    }

    export const PhoneInput: FC<IPhoneInput> = (props: IPhoneInput) => { };

    export const FlagsApi: IFlags;

    export const CountriesApi: ICountries;
};
