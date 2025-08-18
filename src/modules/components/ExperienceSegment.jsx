import { useState } from 'react';
import { createPositionDescription } from '../utilities/form-utilities';

export default function ExperienceSegment({
    itemId,
    experienceItem,
    updateExperience,
}) {
    const [descriptionBullets, updateDescriptionBullets] = useState(1);

    function handleDescriptionBullets(action) {
        console.log('add/remove description bullets');
    }

    return (
        <div className='experience-segment' id={itemId}>
            <h3 className='experience-segment-heading'>
                Position {itemId.slice(3)}
            </h3>
            {Object.keys(experienceItem).map((key) => {
                if (key === 'positionDescription') {
                    return createPositionDescription(
                        experienceItem[key],
                        itemId
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
                                updateExperience(event, itemId, key)
                            }
                            placeholder={placeholders[key]}
                        />
                    </div>
                );
            })}
        </div>
    );
}
