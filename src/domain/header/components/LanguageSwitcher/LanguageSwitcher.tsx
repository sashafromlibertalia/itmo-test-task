import React, { useState } from 'react';
import SwitcherContainer from "./layout/SwitcherContainer";
import LanguageCell from "./layout/LanguageCell";
import SelectedCell from "./layout/SelectedCell";
import Menu from "./layout/Menu";
import styles from "../../../../../styles/modules/Main.module.css"
import { LanguagesEnum } from "../../../../infrastructure/dto/news.query";
import { useDispatch } from "react-redux";
import { formatLocale } from "../../../../infrastructure/helpers/locale.formatter";
import { Actions, changeLocaleAction } from "../../../../infrastructure/store/locale/actions";
import { useTypedSelector } from "../../../../infrastructure/hooks/useTypedSelector";

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { locale } = useTypedSelector(state => state.locale)
    const dispatch = useDispatch()

    const toggleLanguages = () => {
        setIsOpen(!isOpen)
    }

    const setLocale = (updatedLocale: LanguagesEnum) => {
        setIsOpen(false)
        if (updatedLocale === locale) return

        dispatch(changeLocaleAction(updatedLocale))
        setIsOpen(false)
    }

    return (
        <SwitcherContainer>
            <SelectedCell onClick={toggleLanguages}>
                <span>{formatLocale(locale)}</span>
                <span className={styles.switcherArrow}/>
            </SelectedCell>
            {
                isOpen ? <Menu>
                    <LanguageCell onClick={() => {
                        setLocale(LanguagesEnum.RUSSIAN);
                    }}>{formatLocale(LanguagesEnum.RUSSIAN)}</LanguageCell>
                    <LanguageCell onClick={() => {
                        setLocale(LanguagesEnum.ENGLISH);
                    }}>{formatLocale(LanguagesEnum.ENGLISH)}</LanguageCell>
                </Menu> : null
            }
        </SwitcherContainer>
    );
};

export default LanguageSwitcher;