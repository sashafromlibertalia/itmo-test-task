import { LanguagesEnum } from "../dto/news.query";

export const formatLocale = (locale: LanguagesEnum) => {
    switch (locale) {
        case LanguagesEnum.RUSSIAN:
            return "🇷🇺 Рус"
        case LanguagesEnum.ENGLISH:
            return "🇬🇧 Eng"
        default:
            return "❌ Ошибка"
    }
}