export default function FormActions({ handleSubmission, handlePreview }) {
    return (
        <div className='form-buttons-cont'>
            <button className='submit-form' onClick={handleSubmission}>
                Save
            </button>
            <button className='preview-submission' onClick={handlePreview}>
                Preview
            </button>
        </div>
    );
}