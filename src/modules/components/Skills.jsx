import { useState } from 'react';

import { getCollapseImgSrc, updateCollapse } from '../utilities/form-utilities';
import SkillsSegment from './SkillsSegment';
import CollapseButton from './CollapseButton';
import InfoTooltipButton from './InfoTooltipsButton';
import ToggleSection from './ToggleSection';
import { Tooltip } from 'react-tooltip';

function SkillsTooltip({ id }) {
    return (
        <Tooltip id={id} className='custom-tooltip'>
            <div>
                <p>
                    The "Skills" section is used to describe relevant skills you
                    hold.
                </p>
                <p>
                    You should utilize this section to specify skills you have
                    deemed relevant to the position you seek.
                </p>
                <p>
                    You can separate skills into different sections such as
                    "Programming Languages", "Technologies", etc.
                </p>
                <p>
                    Although you can toggle this section off, it is not advised.
                </p>
            </div>
        </Tooltip>
    );
}

export default function Skills({
    theme,
    toggled,
    handleSectionToggle,
    skills,
    stateUpdater,
    updateSkills,
    addSkillsItem,
    removeSkillsItem,
    errors,
}) {
    const [collapsed, collapseSection] = useState(false);
    const [collapseSectionHeight, setCollapseSectionHeight] = useState(0);

    const collapseImgSrc = getCollapseImgSrc(theme, collapsed);
    const collapseLabel = collapsed ? 'Expand Section' : 'Collapse Section';

    const helpId = 'skills-section-help';

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>
                <span>Skills</span>
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
                    className='skills-help-button'
                    id={helpId}
                    label='how to fill the skills section'
                    theme={theme}
                />
                <SkillsTooltip id={helpId} />
                <ToggleSection
                    handleSectionToggle={handleSectionToggle}
                    section='skills'
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
                {Object.keys(skills).map((itemId) => (
                    <SkillsSegment
                        key={itemId}
                        itemId={itemId}
                        skills={skills}
                        stateUpdater={stateUpdater}
                        updateSkills={updateSkills}
                        errors={errors !== null ? errors[itemId] : null}
                    />
                ))}

                <div className='skills-control-buttons control-button-cont'>
                    <button
                        className='add-skills-segment add-segment-button'
                        onClick={(event) => {
                            event.preventDefault();
                            addSkillsItem(skills, stateUpdater);
                        }}
                    >
                        Add
                    </button>
                    <button
                        className='remove-skills-segment remove-segment-button'
                        onClick={(event) => {
                            event.preventDefault();
                            removeSkillsItem(skills, stateUpdater);
                        }}
                        disabled={Object.keys(skills).length === 1 && true}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
