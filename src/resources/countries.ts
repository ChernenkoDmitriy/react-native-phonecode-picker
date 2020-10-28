import { countriesar } from "./countries_ar";
import { countriesen } from "./countries_en";
import { countrieses } from "./countries_es";
import { countriesru } from "./countries_ru";
import { countriesuk } from "./countries_uk";

export interface ICountries {
    getCountries: (lang: 'ru' | 'es' | 'en' | 'uk' | 'ar', search?: string) => Array<{ countryName: string, phcode: string, key: string }>;
};

export class Countries implements ICountries {
    private static exist: boolean;
    private static instance: Countries;

    constructor() {
        if (Countries.exist) {
            return Countries.instance;
        }
        Countries.exist = true;
    };

    getCountries = (lang: 'ru' | 'es' | 'en' | 'uk' | 'ar', search?: string) => {
        const list = { ru: countriesru, uk: countriesuk, ar: countriesar, en: countriesen, es: countrieses, };
        const countries = list[lang];
        if (search && countries) {
            const searchLowerCase = search.toLowerCase();
            return Object.values(countries).filter(item => item.countryName.toLowerCase().includes(searchLowerCase));
        }
        return Object.values(countries)
    };

};