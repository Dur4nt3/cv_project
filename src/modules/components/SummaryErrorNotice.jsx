export default function SummaryErrorNotice() {
    return (
        <div className='section-errors' aria-live='polite'>
            <h3 className='error-heading'>Submission Error:</h3>
            <ul className='error-list'>
                <li className='error-item'>
                    <b>Summary: </b>
                    Ensure not to leave this input blank
                </li>
            </ul>
        </div>
    );
}
