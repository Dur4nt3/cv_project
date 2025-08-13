import PositionDescription from './PositionDescription';

export default function ExperienceSegment({
    theme,
    itemId,
    experience,
    stateUpdater,
    updateExperience,
    addDescriptionBullets,
    removeDescriptionBullets,
}) {
    const experienceItem = experience[itemId];

    return (
        <div className='experience-segment' id={itemId}>
            <h3 className='experience-segment-heading'>
                Position {itemId.slice(3)}
            </h3>
            {Object.keys(experienceItem).map((key) => {
                if (key === 'positionDescription') {
                    return (
                        <PositionDescription
                            key={itemId}
                            positionDescription={experienceItem[key]}
                            itemId={itemId}
                            theme={theme}
                            state={experience}
                            stateUpdater={stateUpdater}
                            addDescriptionBullets={addDescriptionBullets}
                            removeDescriptionBullets={removeDescriptionBullets}
                            updateExperience={updateExperience}
                        />
                    );
                }

                const labels = {
                    position: 'Position',
                    companyName: 'Company Name',
                    companyLocation: 'Company Location',
                    positionStartDate: 'Position Start Date',
                    positionEndDate: 'Position End Date',
                };

                const placeholders = {
                    position: 'E.g., Fullstack Web Developer',
                    companyName: 'E.g., Example LTD',
                    companyLocation: 'E.g., Austin, Texas',
                    positionStartDate: 'E.g., 30-12-2023',
                    positionEndDate: 'E.g., 30-12-2024',
                };

                return (
                    <div className='form-row' key={key}>
                        <label className='form-label'>
                            {labels[key]}
                            <span className='required-indicator'>*</span>
                        </label>
                        <input
                            className='form-input'
                            type={
                                key === 'positionStartDate' ||
                                key === 'positionEndDate'
                                    ? 'date'
                                    : 'text'
                            }
                            required={true}
                            value={experienceItem[key]}
                            onChange={(event) =>
                                updateExperience(
                                    event,
                                    itemId,
                                    key,
                                    experience,
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
