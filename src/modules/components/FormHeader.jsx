export default function FormHeader({ updateClearNotice, imgSrc }) {
    return (<div className='form-header'>
        <h1 className='form-heading'>
            <span>CV Details</span>
            <button
                className='img-button clear-all-data'
                aria-label='clear all form data'
                onClick={(event) => {
                    event.preventDefault();
                    updateClearNotice(true);
                }}
            >
                <img
                    // Better contrast with this version
                    // Therefore, no adjustment needed for themes
                    src={imgSrc}
                    alt='clear all form data'
                />
            </button>
        </h1>
        <p className='required-notice'>
            Required fields are marked with an asterisk (*)
        </p>
    </div>);
}
