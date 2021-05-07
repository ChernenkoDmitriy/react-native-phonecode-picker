# react-native-phonecode-picker

React Native components for picking phone number code. Supports 5 languages (Arab, German, French, Italian, Polish, Ukrainian, Russian, English, Spanish, Turkish)

![React-native-phonecode-picker iOS](https://github.com/ChernenkoDmitriy/react-native-phonecode-picker/blob/main/assets/phonePicker.gif)


## Install

```
npm react-native-phonecode-picker --save
```
---

## Minimum examples

```ts
import React, { useEffect, useState } from 'react';
import { View, Modal, SafeAreaView } from 'react-native';
import { PhoneInput, Countries, PhoneList } from 'react-native-phonecode-picker';

export const PhonePicker = () => {
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState({ countryName: '', phcode: '', key: '', mask: '', });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const country = Countries.getCountryByIso('en', 'UA');
        setCountry(country);
    }, []);

    const onChooseCountry = (country: { countryName: string; phcode: string; key: string; mask: string; }) => {
        setCountry(country);
        setVisible(false);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 }}>
            <PhoneInput country={country} value={phone} onChangeText={setPhone} onPress={() => { setVisible(true) }} />
            <Modal visible={visible} animationType='slide'>
                <SafeAreaView style={{ flex: 1 }}>
                    <PhoneList language={'en'} onPress={onChooseCountry} isSearch={true} />
                </SafeAreaView>
            </Modal>
        </View>
    )
};
```
---

## Examples

```js
import { PhoneList } from 'react-native-phonecode-picker';

<PhoneList onPress={(country)=>console.log('country->', country)} language='en'/>
```

## API

Language = 'ru' | 'es' | 'en' | 'ua' | 'ar' | 'de' | 'el' | 'fr' | 'it' | 'pl' | 'tr'

### Countries

getCountries - returns countries array filtered by search.

#### Class type

```ts
interface ICountries {
    getCountries: (lang: Language, search?: string) => Array<{ countryName: string, phcode: string, key: string; mask: string; }>;
    getCountryByIso: (lang: Language, key: string) => { countryName: string, phcode: string, key: string; mask: string; };
};
```

#### Usage example

```js
console.log(Countries.getCountries('en'));
```

---

### Flags

getFlag - returns source flag by country key.
getAllFlags - returns all source flag.

#### Class type

```ts
interface IFlags {
	getFlag: (key: string) => any;
	getAllFlags: () => object;
};
```

#### Usage example

```js
<Image source={Flags.getFlag('US')} resizeMode="stretch" style={{ width: 30, height: 30 }} />
```

---

### PhoneList

#### Component props

```ts
interface Props {
        language: Language;
        isSearch?: boolean;
        onPress: (country: { countryName: string; phcode: string; key: string; mask: string; }) => void;
        containerStyle?: object;
        itemContainerStyle?: object;
        textStyle?: object;
        testID?: string;
        placeholder?: string;
    };
```
---

### PhoneItem

#### Component props

```ts
interface Props {
        country: { countryName: string; phcode: string; key: string; };
        flag: sourseImage;
        testID: string;
        onPress: (country: { countryName: string; phcode: string; key: string; }) => void;
        itemContainerStyle?: object;
        textStyle?: object;
    };
```
---

### PhoneInput

#### Component props

```ts
interface Props {
    country: { countryName: string; phcode: string; key: string; mask: string; };
        value: string;
        onPress: () => void;
        onChangeText: (text: string) => void;
        style?: {
            container?: object,
            textInput?: object,
            placeholderTextColor?: string,
        };
        autoFocus?: boolean;
        testID?: string;
        placeholder?: string;
        onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void | undefined;
        onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void | undefined;
    };
```
---

### PhoneSearch

#### Component props

```ts
interface Props {
        serchString: string;
        onChangeText: (text: string) => void;
        placeholder?: string;
    };
```
---

## License

ISC
