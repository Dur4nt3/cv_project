import { useState } from 'react';

import { getCollapseImgSrc, updateCollapse } from '../utilities/form-utilities';
import ExperienceSegment from './ExperienceSegment';
import { CollapseButton } from './CollapseButton';

export default function Experience({
    theme,
    experience,
    updateExperience,
    addExperienceItem,
    removeExperienceItem,
    addDescriptionBullets,
    removeDescriptionBullets,
}) {
    const [collapsed, collapseSection] = useState(false);
    const [collapseSectionHeight, setCollapseSectionHeight] = useState(0);

    const collapseImgSrc = getCollapseImgSrc(theme, collapsed);
    const collapseLabel = collapsed ? 'Expand Section' : 'Collapse Section';

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>
                <span>Experience</span>
                <CollapseButton
                    label={collapseLabel}
                    collapsed={collapsed}
                    collapsedCallback={collapseSection}
                    collapsedHeight={collapseSectionHeight}
                    collapsedHeightCallback={setCollapseSectionHeight}
                    updateCallback={updateCollapse}
                    imgSrc={collapseImgSrc}
                />
            </h2>
            <div className='form-inputs'>
                {Object.keys(experience).map((itemId) => (
                    <ExperienceSegment
                        key={itemId}
                        theme={theme}
                        itemId={itemId}
                        experienceItem={experience[itemId]}
                        updateExperience={updateExperience}
                        addDescriptionBullets={addDescriptionBullets}
                        removeDescriptionBullets={removeDescriptionBullets}
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
