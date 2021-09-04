import React ,{useContext} from 'react'
import { View,Text, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { Context } from '../App'
const PlayerCard = (props) => {

    const state = useContext(Context)
    const playerData = state.playerData
    const currPlayerState = playerData.slice()
    const changePlayerData = state.changePlayerData
    const incrementScore = (val) =>{
        currPlayerState.forEach(function (part, index, currPlayerState) {
            if (currPlayerState[index]['name'] === props.name) {
                console.log(val)
                currPlayerState[index]['score'] = val + parseInt(currPlayerState[index]['score']);
                changePlayerData(currPlayerState)
                console.log(currPlayerState)
            }
        });
    }
    return (
        <View style = {styles.card}>
            <View style = {styles.detailsContainer}>
                <Text>
                    {props.name}
                </Text>
                <Text>
                    {props.score}
                </Text>
            </View>
            <View style = {styles.buttonsContainer}>
                <Button title='+1' onPress={incrementScore.bind(this,1)} />
                <Button title = '+10' onPress = {incrementScore.bind(this,10)}/>
                <Button title = '+50' onPress = {incrementScore.bind(this,50)}/>
            </View>
        </View>
    )
}

styles = StyleSheet.create({
    card: {
        flexDirection : 'row'
    }
})

export default PlayerCard
