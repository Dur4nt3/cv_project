export default function SkillsSegment({
    itemId,
    skills,
    stateUpdater,
    updateSkills,
}) {
    const skillsItem = skills[itemId];

    return (
        <div className='skills-segment' id={itemId}>
            <h3 className='skills-segment-heading'>Skill {itemId.slice(5)}</h3>
            {Object.keys(skillsItem).map((key) => {
                const labels = {
                    type: 'Skill Category',
                    description: 'Description',
                };

                const placeholders = {
                    type: 'E.g., Programming Languages',
                    description: 'E.g., JavaScript, TypeScript, Python',
                };

                let finalInput;

                if (key === 'type') {
                    finalInput = (
                        <input
                            className='form-input'
                            type='text'
                            required={true}
                            value={skillsItem[key]}
                            onChange={(event) =>
                                updateSkills(
                                    event,
                                    itemId,
                                    key,
                                    skills,
                                    stateUpdater
                                )
                            }
                            placeholder={placeholders[key]}
                        />
                    );
                } else {
                    finalInput = <textarea
                        required={true}
                        value={skillsItem[key]}
                        onChange={(event) =>
                            updateSkills(
                                event,
                                itemId,
                                key,
                                skills,
                                stateUpdater
                            )
                        }
                        placeholder={placeholders[key]}
                    ></textarea>;
                }

                return (
                    <div className='form-row' key={key}>
                        <label className='form-label'>
                            {labels[key]}
                            <span className='required-indicator'>*</span>
                        </label>
                        {finalInput}
                    </div>
                );
            })}
        </div>
    );
}
