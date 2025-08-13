import questionLightSvg from '../../assets/media/icons/question-light-mode.svg';
import questionDarkSvg from '../../assets/media/icons/question-dark-mode.svg';

export default function InfoTooltipButton({className, id, label, theme}) {
    return (
        <button
            className={`img-button ${className}`}
            aria-label={label}
            id={id}
            data-tooltip-id={id}
            onClick={(event) => {
                event.preventDefault();
            }}
        >
            <img
                src={theme === 'light' ? questionLightSvg : questionDarkSvg}
                alt={label}
                className='inline-img'
            />
        </button>
    );
}
