export default function CollapseButton({
    label,
    collapsed,
    collapsedCallback,
    collapsedHeight,
    collapsedHeightCallback,
    updateCallback,
    imgSrc,
}) {
    return (
        <button
            aria-label={label}
            className='img-button'
            onClick={(event) =>
                updateCallback(
                    event,
                    collapsed,
                    collapsedCallback,
                    collapsedHeight,
                    collapsedHeightCallback
                )
            }
        >
            <img
                src={imgSrc}
                alt={collapsed ? 'Expand Section' : 'Collapse Section'}
                className='collapse-icon'
            />
        </button>
    );
}