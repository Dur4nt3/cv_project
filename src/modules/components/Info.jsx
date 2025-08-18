import { useState } from 'react';

import {
    createInfoInputs,
    getCollapseImgSrc,
    updateCollapse,
} from '../utilities/form-utilities';

export default function Info({ theme, info, updateInfo }) {
    const [collapsed, collapseSection] = useState(false);
    const [collapseSectionHeight, setCollapseSectionHeight] = useState(0);

    const collapseImgSrc = getCollapseImgSrc(theme, collapsed);

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>
                <span>Personal Information</span>
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
                {createInfoInputs(info, updateInfo)}
            </div>
        </div>
    );
}
