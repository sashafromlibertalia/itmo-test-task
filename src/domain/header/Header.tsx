import React from 'react';
import Logo from "../../../public/itmo.svg"

import HeaderContainer from "./layout/HeaderContainer";
import HeaderBody from "./layout/HeaderBody";

import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderBody>
                <Logo/>
                <LanguageSwitcher />
            </HeaderBody>
        </HeaderContainer>
    );
};

export default Header;