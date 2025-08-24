import { useState } from 'react';

import { getCollapseImgSrc, updateCollapse } from '../utilities/form-utilities';
import EducationSegment from './EducationSegment';
import CollapseButton from './CollapseButton';
import InfoTooltipButton from './InfoTooltipsButton';
import ToggleSection from './ToggleSection';
import { Tooltip } from 'react-tooltip';

function EducationTooltip({ id }) {
    return (
        <Tooltip id={id} className='custom-tooltip'>
            <div>
                <p>
                    The "Education" section is used to describe tertiary
                    (higher) education that you may have.
                </p>
                <p>
                    It is usually reserved for degrees you've completed (or ones
                    that you're in the midst of completing).
                </p>
                <p>It is advised to list relevant all majors.</p>
                <p>
                    If you took part in courses you deem relevant to the
                    position you seek, you may include it in the description.
                </p>
                <p>
                    Similar to other sections, you may toggle this section off
                    if you think you don't have any relevant education.
                </p>
            </div>
        </Tooltip>
    );
}

export default function Education({
    theme,
    toggled,
    handleSectionToggle,
    education,
    stateUpdater,
    updateEducation,
    addEducationItem,
    removeEducationItem,
    addDescriptionBullets,
    removeDescriptionBullets,
}) {
    const [collapsed, collapseSection] = useState(false);
    const [collapseSectionHeight, setCollapseSectionHeight] = useState(0);

    const collapseImgSrc = getCollapseImgSrc(theme, collapsed);
    const collapseLabel = collapsed ? 'Expand Section' : 'Collapse Section';

    const helpId = 'education-section-help';

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>
                <span>Education</span>
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
                    className='education-help-button'
                    id={helpId}
                    label='how to fill the education section'
                    theme={theme}
                />
                <EducationTooltip id={helpId} />
                <ToggleSection
                    handleSectionToggle={handleSectionToggle}
                    section='education'
                    toggled={toggled}
                />
            </h2>
            <div
                className={
                    toggled === false
                        ? 'form-inputs section-toggled-off'
                        : 'form-inputs'
                }
            >
                {Object.keys(education).map((itemId) => (
                    <EducationSegment
                        key={itemId}
                        theme={theme}
                        itemId={itemId}
                        education={education}
                        stateUpdater={stateUpdater}
                        updateEducation={updateEducation}
                        addDescriptionBullets={addDescriptionBullets}
                        removeDescriptionBullets={removeDescriptionBullets}
                    />
                ))}

                <div className='education-control-buttons control-button-cont'>
                    <button
                        className='add-education-segment add-segment-button'
                        onClick={(event) => {
                            event.preventDefault();
                            addEducationItem(education, stateUpdater);
                        }}
                    >
                        Add
                    </button>
                    <button
                        className='remove-education-segment remove-segment-button'
                        onClick={(event) => {
                            event.preventDefault();
                            removeEducationItem(education, stateUpdater);
                        }}
                        disabled={Object.keys(education).length === 1 && true}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
