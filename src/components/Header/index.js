import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Touchable
} from 'react-native';

import { Feather } from '@expo/vector-icons'


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header ({ name }){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>Olá, {name}</Text>

                <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#FFF"></Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "#C99C00",
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBotton: 44
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    username: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold',
        marginRight: 10
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 44/2
    }
})