import { useState } from 'react';

import { getCollapseImgSrc, updateCollapse } from '../utilities/form-utilities';
import ExperienceSegment from './ExperienceSegment';
import CollapseButton from './CollapseButton';
import InfoTooltipButton from './InfoTooltipsButton';
import { Tooltip } from 'react-tooltip';

function ExperienceTooltip({ id }) {
    return (
        <Tooltip id={id} className='custom-tooltip'>
            <div>
                <p>
                    The experience section is used to describe your
                    responsibilities in past roles.
                </p>
                <p>
                    Follow the steps below to add information about your past
                    experience.
                </p>
                <p>
                    You may use the "Add" and "Remove" button to add more
                    segments to the experience section within your resume, or
                    remove unneeded segments.
                </p>
                <p>
                    If you don't have any relevant experience, you may toggle
                    this section off.
                </p>
                <p>
                    <b>NOTE:</b> If you don't have any experience or have a very
                    small amount of experience I highly recommend filling out
                    the "Projects" section.
                </p>
            </div>
        </Tooltip>
    );
}

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

    const helpId = 'experience-section-help';

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
                <InfoTooltipButton
                    className='experience-help-button'
                    id={helpId}
                    label='how to fill the experience section'
                    theme={theme}
                />
                <ExperienceTooltip id={helpId} />
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
