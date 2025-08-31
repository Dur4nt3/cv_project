import InfoTooltipButton from './InfoTooltipsButton';
import { Tooltip } from 'react-tooltip';

function PositionDescriptionTooltip({ id }) {
    return (
        <Tooltip id={id} className='custom-tooltip'>
            <div>
                <p>Details the responsibilities of your role below.</p>
                <p>
                    Ensure to encompass the entire scope of your role whilst
                    keeping it concise.
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
                    <b>NOTE:</b> Although the inputs below support it, refrain
                    from using line breaks.
                </p>
            </div>
        </Tooltip>
    );
}

function PositionDescriptionBullets({
    itemId,
    state,
    stateUpdater,
    positionDescription,
    updateExperience,
    setPreviewStatus,
}) {
    return (
        <>
            {Object.keys(positionDescription).map((description, index) => (
                <div className='form-row' key={description}>
                    <label htmlFor={description} className='form-label'>
                        List Bullet {index + 1}
                    </label>
                    <textarea
                        id={description}
                        value={positionDescription[description]}
                        onChange={(event) =>
                            updateExperience(
                                event,
                                itemId,
                                'positionDescription',
                                state,
                                stateUpdater,
                                setPreviewStatus
                            )
                        }
                        placeholder='Detail a portion of your responsibilities within the specified position'
                    ></textarea>
                </div>
            ))}
        </>
    );
}

export default function PositionDescription({
    positionDescription,
    itemId,
    theme,
    state,
    stateUpdater,
    addDescriptionBullets,
    removeDescriptionBullets,
    updateExperience,
    setPreviewStatus,
}) {
    const helpId = `${itemId}-description-help`;

    return (
        <div className='position-description description-cont'>
            <h4 className='position-description-header description-header'>
                <span>Position Description</span>
                <InfoTooltipButton
                    className='position-description-help'
                    id={helpId}
                    label='how to fill position description'
                    theme={theme}
                />
                <PositionDescriptionTooltip id={helpId} />
            </h4>
            <div className='position-description-bullets description-bullets'>
                <PositionDescriptionBullets
                    itemId={itemId}
                    state={state}
                    stateUpdater={stateUpdater}
                    positionDescription={positionDescription}
                    updateExperience={updateExperience}
                    setPreviewStatus={setPreviewStatus}
                />
            </div>
            <div className='position-description-control description-control-cont'>
                <button
                    className='position-add-bullet add-bullet-button'
                    onClick={(event) => {
                        event.preventDefault();
                        addDescriptionBullets(
                            itemId,
                            state,
                            stateUpdater,
                            setPreviewStatus
                        );
                    }}
                >
                    Add Bullet
                </button>
                <button
                    className='position-remove-bullet remove-bullet-button'
                    onClick={(event) => {
                        event.preventDefault();
                        removeDescriptionBullets(
                            itemId,
                            state,
                            stateUpdater,
                            setPreviewStatus
                        );
                    }}
                    disabled={Object.keys(positionDescription).length === 0}
                >
                    Remove Bullet
                </button>
            </div>
        </div>
    );
}
