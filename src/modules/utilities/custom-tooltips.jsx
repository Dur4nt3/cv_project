import { Tooltip } from 'react-tooltip';

export function positionDescriptionTooltip(id) {
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
