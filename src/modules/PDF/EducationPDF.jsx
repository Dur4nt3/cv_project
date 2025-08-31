import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    educationCont: {
        width: '100%',
        flexDirection: 'column',
    },

    educationHeading: {
        width: '100%',
        fontSize: 13,
        fontWeight: 600,
        borderBottomWidth: '1.25px',
        borderColor: 'black',
        borderStyle: 'solid',
    },

    allInstitutionsCont: {
        marginTop: 5,
        flexDirection: 'column',
        gap: 10,
        fontSize: 12,
    },

    institutionCont: {
        flexDirection: 'column',
    },

    institutionTitle: {
        fontSize: 12,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },

    educationInfo: {
        flexDirection: 'row',
    },

    institutionName: {
        fontWeight: 600,
    },

    graduationDate: {
        fontSize: 11,
    },

    educationDescription: {
        fontSize: 11,
        marginTop: 5,
    },
});

function formatGraduationDate(gradDate) {
    const dateObj = new Date(gradDate);

    return `${dateObj.getDate()}/${
        dateObj.getMonth() + 1
    }/${dateObj.getFullYear()}`;
}

export default function EducationPDF({ education }) {
    return (
        <View style={styles.educationCont}>
            <View style={styles.educationHeading}>
                <Text>EDUCATION</Text>
            </View>
            <View style={styles.allInstitutionsCont}>
                {Object.keys(education).map((itemId) => {
                    const educationItem = education[itemId];

                    return (
                        <View style={styles.institutionCont} key={itemId}>
                            <View style={styles.institutionTitle}>
                                <View style={styles.educationInfo}>
                                    <Text style={styles.institutionName}>
                                        {educationItem.institution}
                                    </Text>
                                    <Text>
                                        {' '}
                                        {'|'} {educationItem.label}
                                    </Text>
                                </View>
                                <Text style={styles.graduationDate}>
                                    {formatGraduationDate(
                                        educationItem.gradDate
                                    )}
                                </Text>
                            </View>

                            {educationItem.description !== '' && (
                                <View style={styles.educationDescription}>
                                    <Text>
                                        {'\u2022  '}
                                        {educationItem.description}
                                    </Text>
                                </View>
                            )}
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
