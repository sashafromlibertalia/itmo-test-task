import React from 'react';
import SwitcherContainer from "./layout/SwitcherContainer";
import LanguageCell from "./layout/LanguageCell";
import SelectedCell from "./layout/SelectedCell";
import styles from "../../../../../styles/modules/Main.module.css"

const LanguageSwitcher = () => {
    return (
        <SwitcherContainer>
            <SelectedCell>
                <LanguageCell>🇷🇺   Рус</LanguageCell>
                <span className={styles.switcherArrow}/>
            </SelectedCell>
        </SwitcherContainer>
    );
};

export default LanguageSwitcher;