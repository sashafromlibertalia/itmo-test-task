import React, { useState } from 'react';
import SwitcherContainer from "./layout/SwitcherContainer";
import LanguageCell from "./layout/LanguageCell";
import SelectedCell from "./layout/SelectedCell";
import Menu from "./layout/Menu";
import styles from "../../../../../styles/modules/Main.module.css"

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleLanguages = () => {
        setIsOpen(!isOpen)
    }

    return (
        <SwitcherContainer>
            <SelectedCell onClick={toggleLanguages}>
                <span>🇷🇺 Рус</span>
                <span className={styles.switcherArrow}/>
            </SelectedCell>
            {
                isOpen ?  <Menu>
                    <LanguageCell>🇷🇺 Рус</LanguageCell>
                    <LanguageCell>🇬🇧 Eng</LanguageCell>
                </Menu> : null
            }
        </SwitcherContainer>
    );
};

export default LanguageSwitcher;