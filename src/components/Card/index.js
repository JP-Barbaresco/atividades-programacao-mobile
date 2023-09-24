import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default function Card({ title, desc }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.titleBox}>
                <Text style={styles.titleText}> {title}</Text>
            </View>
            <View style={styles.descBox}>
                <Text style={styles.descText}> {desc} </Text>
            </View>
            <View>
            <Button 
                title="Iniciar"
                onPress={() => Alert.alert('Simple Button pressed')}
                style={styles.btnIniciar}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '85%',
        height: 200,
        backgroundColor: '#C99C00',
        borderColor: '#FFFFFF',
        borderRadius: 15,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical:10,
        marginTop: 20
    },
    titleBox: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFFFFF'
    },
    descBox: {
        margiTop: 50,
        fontSize: 15,
        justifyContent: 'left'
    },
    descText: {
        color: '#FFFFFF'
    },
    btnIniciar: {
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        justifyContent: 'right'
    }
})