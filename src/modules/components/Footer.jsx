import '../../assets/stylesheets/Footer.css';

export default function Footer({ imgSrc }) {
    // eslint-disable-next-line quotes
    const linkLabel = "project's repository";

    return (
        <footer>
            <a
                href='https://github.com/Dur4nt3/battleship_project'
                className='footer-link'
                rel='noopener noreferrer'
                aria-label={linkLabel}
            >
                <img src={imgSrc} alt='github repository' />
            </a>
        </footer>
    );
}
