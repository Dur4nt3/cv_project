import { useState } from 'react';

import ThemeSwitch from './modules/components/ThemeSwitch';
import Header from './modules/components/Header';
import MainCont from './modules/components/MainCont';
import Footer from './modules/components/Footer';

import ghMarkLight from './assets/media/icons/github-mark-light-mode.svg';
import ghMarkDark from './assets/media/icons/github-mark-dark-mode.svg';

import lightIcon from './assets/media/icons/light-mode.svg';
import darkIcon from './assets/media/icons/dark-mode.svg';

function App() {
    const [theme, changeTheme] = useState('light');

    function handleThemeChange() {
        if (theme === 'light') {
            document.body.classList.add('dark-mode');
            changeTheme('dark');
            return;
        }
        document.body.classList.remove('dark-mode');
        changeTheme('light');
    }

    return (
        <>
            <ThemeSwitch
                theme={theme}
                imgSrc={theme === 'light' ? lightIcon : darkIcon}
                changeTheme={handleThemeChange}
            />
            <Header />
            <MainCont theme={theme} />
            <Footer imgSrc={theme === 'light' ? ghMarkLight : ghMarkDark} />
        </>
    );
}

export default App;
