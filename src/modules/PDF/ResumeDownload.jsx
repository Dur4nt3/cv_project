import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import ResumePDF from './ResumePDF';

import downloadIcon from '../../assets/media/icons/download.svg';

function createFileName(fullName) {
    return `${fullName.split(' ').join('-')}-CV`;
}

export default function ResumeDownload({ stateObj, toggledSections }) {
    return (
        <PDFDownloadLink
            fileName={createFileName(stateObj.info.fullName)}
            document={
                <ResumePDF
                    stateObj={stateObj}
                    toggledSections={toggledSections}
                />
            }
        >
            <img src={downloadIcon} alt='download your cv' />
        </PDFDownloadLink>
    );
}
