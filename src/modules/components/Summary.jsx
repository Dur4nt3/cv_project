import { useState } from 'react';

import { getCollapseImgSrc, updateCollapse } from '../utilities/form-utilities';
import CollapseButton from './CollapseButton';
import InfoTooltipButton from './InfoTooltipsButton';
import ToggleSection from './ToggleSection';
import { Tooltip } from 'react-tooltip';

function SummaryTooltip({ id }) {
    return (
        <Tooltip id={id} className='custom-tooltip'>
            <div>
                <p>The "Summary" section is used to summaries your resume.</p>
                <p>
                    If you think you have a short, appealing and informative
                    summary to your resume, you may utilize this section.
                </p>
                <p>By default this section is turned off.</p>
            </div>
        </Tooltip>
    );
}

export default function Summary({
    theme,
    toggled,
    handleSectionToggle,
    summary,
    setSummary,
}) {
    const [collapsed, collapseSection] = useState(false);
    const [collapseSectionHeight, setCollapseSectionHeight] = useState(0);

    const collapseImgSrc = getCollapseImgSrc(theme, collapsed);
    const collapseLabel = collapsed ? 'Expand Section' : 'Collapse Section';

    const helpId = 'skills-section-help';

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>
                <span>Summary</span>
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
                    className='summary-help-button'
                    id={helpId}
                    label='how to fill the summary section'
                    theme={theme}
                />
                <SummaryTooltip id={helpId} />
                <ToggleSection
                    handleSectionToggle={handleSectionToggle}
                    section='summary'
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
                <div className='form-row'>
                    <label className='form-label'>
                        Summary
                        <span className='required-indicator'>*</span>
                    </label>
                    <textarea
                        required={true}
                        value={summary}
                        onChange={(event) =>
                            setSummary(
                                event.target.value
                            )
                        }
                        placeholder='Write a quick concise summary that includes your skills, expertise, experience, etc.'
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
