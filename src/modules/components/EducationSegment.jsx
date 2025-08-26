import EducationDescription from './EducationDescription';
import EducationErrorNotice from './EducationErrorNotice';

export default function EducationSegment({
    theme,
    itemId,
    education,
    stateUpdater,
    updateEducation,
    addDescriptionBullets,
    removeDescriptionBullets,
    errors,
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
                if (key === 'description') {
                    return (
                        <EducationDescription
                            key={itemId}
                            description={educationItem[key]}
                            itemId={itemId}
                            theme={theme}
                            state={education}
                            stateUpdater={stateUpdater}
                            addDescriptionBullets={addDescriptionBullets}
                            removeDescriptionBullets={removeDescriptionBullets}
                            updateEducation={updateEducation}
                        />
                    );
                }

                const labels = {
                    institution: 'Institution Name',
                    label: 'Education Label',
                };

                const placeholders = {
                    institution: 'E.g., Rice University',
                    label: 'E.g., BSc in Computer Science',
                };

                return (
                    <div className='form-row' key={key}>
                        <label className='form-label'>
                            {labels[key]}
                            <span className='required-indicator'>*</span>
                        </label>
                        <input
                            className='form-input'
                            type='text'
                            required={true}
                            value={educationItem[key]}
                            onChange={(event) =>
                                updateEducation(
                                    event,
                                    itemId,
                                    key,
                                    education,
                                    stateUpdater
                                )
                            }
                            placeholder={placeholders[key]}
                        />
                    </div>
                );
            })}
        </div>
    );
}
