import { countriesar } from "./countries_ar";
import { countriesen } from "./countries_en";
import { countrieses } from "./countries_es";
import { countriesru } from "./countries_ru";
import { countriesuk } from "./countries_uk";

export interface ICountries {
    getCountries: (lang: 'ru' | 'es' | 'en' | 'uk' | 'ar', search?: string) => Array<{ countryName: string, phcode: string, key: string; mask: string; }>;
    getCountryByIso: (lang: 'ru' | 'es' | 'en' | 'uk' | 'ar', key: string) => { countryName: string, phcode: string, key: string; mask: string; };
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

    getCountryByIso = (lang: 'ru' | 'es' | 'en' | 'uk' | 'ar', key: string) => {
        try {
            const list = { ru: countriesru, uk: countriesuk, ar: countriesar, en: countriesen, es: countrieses, };
            const countries = list[lang];
            if (countries) {
                return countries[key];
            } else {
                return countriesen[key] || {};
            }
        } catch (error) {
            console.warn('Countries -> getCountryByIso: ', error);
            return {};
        }
    };

    getCountries = (lang: 'ru' | 'es' | 'en' | 'uk' | 'ar', search?: string) => {
        try {
            const list = { ru: countriesru, uk: countriesuk, ar: countriesar, en: countriesen, es: countrieses, };
            const countries = list[lang];
            if (countries) {
                if (search && !isNaN(Number(search))) {
                    const searchLowerCase = search.toLowerCase();
                    return Object.values(countries).filter(item => item.phcode.toLowerCase().includes(searchLowerCase));
                } else if (search && countries) {
                    const searchLowerCase = search.toLowerCase();
                    return Object.values(countries).filter(item => item.countryName.toLowerCase().includes(searchLowerCase));
                }
                return Object.values(countries);
            } else {
                return Object.values(countriesen);
            }
        } catch (error) {
            console.warn('Countries -> getCountries: ', error);
            return [] as Array<{ countryName: string, phcode: string, key: string; mask: string; }>;
        }
    };

};