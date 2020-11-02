import { PhoneSearch } from './src/phoneSearch';
import { PhoneList } from './src/phoneList';
import { PhoneItem } from './src/phoneItem';
import { Flags as FlagsClass } from './src/resources/flags';
import { Countries as CountriesClass } from './src/resources/countries';
import { PhoneInput } from './src/phoneInput';

const Countries = new CountriesClass();
const Flags = new FlagsClass();

export { PhoneSearch, PhoneList, PhoneItem, Flags, Countries, PhoneInput };
