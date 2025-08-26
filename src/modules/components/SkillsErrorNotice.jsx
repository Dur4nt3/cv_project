export default function SkillsErrorNotice({ errors }) {
    return (
        <div className='section-errors' aria-live='polite'>
            <h3 className='error-heading'>Submission Error:</h3>
            <ul className='error-list'>
                {Object.keys(errors).map((key) => {
                    const errorLabels = {
                        type: 'Skill Category',
                        description: 'Description',
                    };
                    const errorDescriptions = {
                        type: 'Ensure to not leave this input blank',
                        description: 'Ensure to not leave this input blank',
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
