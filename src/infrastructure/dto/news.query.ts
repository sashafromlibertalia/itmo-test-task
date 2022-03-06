export const enum LanguagesEnum {
    RUSSIAN = 1,
    ENGLISH
}

export type NewsFetchQuery = {
    language_id?: LanguagesEnum,
    per_page?: number,
    lead?: boolean
}