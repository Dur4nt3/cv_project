export default function ExperienceErrorNotice({ errors }) {
    return (
        <div className='section-errors' aria-live='polite'>
            <h3 className='error-heading'>Submission Error:</h3>
            <ul className='error-list'>
                {Object.keys(errors).map((key) => {
                    const errorLabels = {
                        companyName: 'Company Name',
                        companyLocation: 'Company Location',
                        position: 'Position',
                        positionStartDate: 'Position Start Date',
                        positionEndDate: 'Position End Date'
                    };
                    const errorDescriptions = {
                        companyName: 'Ensure to not leave this input blank',
                        companyLocation: 'Ensure to not leave this input blank',
                        position: 'Ensure to not leave this input blank',
                        positionStartDate: 'Must not be blank, must be a date in the past, must not be in a later date than the end date',
                        positionEndDate: 'Must be in a later date than the start date (can be left blank).'
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
