import React, {useContext} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Context} from '../App';
const PlayerCard = props => {
  const state = useContext(Context);
  const playerData = state.playerData;
  const currPlayerState = playerData.slice();
  const changePlayerData = state.changePlayerData;
  const incrementScore = val => {
    currPlayerState.forEach(function (part, index, currPlayerState) {
      if (currPlayerState[index].name === props.name) {
        console.log(val);
        currPlayerState[index].score =
          val + parseInt(currPlayerState[index].score);
        changePlayerData(currPlayerState);
        console.log(currPlayerState);
      }
    });
  };
  return (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        <Text>{props.name}</Text>
        <Text>{props.score}</Text>
      </View>
          <View style={styles.buttonsContainer}>
              <View style = {styles.incrementButtonsContainer}>
              <TouchableOpacity
          style={styles.button}
          onPress={incrementScore.bind(this, 1)}>
          <View style = {styles.textContainer}><Text style = {styles.buttonText}>+1</Text></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={incrementScore.bind(this, 10)}>
          <Text style = {styles.buttonText}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={incrementScore.bind(this, 50)}>
          <Text style = {styles.buttonText}>+50</Text>
        </TouchableOpacity>
              </View>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  card: {
    backgroundColor: '#ECF0F1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 12,
        height: 110,
    borderRadius : 15
  },
    buttonsContainer: {
        flex : 3,
    },
    incrementButtonsContainer: {
    
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    },
    detailsContainer: {
      flex : 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  button: {
      borderRadius: 10,
      backgroundColor: '#19193C',
      marginBottom: 60,
      marginHorizontal: 5,
      width: 40,
      paddingTop: 10,
      alignItems : 'center'
    },
    buttonText: {
        color: 'white',
        paddingBottom : 5
    },
    textContainer: {
    }
});

export default PlayerCard;
