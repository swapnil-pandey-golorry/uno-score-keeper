import React, {useContext} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
    FlatList,
  ScrollView
} from 'react-native';
import PlayerCard from '../components/PlayerCard';
import {Context} from '../App';

const GameScreen = () => {
  const renderPlayerCard = itemData => {
    return <PlayerCard name={itemData.item.name} score={itemData.item.score} />;
  };

  const state = useContext(Context);
  const playerData = state.playerData;
  const changePlayerData = state.changePlayerData;
    return (
        <ScrollView>
            <View style = {styles.screen}>
            <Text style = {styles.text}>{playerData[0]['name']} is winning !</Text>
            </View>
            
            <FlatList data={playerData} renderItem={renderPlayerCard} />
        </ScrollView>
        
        );
};

const styles = StyleSheet.create({
    text: {
        fontSize : 20
    },
    screen: {
        alignItems : 'center'
    }
})

export default GameScreen;
