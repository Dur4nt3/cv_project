import EducationErrorNotice from './EducationErrorNotice';

export default function EducationSegment({
    itemId,
    education,
    stateUpdater,
    updateEducation,
    errors,
    setPreviewStatus,
}) {
    const educationItem = education[itemId];

    return (
        <div className='education-segment' id={itemId}>
            <h3 className='education-segment-heading'>
                Education {itemId.slice(3)}
            </h3>

            {errors !== null && errors !== undefined && (
                <EducationErrorNotice errors={errors} />
            )}

            {Object.keys(educationItem).map((key) => {
                let finalInput;

                const labels = {
                    institution: 'Institution Name',
                    label: 'Education Label',
                    gradDate: 'Graduation Date',
                    description: 'Description'
                };

                const placeholders = {
                    institution: 'E.g., Rice University',
                    label: 'E.g., BSc in Computer Science',
                    description: 'E.g., GPA: 3.X/4; Science Honors Society.'
                };

                if (key === 'description') {
                    finalInput = (
                        <textarea
                            required={false}
                            value={educationItem[key]}
                            onChange={(event) =>
                                updateEducation(
                                    event,
                                    itemId,
                                    key,
                                    education,
                                    stateUpdater,
                                    setPreviewStatus
                                )
                            }
                            placeholder={placeholders[key]}
                        ></textarea>
                    );
                } else {
                    finalInput = (
                        <input
                            className='form-input'
                            type={key === 'gradDate' ? 'date' : 'text'}
                            required={true}
                            value={educationItem[key]}
                            onChange={(event) =>
                                updateEducation(
                                    event,
                                    itemId,
                                    key,
                                    education,
                                    stateUpdater,
                                    setPreviewStatus
                                )
                            }
                            placeholder={placeholders[key]}
                        />
                    );
                }

                return (
                    <div className='form-row' key={key}>
                        <label className='form-label'>
                            {labels[key]}
                            {finalInput.type === 'input' && <span className='required-indicator'>*</span>}
                        </label>
                        {finalInput}
                    </div>
                );
            })}
        </div>
    );
}
