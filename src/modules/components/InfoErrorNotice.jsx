export default function InfoErrorNotice({ errors }) {
    return (
        <div className='section-errors' aria-live="polite">
            <h3 className='error-heading'>
                Submission Error:
            </h3>
            <ul className='error-list'>
                {Object.keys(errors).map((key) => {
                    const errorLabels = {
                        fullName: 'Full Name',
                        email: 'Email',
                        position: 'Position',
                    };
                    const errorDescriptions = {
                        fullName: 'Ensure to not leave this input blank',
                        email: 'Provided email is blank or invalid, ensure to use the format example@vendor.tld',
                        position: 'Ensure to not leave this input blank',
                    };

                    return <li className='error-item' key={key}><b>{errorLabels[key]}: </b>{errorDescriptions[key]}</li>
                })}
            </ul>
        </div>
    );
}
