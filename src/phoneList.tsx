import React, { FC, memo, useCallback } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { PhoneItem } from './phoneItem';
import { CountriesApi } from './api/countries/Countries';
import { Country, Language } from './api/countries/ICountries';
import { FlagsApi } from './api/flags/Flags';

interface Props extends Omit<Omit<FlatListProps<Country>, 'data'>, 'renderItem'> {
    language: Language;
    onPress: (country: Country) => void;
    containerStyle?: object;
    itemContainerStyle?: object;
    textStyle?: object;
    filter?: string;
};

export const PhoneList: FC<Props> = memo(({ filter = '', language = 'en', onPress, itemContainerStyle = {}, textStyle = {}, ...restProps }) => {

    const keyExtractor = useCallback((item: Country) => item.key, []);

    const renderItem = useCallback(({ item }: any) =>
        <PhoneItem
            key={item.key}
            country={item}
            flag={FlagsApi.getFlag(item.key)}
            onPress={onPress}
            itemContainerStyle={itemContainerStyle}
            textStyle={textStyle}
        />, [onPress, itemContainerStyle, textStyle]);

    return (
        <FlatList
            {...restProps}
            data={CountriesApi.getCountries(language, filter)}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
});