import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    skillsCont: {
        width: '100%',
        flexDirection: 'column',
    },

    skillsHeading: {
        width: '100%',
        fontSize: 13,
        fontWeight: 600,
        borderBottomWidth: '1.25px',
        borderColor: 'black',
        borderStyle: 'solid',
    },

    allSkillsCont: {
        marginTop: 5,
        flexDirection: 'column',
        gap: 10,
        fontSize: 12,
    },

    skillWrapper: {
        flexDirection: 'row',
    },

    skillType: {
        fontWeight: 600,
    },
});

export default function SkillsPDF({ skills }) {
    return (
        <View style={styles.skillsCont}>
            <View style={styles.skillsHeading}>
                <Text>SKILLS</Text>
            </View>
            <View style={styles.allSkillsCont}>
                {Object.keys(skills).map((itemId) => {
                    const skillsItem = skills[itemId];

                    return (
                        <View style={styles.skillWrapper} key={itemId}>
                            <Text>{'\u2022  '}</Text>
                            <Text style={styles.skillType}>
                                {skillsItem.type}:{' '}
                            </Text>
                            <Text>{skillsItem.description}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
