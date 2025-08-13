import '../../assets/stylesheets/ThemeSwitch.css';

export default function ThemeSwitch({ theme, imgSrc, changeTheme }) {
    return (
        <button
            className='toggle-theme'
            onClick={changeTheme}
            aria-live='polite'
        >
            <img
                src={imgSrc}
                alt={
                    theme === 'light'
                        ? 'Switch to dark mode'
                        : 'Switch to light mode'
                }
            />
        </button>
    );
}
