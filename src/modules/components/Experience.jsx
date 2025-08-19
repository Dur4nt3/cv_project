import { useState } from 'react';

import { getCollapseImgSrc, updateCollapse } from '../utilities/form-utilities';
import ExperienceSegment from './ExperienceSegment';

export default function Experience({
    theme,
    experience,
    updateExperience,
    addExperienceItem,
    removeExperienceItem,
}) {
    const [collapsed, collapseSection] = useState(false);
    const [collapseSectionHeight, setCollapseSectionHeight] = useState(0);

    const collapseImgSrc = getCollapseImgSrc(theme, collapsed);

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>
                <span>Experience</span>
                <button
                    aria-label={
                        collapsed ? 'Expand Section' : 'Collapse Section'
                    }
                    className='img-button'
                    onClick={(event) =>
                        updateCollapse(
                            event,
                            collapsed,
                            collapseSection,
                            collapseSectionHeight,
                            setCollapseSectionHeight
                        )
                    }
                >
                    <img
                        src={collapseImgSrc}
                        alt={collapsed ? 'Expand Section' : 'Collapse Section'}
                        className='collapse-icon'
                    />
                </button>
            </h2>
            <div className='form-inputs'>
                {Object.keys(experience).map((itemId) => (
                    <ExperienceSegment
                        key={itemId}
                        itemId={itemId}
                        experienceItem={experience[itemId]}
                        updateExperience={updateExperience}
                    />
                ))}

                <div className='experience-control-buttons'>
                    <button
                        className='add-experience-segment'
                        onClick={(event) => {
                            event.preventDefault();
                            addExperienceItem();
                        }}
                    >
                        Add
                    </button>
                    <button
                        className='remove-experience-segment'
                        onClick={(event) => {
                            event.preventDefault();
                            removeExperienceItem();
                        }}
                        disabled={Object.keys(experience).length === 1 && true}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
