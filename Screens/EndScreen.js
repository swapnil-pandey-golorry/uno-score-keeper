import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Context } from '../App';

const EndScreen = ({ navigation }) => {
  const state = useContext(Context);
  const winner = state.playerData[0].name;
  const { changePlayerData } = state;
  playerData = state.playerData;
  const { numberOfPlayers } = state;
  const { changeNumber } = state;

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {winner}
          {' '}
          is the winner!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          changePlayerData([
            {
              name: 'Player 1',
              score: 0,
            },
            {
              name: 'Player 2',
              score: 0,
            },
          ]);
          changeNumber(2);
          navigation.navigate('Start Screen');
        }}
      >
        <Text style={styles.buttonText}>New Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          playerData.forEach((part, index, theArray) => {
            playerData[index].score = 0;
          });
          playerData.sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
          changePlayerData(playerData);

          console.log(playerData);
          navigation.navigate('Game Screen');
        }}
      >
        <Text style={styles.buttonText}>Restart</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 50,
  },
  text: {
    fontSize: 30,
    textAlign: 'justify',
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#19193C',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default EndScreen;
