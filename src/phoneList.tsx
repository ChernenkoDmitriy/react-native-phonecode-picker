import React, { FC, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { PhoneItem } from './phoneItem';
import { PhoneSearch } from './phoneSearch';
import { Countries } from './api/countries/Countries';
import { IFlags } from './api/flags/IFlags';
import { Country, ICountries } from './api/countries/ICountries';
import { Flags } from './api/flags/Flags';

interface Props {
    language: 'ru' | 'es' | 'en' | 'uk' | 'ar';
    isSearch?: boolean;
    onPress: (country: Country) => void;
    containerStyle?: object;
    itemContainerStyle?: object;
    textStyle?: object;
    testID?: string;
    placeholder?: string;
    filtered?: string;
};

export const PhoneList: FC<Props> = ({ filtered = '', placeholder = '', isSearch = false, language = 'en', onPress, containerStyle = {}, itemContainerStyle = {}, textStyle = {}, testID = 'PhoneList' }) => {
    const [flagResource] = useState<IFlags>(new Flags());
    const [countries] = useState<ICountries>(new Countries());
    const [serchString, setSerchString] = useState<string>('');
    const filter = isSearch ? serchString : filtered;

    return (
        <View style={[styles.container, containerStyle]} >
            {isSearch ? <PhoneSearch onChangeText={setSerchString} serchString={serchString} placeholder={placeholder} /> : null}
            <FlatList
                keyboardDismissMode='interactive'
                keyboardShouldPersistTaps={'handled'}
                accessibilityLabel={testID}
                testID={testID}
                data={countries.getCountries(language, filter)}
                renderItem={({ item }) =>
                    <PhoneItem
                        key={item.key}
                        country={item}
                        flag={flagResource.getFlag(item.key)}
                        testID={item.key + testID}
                        onPress={onPress}
                        itemContainerStyle={itemContainerStyle}
                        textStyle={textStyle}
                    />
                }
                keyExtractor={item => item.key}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});