import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    experienceCont: {
        width: '100%',
        flexDirection: 'column',
    },

    experienceHeading: {
        width: '100%',
        fontSize: 13,
        fontWeight: 600,
        borderBottomWidth: '1.25px',
        borderColor: 'black',
        borderStyle: 'solid',
    },

    allPositionsCont: {
        marginTop: 5,
        flexDirection: 'column',
        gap: 10,
        fontSize: 12,
    },

    positionCont: {
        flexDirection: 'column',
    },

    positionTitle: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },

    positionName: {
        fontWeight: 600,
    },

    positionDate: {
        fontSize: 11,
    },

    positionDescription: {
        marginTop: 5,
        flexDirection: 'column',
    },

    descriptionBullet: {
        marginBottom: 5,
    },
});

function clearBullets(descriptionBullets) {
    const bulletsCopy = { ...descriptionBullets };
    for (const key of Object.keys(bulletsCopy)) {
        if (bulletsCopy[key] === '') {
            delete bulletsCopy[key];
        }
    }

    return bulletsCopy;
}

function formatPositionDate(positionDate) {
    const dateObj = new Date(positionDate);

    return `${dateObj.getDate()}/${
        dateObj.getMonth() + 1
    }/${dateObj.getFullYear()}`;
}

export default function ExperiencePDF({ experience }) {
    return (
        <View style={styles.experienceCont}>
            <View style={styles.experienceHeading}>
                <Text>EXPERIENCE</Text>
            </View>
            <View style={styles.allPositionsCont}>
                {Object.keys(experience).map((itemId) => {
                    const experienceItem = experience[itemId];

                    const descriptions = clearBullets(
                        experienceItem.positionDescription
                    );

                    return (
                        <View style={styles.positionCont} key={itemId}>
                            <View style={styles.positionTitle}>
                                <Text style={styles.positionName}>
                                    {experienceItem.position}
                                </Text>
                                <Text style={styles.positionDate}>
                                    {formatPositionDate(
                                        experienceItem.positionStartDate
                                    )}
                                    {' - '}
                                    {experienceItem.positionEndDate === ''
                                        ? 'Ongoing'
                                        : formatPositionDate(
                                              experienceItem.positionEndDate
                                          )}
                                </Text>
                            </View>

                            <Text>
                                {experienceItem.companyName} |{' '}
                                {experienceItem.companyLocation}
                            </Text>

                            <View style={styles.positionDescription}>
                                {Object.keys(descriptions).map(
                                    (descriptionItem, index) => {
                                        const lastBullet =
                                            index ===
                                            Object.keys(descriptions).length -
                                                1;

                                        return (
                                            <Text
                                                style={
                                                    !lastBullet &&
                                                    styles.descriptionBullet
                                                }
                                                key={descriptionItem}
                                            >
                                                {'\u2022  '}
                                                {descriptions[descriptionItem]}
                                            </Text>
                                        );
                                    }
                                )}
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
