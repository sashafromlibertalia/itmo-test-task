import React, { useState } from 'react';
import SwitcherContainer from "./layout/SwitcherContainer";
import LanguageCell from "./layout/LanguageCell";
import SelectedCell from "./layout/SelectedCell";
import Menu from "./layout/Menu";
import styles from "../../../../../styles/modules/Main.module.css"
import { LanguagesEnum } from "../../../../infrastructure/dto/news.query";
import { useDispatch, useSelector } from "react-redux";
import { DefaultStateModel } from "../../../../infrastructure/store/store.model";
import { formatLocale } from "../../../../infrastructure/helpers/locale.formatter";
import { Action } from "../../../../infrastructure/store/reducer";
import { Actions } from "../../../../infrastructure/store/actions";

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false)
    const locale = useSelector<DefaultStateModel>(state => state.locale) as LanguagesEnum
    const dispatch = useDispatch()

    const toggleLanguages = () => {
        setIsOpen(!isOpen)
    }

    const setLocale = (updatedLocale: LanguagesEnum) => {
        setIsOpen(false)
        if (updatedLocale === locale) return
        
        const update: Action = {
            type: Actions.CHANGE_LOCALE,
            payload: updatedLocale
        }
        dispatch(update)
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