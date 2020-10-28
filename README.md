# react-native-phonecode-picker

React Native components for picking phone number code. Supports 5 languages (Ukrainian, Russian, English, Spanish, English)

## Install

```
npm react-native-phonecode-picker --save
```

## Examples

```js
import { PhoneList } from 'react-native-phonecode-picker';

<PhoneList onPress={(country)=>console.log('country->', country)} language='en'/>
```

## API

### Countries

getCountries - returns countries array filtered by search.

#### Class type

```ts
interface ICountries {
    getCountries: (lang: 'ru' | 'es' | 'en' | 'uk' | 'ar', search?: string) => Array<{ countryName: string, phcode: string, key: string }>;
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
        language: 'ru' | 'es' | 'en' | 'uk' | 'ar';
        isWithSearch?: boolean;
        onPress: (country: { countryName: string; phcode: string; key: string; }) => void;
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
