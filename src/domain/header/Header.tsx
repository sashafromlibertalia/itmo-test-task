import React from 'react';
import Logo from "../../../public/itmo.svg"
import Link from "next/link"

import HeaderContainer from "./layout/HeaderContainer";
import HeaderBody from "./layout/HeaderBody";

import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderBody>
                <Link href="/" passHref>
                    <Logo style={{ cursor: "pointer" }}/>
                </Link>
                <LanguageSwitcher />
            </HeaderBody>
        </HeaderContainer>
    );
};

export default Header;