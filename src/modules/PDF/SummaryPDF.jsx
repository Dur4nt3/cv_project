import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    summaryCont: {
        width: '100%',
        flexDirection: 'column',
    },

    summaryHeading: {
        width: '100%',
        fontSize: 13,
        fontWeight: 600,
        borderBottomWidth: '1.25px',
        borderColor: 'black',
        borderStyle: 'solid',
    },

    summaryDescription: {
        fontSize: 12,
    },
});

export default function SummaryPDF({ summary }) {
    return (
        <View style={styles.summaryCont}>
            <View style={styles.summaryHeading}>
                <Text>SUMMARY</Text>
            </View>
            <View style={styles.summaryDescription}>
                <Text>
                    {summary}
                </Text>
            </View>
        </View>
    );
}
