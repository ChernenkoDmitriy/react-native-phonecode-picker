export interface ICountries {
    getCountries: (lang: Language, search?: string) => Array<Country>;
    getCountryByIso: (lang: Language, key: string) => Array<Country>;
    getCountryByPhoneCode: (lang: Language, key: string) => Country;
};

export type Country = { countryName: string, phcode: string, key: string; mask: string; };

export type Language = 'ru' | 'es' | 'en' | 'ua' | 'ar' | 'de' | 'el' | 'fr' | 'it' | 'pl' | 'tr';