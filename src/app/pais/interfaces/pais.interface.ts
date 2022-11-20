export interface Country {
    name:           name;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         string;
    subregion:      string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number;
    gini:           number;
    timezones:      string[];
    borders:        string[];
    nativeName:     string;
    numericCode:    string;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs:  RegionalBloc[];
    cioc:           string;
    ccn3:           string;
    cca3:           string;
}

export interface name {
    common: string;
    nativeName: nativeName;
    official: string;
};

export interface nativeName{
    common: string;
    official: string;
}

export interface spa {

}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface Language {
    iso639_1:   string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export interface RegionalBloc {
    acronym:       string;
    name:          string;
    otherAcronyms: any[];
    otherNames:    any[];
}

export interface Translations {
    ara: ara;
    bre: ara;
    ces: ara;
    cym: ara;
    deu: ara;
    est: ara;
    fin: ara;
    fra: ara;
    hrv: ara;
    hun: ara;
    ita: ara;
    jpn: ara;
    kor: ara;
    nld: ara;
    per: ara;
    pol: ara;
    por: ara;
    rus: ara;
    slk: ara;
    spa: ara;
    swe: ara;
    tur: ara;
    urd: ara;
    zho: ara;
}

export interface ara {
    common: string;
    official: string;
}


