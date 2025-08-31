import React from 'react';
import { BlobProvider } from '@react-pdf/renderer';

import ResumePDF from './ResumePDF';

export default function ResumeLink({ stateObj, toggledSections }) {
    return (
        <BlobProvider
            document={
                <ResumePDF
                    stateObj={stateObj}
                    toggledSections={toggledSections}
                />
            }
        >
            {({ url }) => (
                <a href={url} target='blank' className='preview-link'></a>
            )}
        </BlobProvider>
    );
}
