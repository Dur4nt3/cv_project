import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    cvHeader: {
        marginTop: 5,
        alignSelf: 'baseline',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },

    cvName: {
        fontSize: 20,
        fontWeight: 600,
    },

    cvPersonalInfo: {
        flexDirection: 'row',
        fontSize: 12,
    },

    cvPosition: {
        fontSize: 18,
        fontWeight: 600,
    },
});

function initializeSecondLineContent(info) {
    const secondLineInfo = { ...info };
    delete secondLineInfo.position;
    delete secondLineInfo.fullName;
    for (const key of Object.keys(secondLineInfo)) {
        if (secondLineInfo[key] === '') {
            delete secondLineInfo[key]
        }
    }

    return secondLineInfo;
}

export default function InfoPDF({ info }) {
    const secondLineInfo = initializeSecondLineContent(info);

    return (
        <>
            <View style={styles.cvHeader}>
                <View style={styles.cvName}>
                    <Text>{info.fullName}</Text>
                </View>
                <View style={styles.cvPersonalInfo}>
                    {Object.keys(secondLineInfo).map((detail, index) => {
                        if (secondLineInfo[detail] === '') {
                            return;
                        }

                        return (
                            <Text key={detail}>
                                {secondLineInfo[detail]}
                                {index ===
                                Object.keys(secondLineInfo).length - 1
                                    ? ''
                                    : ' \u2022 '}
                            </Text>
                        );
                    })}
                </View>
                <View style={styles.cvPosition}>
                    <Text>{info.position}</Text>
                </View>
            </View>
        </>
    );
}
