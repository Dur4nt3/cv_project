import { useState } from 'react';

import { getCollapseImgSrc, updateCollapse } from '../utilities/form-utilities';
import ProjectSegment from './ProjectSegment';
import CollapseButton from './CollapseButton';
import InfoTooltipButton from './InfoTooltipsButton';
import ToggleSection from './ToggleSection';
import { Tooltip } from 'react-tooltip';

function ProjectTooltip({ id }) {
    return (
        <Tooltip id={id} className='custom-tooltip'>
            <div>
                <p>
                    The "Projects" section is used to describe impactful
                    projects you partook in or created.
                </p>
                <p>
                    These projects should be significant in the scope of your
                    target position.
                </p>
                <p>
                    By default this section is turned off as many people opt-in
                    to specify experience instead of projects.
                </p>
                <p>
                    If you don't have a lot of relevant experience, you should
                    opt-in to use this section.
                </p>
            </div>
        </Tooltip>
    );
}

export default function Projects({
    theme,
    toggled,
    handleSectionToggle,
    projects,
    stateUpdater,
    updateProjects,
    addProjectItem,
    removeProjectItem,
    addDescriptionBullets,
    removeDescriptionBullets,
}) {
    const [collapsed, collapseSection] = useState(false);
    const [collapseSectionHeight, setCollapseSectionHeight] = useState(0);

    const collapseImgSrc = getCollapseImgSrc(theme, collapsed);
    const collapseLabel = collapsed ? 'Expand Section' : 'Collapse Section';

    const helpId = 'project-section-help';

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>
                <span>Projects</span>
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
                    className='project-help-button'
                    id={helpId}
                    label='how to fill the projects section'
                    theme={theme}
                />
                <ProjectTooltip id={helpId} />
                <ToggleSection
                    handleSectionToggle={handleSectionToggle}
                    section='projects'
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
                {Object.keys(projects).map((itemId) => (
                    <ProjectSegment
                        key={itemId}
                        theme={theme}
                        itemId={itemId}
                        projects={projects}
                        stateUpdater={stateUpdater}
                        updateProjects={updateProjects}
                        addDescriptionBullets={addDescriptionBullets}
                        removeDescriptionBullets={removeDescriptionBullets}
                    />
                ))}

                <div className='projects-control-buttons control-button-cont'>
                    <button
                        className='add-projects-segment add-segment-button'
                        onClick={(event) => {
                            event.preventDefault();
                            addProjectItem(projects, stateUpdater);
                        }}
                    >
                        Add
                    </button>
                    <button
                        className='remove-projects-segment remove-segment-button'
                        onClick={(event) => {
                            event.preventDefault();
                            removeProjectItem(projects, stateUpdater);
                        }}
                        disabled={Object.keys(projects).length === 1 && true}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
