import { positionDescriptionTooltip } from './custom-tooltips';

import questionLightSvg from '../../assets/media/icons/question-light-mode.svg';
import questionDarkSvg from '../../assets/media/icons/question-dark-mode.svg';

function createPositionDescriptionBullets(
    itemId,
    positionDescription,
    updateExperience
) {
    return (
        <>
            {Object.keys(positionDescription).map((description, index) => 
                (
                    <div className='form-row' key={description}>
                        <label htmlFor={description} className='form-label'>
                            Description {index + 1}
                        </label>
                        <textarea
                            id={description}
                            value={positionDescription[description]}
                            onChange={(event) =>
                                updateExperience(
                                    event,
                                    itemId,
                                    'positionDescription'
                                )
                            }
                            placeholder='Detail a portion of your responsibilities within the specified position'
                        ></textarea>
                    </div>
                ))}
        </>
    );
}

export default function createPositionDescription(
    positionDescription,
    itemId,
    theme,
    addDescriptionBullets,
    removeDescriptionBullets,
    updateExperience
) {
    const helpId = `${itemId}-description-help`;

    return (
        <div className='position-description' key={itemId}>
            <h4 className='position-description-header'>
                <span>Position Description</span>
                <button
                    className='img-button position-description-help'
                    aria-label='how to fill position description'
                    id={helpId}
                    data-tooltip-id={helpId}
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                >
                    <img
                        src={
                            theme === 'light'
                                ? questionLightSvg
                                : questionDarkSvg
                        }
                        alt='how to fill position description'
                        className='inline-img'
                    />
                </button>
                {positionDescriptionTooltip(helpId)}
            </h4>
            <div className='position-description-bullets'>
                {createPositionDescriptionBullets(
                    itemId,
                    positionDescription,
                    updateExperience
                )}
            </div>
            <div className='position-description-control'>
                <button
                    className='position-add-bullet'
                    onClick={(event) => {
                        event.preventDefault();
                        addDescriptionBullets(itemId);
                    }}
                >
                    Add Bullet
                </button>
                <button
                    className='position-remove-bullet'
                    onClick={(event) => {
                        event.preventDefault();
                        removeDescriptionBullets(itemId);
                    }}
                    disabled={Object.keys(positionDescription).length === 0}
                >
                    Remove Bullet
                </button>
            </div>
        </div>
    );
}
