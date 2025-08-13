import xSvg from '../../assets/media/icons/toggle-x.svg';
import checkSvg from '../../assets/media/icons/toggle-check.svg';

import '../../assets/stylesheets/ToggleSection.css';

export default function ToggleSection({
    handleSectionToggle,
    section,
    toggled,
}) {
    return (
        <label className='switch'>
            <input
                checked={toggled}
                type='checkbox'
                onChange={(event) => {
                    event.target.checked = !toggled
                    handleSectionToggle(section);
                }}
            />
            <div className='slider'>
                <div className='circle'>
                    <img
                        src={xSvg}
                        alt='section toggled off'
                        className='toggled-off cross'
                    />
                    <img
                        src={checkSvg}
                        alt='section toggled on'
                        className='toggled-on checkmark'
                    />
                </div>
            </div>
        </label>
    );
}
