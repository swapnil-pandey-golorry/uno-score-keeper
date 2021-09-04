import React ,{useContext} from 'react'
import { View,Text, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import PlayerCard from '../components/PlayerCard'
import { Context } from '../App'


const GameScreen = () => {

    const renderPlayerCard = (itemData) => {
        return <PlayerCard
            name={itemData.item.name}
            score ={itemData.item.score}
        />
    }

    const state = useContext(Context)
    const playerData = state.playerData
    const changePlayerData = state.changePlayerData
    return (
        <FlatList
            data={playerData}
            renderItem = {renderPlayerCard}
        >

        </FlatList>
    )
}

export default GameScreen
