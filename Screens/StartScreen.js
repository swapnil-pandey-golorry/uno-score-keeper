import { ContentWriter } from 'istanbul-lib-report'
import React, {useContext} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import { Context } from '../App'
const StartScreen = () => {

    const state = useContext(Context)
    const playerData = state.playerData
    console.log(playerData)
    return (
        <View style = {styles.screen}>
            <View style = {styles.headingContainer}>
                <Text style = {styles.heading}>Uno Score Keeper</Text>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.settingsContainer}>
                    <Text style = {styles.text}>Number of players</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='number-pad'
                        maxLength = {1}
                    >

                    </TextInput>
                    <Text style = {styles.text}>Points to win</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='number-pad'
                        maxLength = {2}
                    >
                        
                    </TextInput>
                </View>
                <View style = {styles.nameContainer}>
                </View>
                <View style = {styles.optionsContainer}>

                </View>
            </View>
            <FlatList>

            </FlatList>
            <TouchableOpacity style = {styles.startGameButton}>
                <Text style = {styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
        </View>
        
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor : '#19193C'
    },
    headingContainer: {
        alignItems: 'center',
        height: '20%',
        paddingTop: 33,
    },
    heading: {
        fontFamily: 'inter',
        fontSize: 25,
        color: 'white'
    },
    detailsContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    text: {
        fontSize: 14,
        color: 'white',
        
    },
    input: {
        borderBottomColor: 'white',
        borderBottomWidth: .4,
        width: '20%',
        height: 30,
        fontSize: 12,
        paddingTop: 5,
        color:  'white'
    },
    startGameButton: {
        backgroundColor: 'white',
        height: 35,
        marginHorizontal: 10,
        borderRadius: 15,
        alignItems: 'center'
    },
    buttonText: {
        color: '#2ECC71',
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 16
    }
})
export default StartScreen
