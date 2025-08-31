import InfoTooltipButton from './InfoTooltipsButton';
import { Tooltip } from 'react-tooltip';

function ProjectDescriptionTooltip({ id }) {
    return (
        <Tooltip id={id} className='custom-tooltip'>
            <div>
                <p>Explain your project below.</p>
                <p>
                    Ensure to encompass the entire scope of your project whilst
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
                    <b>NOTE:</b> Although the input below supports it, refrain
                    from using line breaks.
                </p>
            </div>
        </Tooltip>
    );
}

function ProjectDescriptionBullets({
    itemId,
    state,
    stateUpdater,
    description,
    updateProjects,
    setPreviewStatus,
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
                            updateProjects(
                                event,
                                itemId,
                                'description',
                                state,
                                stateUpdater,
                                setPreviewStatus
                            )
                        }
                        placeholder='Detail a portion of the scope of your project'
                    ></textarea>
                </div>
            ))}
        </>
    );
}

export default function ProjectDescription({
    description,
    itemId,
    theme,
    state,
    stateUpdater,
    addDescriptionBullets,
    removeDescriptionBullets,
    updateProjects,
    setPreviewStatus,
}) {
    const helpId = `${itemId}-description-help`;

    return (
        <div className='project-description description-cont'>
            <h4 className='project-description-header description-header'>
                <span>Project Description</span>
                <InfoTooltipButton
                    className='project-description-help'
                    id={helpId}
                    label='how to fill project description'
                    theme={theme}
                />
                <ProjectDescriptionTooltip id={helpId} />
            </h4>
            <div className='project-description-bullets description-bullets'>
                <ProjectDescriptionBullets
                    itemId={itemId}
                    state={state}
                    stateUpdater={stateUpdater}
                    description={description}
                    updateProjects={updateProjects}
                    setPreviewStatus={setPreviewStatus}
                />
            </div>
            <div className='project-description-control description-control-cont'>
                <button
                    className='project-add-bullet add-bullet-button'
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
                    className='project-remove-bullet remove-bullet-button'
                    onClick={(event) => {
                        event.preventDefault();
                        removeDescriptionBullets(
                            itemId,
                            state,
                            stateUpdater,
                            setPreviewStatus
                        );
                    }}
                    disabled={Object.keys(description).length === 0}
                >
                    Remove Bullet
                </button>
            </div>
        </div>
    );
}
