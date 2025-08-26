import newTabLight from '../../assets/media/icons/new-tab-light-mode.svg';
import newTabDark from '../../assets/media/icons/new-tab-dark-mode.svg';

export default function FormActions({ handlePreview, theme }) {
    return (
        <div className='form-buttons-cont'>
            <button
                className='preview-submission'
                onClick={handlePreview}
                aria-label='preview your cv (opens in a new tab)'
            >
                <span>Preview</span>
                <img
                    src={theme === 'light' ? newTabLight : newTabDark}
                    alt='open in a new tab'
                    className='inline-img new-tab-icon'
                />
            </button>
        </div>
    );
}
