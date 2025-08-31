import ResumeLink from '../PDF/ResumeLink';
import ResumeDownload from '../PDF/ResumeDownload';

import newTabLight from '../../assets/media/icons/new-tab-light-mode.svg';
import newTabDark from '../../assets/media/icons/new-tab-dark-mode.svg';

export default function FormActions({
    handleCheck,
    theme,
    previewReady,
    stateObj,
    toggledSections,
}) {
    return (
        <div className='form-buttons-cont'>
            <div className='form-buttons-type1'>
                <button
                    className={
                        previewReady
                            ? 'check-submission preview-ready'
                            : 'check-submission preview-not-ready'
                    }
                    onClick={handleCheck}
                    aria-label='preview your cv (opens in a new tab)'
                >
                    <span>Check</span>
                </button>
                <button
                    tabIndex={previewReady ? 0 : -1}
                    className={
                        previewReady
                            ? 'preview-submission preview-ready'
                            : 'preview-submission preview-not-ready'
                    }
                    type='button'
                    aria-label='preview your cv (opens in a new tab)'
                    onClick={() => {
                        if (previewReady === true) {
                            const blob = document.querySelector('.pdf-blob');
                            const pdfLink = blob.lastChild.href;
                            window.open(pdfLink, '_blank').focus();
                        }
                    }}
                >
                    <span>Preview</span>
                    <img
                        src={theme === 'light' ? newTabLight : newTabDark}
                        alt='open in a new tab'
                        className='inline-img new-tab-icon'
                    />
                    <div className='pdf-blob'>
                        {previewReady && (
                            <ResumeLink
                                stateObj={stateObj}
                                toggledSections={toggledSections}
                            />
                        )}
                    </div>
                </button>
            </div>
            <div className='form-buttons-type2'>
                <button
                    type='button'
                    aria-label='download your cv'
                    className={
                        previewReady
                            ? 'cv-download-button preview-ready'
                            : 'cv-download-button preview-not-ready'
                    }
                >
                    {previewReady && (
                        <ResumeDownload
                            stateObj={stateObj}
                            toggledSections={toggledSections}
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
