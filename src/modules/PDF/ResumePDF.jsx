import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import InfoPDF from './InfoPDF';
import SummaryPDF from './SummaryPDF';
import ExperiencePDF from './ExperiencePDF';
import ProjectsPDF from './ProjectsPDF';
import EducationPDF from './EducationPDF';
import SkillsPDF from './SkillsPDF';

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Times-Roman',
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});

export default function ResumePDF({ stateObj, toggledSections }) {
    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <InfoPDF info={stateObj.info} />
                {toggledSections.summary === true && (
                    <SummaryPDF summary={stateObj.summary} />
                )}
                {toggledSections.experience === true && (
                    <ExperiencePDF experience={stateObj.experience} />
                )}
                {toggledSections.projects === true && (
                    <ProjectsPDF projects={stateObj.projects} />
                )}
                {toggledSections.education === true && (
                    <EducationPDF education={stateObj.education} />
                )}
                {toggledSections.skills === true && (
                    <SkillsPDF skills={stateObj.skills} />
                )}
            </Page>
        </Document>
    );
}
