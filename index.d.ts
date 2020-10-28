import { ICountries } from './src/resources/countries';
import { IFlags } from './src/resources/flags';

declare module 'react-native-modal-alert-wrapper' {
    import * as React from 'react';

    export class PhoneSearch extends React.Component<{
        serchString: string;
        onChangeText: (text: string) => void;
        placeholder?: string;
    }> { };

    export class PhoneList extends React.Component<{
        language: 'ru' | 'es' | 'en' | 'uk' | 'ar';
        isWithSearch?: boolean;
        onPress: (country: { countryName: string; phcode: string; key: string; }) => void;
        containerStyle?: object;
        itemContainerStyle?: object;
        textStyle?: object;
        testID?: string;
        placeholder?: string;
    }> { };

    export class PhoneItem extends React.Component<{
        country: { countryName: string; phcode: string; key: string; };
        flag: any;
        testID: string;
        onPress: (country: { countryName: string; phcode: string; key: string; }) => void;
        itemContainerStyle?: object;
        textStyle?: object;
    }> { };

    export const Flags: IFlags;

    export const Countries: ICountries;
};
