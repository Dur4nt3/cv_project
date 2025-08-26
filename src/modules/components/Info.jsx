import { useState } from 'react';

import { getCollapseImgSrc, updateCollapse } from '../utilities/form-utilities';

import InfoInputs from './InfoInputs';
import CollapseButton from './CollapseButton';
import InfoErrorNotice from './InfoErrorNotice';

export default function Info({
    theme,
    info,
    updateInfo,
    stateUpdater,
    errors,
}) {
    const [collapsed, collapseSection] = useState(false);
    const [collapseSectionHeight, setCollapseSectionHeight] = useState(0);

    const collapseImgSrc = getCollapseImgSrc(theme, collapsed);
    const collapseLabel = collapsed ? 'Expand Section' : 'Collapse Section';

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>
                <span>Personal Information</span>
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
                {errors !== null && <InfoErrorNotice errors={errors} />}

                <InfoInputs
                    infoObj={info}
                    changeCallback={updateInfo}
                    stateUpdater={stateUpdater}
                />
            </div>
        </div>
    );
}
