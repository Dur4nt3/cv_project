export default function FormActions({ handlePreview }) {
    return (
        <div className='form-buttons-cont'>
            <button className='preview-submission' onClick={handlePreview}>
                Preview
            </button>
        </div>
    );
}