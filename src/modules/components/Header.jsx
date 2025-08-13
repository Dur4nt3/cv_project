import '../../assets/stylesheets/Header.css';

export default function Header() {
    return (
        <header>
            <h1 className='app-heading'>
                CV Create
                <span className='header-credits'>
                    By&nbsp;
                    <a
                        href='https://github.com/Dur4nt3'
                        className='credits-name'
                        aria-label="Dante's github profile"
                        rel='noreferrer noopener'
                    >
                        Durante
                    </a>
                </span>
            </h1>
        </header>
    );
}
