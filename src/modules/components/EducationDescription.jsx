import InfoTooltipButton from './InfoTooltipsButton';
import { Tooltip } from 'react-tooltip';

function EducationDescriptionTooltip({ id }) {
    return (
        <Tooltip id={id} className='custom-tooltip'>
            <div>
                <p>Detail your education below.</p>
                <p>
                    You may append additional information about your education.
                </p>
                <p>
                    Whether it's your GPA (if high), relevant clubs you partook
                    in, a high position you held, or relevant course work.
                </p>
                <p>
                    You may use the "Add Bullet" button to add more bullets to
                    your description.
                </p>
                <p>
                    On the contrary, you may use the "Remove Bullet" button to
                    remove the latest bullet.
                </p>
                <p>
                    <b>NOTE:</b> Although the input below supports it, refrain
                    from using line breaks.
                </p>
            </div>
        </Tooltip>
    );
}

function EducationDescriptionBullets({
    itemId,
    state,
    stateUpdater,
    description,
    updateEducation,
}) {
    return (
        <>
            {Object.keys(description).map((descriptionItem, index) => (
                <div className='form-row' key={descriptionItem}>
                    <label htmlFor={descriptionItem} className='form-label'>
                        List Bullet {index + 1}
                    </label>
                    <textarea
                        id={descriptionItem}
                        value={description[descriptionItem]}
                        onChange={(event) =>
                            updateEducation(
                                event,
                                itemId,
                                'description',
                                state,
                                stateUpdater
                            )
                        }
                        placeholder='Append additional information about your education'
                    ></textarea>
                </div>
            ))}
        </>
    );
}

export default function EducationDescription({
    description,
    itemId,
    theme,
    state,
    stateUpdater,
    addDescriptionBullets,
    removeDescriptionBullets,
    updateEducation,
}) {
    const helpId = `${itemId}-description-help`;

    return (
        <div className='education-description description-cont'>
            <h4 className='education-description-header description-header'>
                <span>Education Description</span>
                <InfoTooltipButton
                    className='education-description-help'
                    id={helpId}
                    label='how to fill education description'
                    theme={theme}
                />
                <EducationDescriptionTooltip id={helpId} />
            </h4>
            <div className='education-description-bullets description-bullets'>
                <EducationDescriptionBullets
                    itemId={itemId}
                    state={state}
                    stateUpdater={stateUpdater}
                    description={description}
                    updateEducation={updateEducation}
                />
            </div>
            <div className='education-description-control description-control-cont'>
                <button
                    className='education-add-bullet add-bullet-button'
                    onClick={(event) => {
                        event.preventDefault();
                        addDescriptionBullets(itemId, state, stateUpdater);
                    }}
                >
                    Add Bullet
                </button>
                <button
                    className='education-remove-bullet remove-bullet-button'
                    onClick={(event) => {
                        event.preventDefault();
                        removeDescriptionBullets(itemId, state, stateUpdater);
                    }}
                    disabled={Object.keys(description).length === 0}
                >
                    Remove Bullet
                </button>
            </div>
        </div>
    );
}
