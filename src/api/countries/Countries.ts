import ar from "../../resources/countryNames/ar.json";
import de from "../../resources/countryNames/de.json";
import el from "../../resources/countryNames/el.json";
import en from "../../resources/countryNames/en.json";
import es from "../../resources/countryNames/es.json";
import fr from "../../resources/countryNames/fr.json";
import it from "../../resources/countryNames/it.json";
import pl from "../../resources/countryNames/pl.json";
import ru from "../../resources/countryNames/ru.json";
import tr from "../../resources/countryNames/tr.json";
import ua from "../../resources/countryNames/ua.json";
import phoneCodes from "../../resources/phoneCodes.json";

import { Country, ICountries, Language } from "./ICountries";

export class Countries implements ICountries {
    private static instance: Countries;
    private countryNames = { ru, es, en, ua, ar, de, el, fr, it, pl, tr };

    constructor() {
        if (Countries.instance) {
            return Countries.instance;
        }
        Countries.instance = this;
    }

    getCountryByIso = (lang: Language = 'en', key: string) => {
        try {
            const countries = this.countryNames[lang];
            if (countries) {
                //@ts-ignore
                return { ...phoneCodes[key], countryName: countries[key] }
            } else {
                //@ts-ignore
                return { ...phoneCodes[key], countryName: this.countryNames.en[key] };
            }
        } catch (error) {
            console.warn('Countries -> getCountryByIso: ', error);
            return {};
        }
    }

    getCountries = (lang: Language, search?: string) => {
        try {
            const countries = this.countryNames[lang];
            let result: Country[] = [];
            if (countries) {
                if (search && !isNaN(Number(search))) {
                    const searchPhone = search?.toLowerCase();
                    Object.keys(phoneCodes).forEach(key => {
                        // @ts-ignore
                        if (phoneCodes[key] && phoneCodes[key].phcode.toLowerCase().includes(searchPhone)) {
                            // @ts-ignore
                            result.push({ countryName: countries[key], ...phoneCodes[key] });
                        }
                    })
                } else if (search && countries) {
                    const searchCountry = search?.toLowerCase();
                    Object.keys(phoneCodes).forEach(key => {
                        // @ts-ignore
                        if (phoneCodes[key] && phoneCodes[key].countryName.toLowerCase().includes(searchCountry)) {
                            // @ts-ignore
                            result.push({ countryName: countries[key], ...phoneCodes[key] });
                        }
                    })
                } else {
                    Object.keys(phoneCodes).forEach(key => {
                        // @ts-ignore
                        result.push({ countryName: countries[key], ...phoneCodes[key] });
                    })
                }
            } else {
                Object.keys(phoneCodes).forEach(key => {
                    // @ts-ignore
                    result.push({ countryName: countriesen[key], ...phoneCodes[key] });
                })
            }
            return result;
        } catch (error) {
            console.warn('Countries -> getCountries: ', error);
            return [] as Array<{ countryName: string, phcode: string, key: string; mask: string; }>;
        }
    }

}
