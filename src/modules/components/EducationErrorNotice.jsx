export default function EducationErrorNotice({ errors }) {
    return (
        <div className='section-errors' aria-live='polite'>
            <h3 className='error-heading'>Submission Error:</h3>
            <ul className='error-list'>
                {Object.keys(errors).map((key) => {
                    const errorLabels = {
                        institution: 'Institution',
                        label: 'Education Label',
                        gradDate: 'Graduation Date'
                    };
                    const errorDescriptions = {
                        institution: 'Ensure to not leave this input blank',
                        label: 'Ensure to not leave this input blank',
                        gradDate: 'Ensure to not leave this input blank'
                    };

                    return (
                        <li className='error-item' key={key}>
                            <b>{errorLabels[key]}: </b>
                            {errorDescriptions[key]}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
