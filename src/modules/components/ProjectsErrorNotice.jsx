export default function ProjectsErrorNotice({ errors }) {
    return (
        <div className='section-errors' aria-live='polite'>
            <h3 className='error-heading'>Submission Error:</h3>
            <ul className='error-list'>
                {Object.keys(errors).map((key) => {
                    const errorLabels = {
                        name: 'Name',
                        link: 'Link',
                    };
                    const errorDescriptions = {
                        name: 'Ensure to not leave this input blank',
                        link: 'Ensure to not leave this input blank; furthermore, ensure this is a valid link directing to the specified project',
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
