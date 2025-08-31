import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    projectsCont: {
        width: '100%',
        flexDirection: 'column',
    },

    projectsHeading: {
        width: '100%',
        fontSize: 13,
        fontWeight: 600,
        borderBottomWidth: '1.25px',
        borderColor: 'black',
        borderStyle: 'solid',
    },

    allProjectsCont: {
        marginTop: 5,
        flexDirection: 'column',
        gap: 10,
        fontSize: 12,
    },

    projectCont: {
        flexDirection: 'column',
    },

    projectTitle: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },

    projectName: {
        fontWeight: 600,
    },

    projectLink: {
        fontSize: 11,
    },

    projectDescription: {
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

export default function ProjectsPDF({ projects }) {
    return (
        <View style={styles.projectsCont}>
            <View style={styles.projectsHeading}>
                <Text>PROJECTS</Text>
            </View>
            <View style={styles.allProjectsCont}>
                {Object.keys(projects).map((itemId) => {
                    const projectsItem = projects[itemId];

                    const descriptions = clearBullets(projectsItem.description);

                    return (
                        <View style={styles.projectCont} key={itemId}>
                            <View style={styles.projectTitle}>
                                <Text style={styles.projectName}>
                                    {projectsItem.name}
                                </Text>
                                <Text style={styles.projectLink}>
                                    {projectsItem.link}
                                </Text>
                            </View>

                            <View style={styles.projectDescription}>
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
