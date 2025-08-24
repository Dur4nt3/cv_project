export default function ClearNotice({ updateClearNoticeStatus, clearAll }) {
    return (
        <div
            className='modal'
            tabIndex='0'
            onKeyDown={(event) => {
                if (event.key === 'Escape') {
                    event.preventDefault();
                    document
                        .querySelector('.modal-content')
                        .classList.add('exiting-modal');
                    setTimeout(() => updateClearNoticeStatus(false), 500);
                }
            }}
        >
            <div className='modal-content'>
                <h1>Disclaimer!</h1>
                <p>You have selected the "Clear All" button.</p>
                <p>Pressing "Clear" will delete all the data you've entered.</p>
                <p>
                    If you don't wish to delete the data you've entered, please
                    select "Cancel".
                </p>

                <div className='clear-all-actions'>
                    <button
                        className='clear-data-button'
                        onClick={(event) => {
                            event.preventDefault();
                            document
                                .querySelector('.modal-content')
                                .classList.add('exiting-modal');
                            setTimeout(() => clearAll(), 500);
                        }}
                    >
                        Clear
                    </button>
                    <button
                        className='cancel-clear-button'
                        onClick={(event) => {
                            event.preventDefault();
                            document
                                .querySelector('.modal-content')
                                .classList.add('exiting-modal');
                            setTimeout(
                                () => updateClearNoticeStatus(false),
                                500
                            );
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
