const enum LanguagesEnum {
    RUSSIAN = 1,
    ENGLISH
}

export type NewsFetchProps = {
    language_id?: LanguagesEnum,
}