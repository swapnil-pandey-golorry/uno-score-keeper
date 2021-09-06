import { ContentWriter } from 'istanbul-lib-report';
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Context } from '../App';

const StartScreen = ({ navigation }) => {
  const state = useContext(Context);
  const { playerData } = state;
  const { changePlayerData } = state;
  const { changeNumber } = state;
  const { numberOfPlayers } = state;
  const { changeWinPoints } = state;
  const [isAdding, setIsAdding] = useState(false);
  const [newPlayer, setNewPlayer] = useState('');
  const renderPlayerInput = (itemData) => {
    const playerIndex = itemData.index;
    const playerName = itemData.item.name;
    return (
      <View style={styles.playerCard}>
        <Text style={styles.playerText}>
          Player
          {' '}
          {playerIndex + 1}
          {' '}
          name:
        </Text>
        <TextInput
          style={styles.playerInput}
          defaultValue={playerName}
          onChangeText={(input) => {
            playerData.forEach((part, index, theArray) => {
              if (playerIndex === index) {
                playerData[index].name = input;
              }
              changePlayerData(playerData);
            });
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.screen}>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Uno Score Keeper</Text>
      </View>
      <View style={styles.settingsContainer}>
        <View>
          <Text style={styles.text}>Number of players</Text>
          <TextInput
            style={styles.input}
            defaultValue="2"
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(input) => {
              const num = parseInt(input);
              if (input.length == 0) {
                return;
              }
              if (input === '1') {
                return;
              }
              if (num > numberOfPlayers) {
                while (num > playerData.length) {
                  const playerName = `Player ${playerData.length + 1}`;
                  playerData.push({
                    name: playerName,
                    score: 0,
                  });
                }
                changeNumber(num);
                changePlayerData(playerData);
              } else if (num < playerData.length) {
                while (playerData.length > num) {
                  playerData.pop();
                }
              }
              changeNumber(num);
              changePlayerData(playerData);
            }}
          />
        </View>
        <View>
          <Text style={styles.text}>Points to win</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={3}
            defaultValue="100"
            onChangeText={(input) => {
              changeWinPoints(input);
            }}
          />
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={playerData}
        renderItem={renderPlayerInput}
      />
      {isAdding && (
      <View style={styles.addPlayerCard}>
        <Text style={styles.playerText}>
          Enter new player name:
        </Text>
        <TextInput
          style={styles.addplayerInput}
          onChangeText={(input) => {
            setNewPlayer(input);
          }}
        />
      </View>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            const newData = playerData.slice();
            const playerName = `Player ${numberOfPlayers + 1}`;
            changeNumber(numberOfPlayers + 1);
            newData.push({
              name: playerName,
              score: 0,
            });
            changePlayerData(newData);
          }}
        >
          <Text
            style={styles.addRemoveButtonText}
          >
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => {
            const newData = playerData.slice();
            changeNumber(numberOfPlayers - 1);
            newData.pop();
            changePlayerData(newData);
          }}
        >
          <Text
            style={styles.addRemoveButtonText}
          >
            -
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.startGameButton}
        onPress={() => navigation.navigate('Game Screen')}
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#19193C',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headingContainer: {
    alignItems: 'center',
    height: '20%',
    paddingTop: 33,
    zIndex: 1,
  },
  heading: {
    fontFamily: 'inter',
    fontSize: 25,
    color: 'white',
  },
  detailsContainer: {
    flex: 1,
    marginBottom: 0,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.4,
    width: '40%',
    height: 30,
    fontSize: 12,
    paddingTop: 5,
    color: 'white',
  },
  startGameButton: {
    backgroundColor: 'white',
    height: 35,
    marginHorizontal: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2ECC71',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  playerText: {
    color: 'white',
    marginHorizontal: 20,
  },
  playerInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.4,
    width: '80%',
    paddingTop: 4,
    fontSize: 14,
    color: '#c0cfc4',
    marginHorizontal: 20,
  },
  playerCard: {
    marginTop: 5,
    marginBottom: 15,
  },
  settingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 12,
  },
  list: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 30,
  },
  addButton: {
    backgroundColor: 'orange',
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: 'orange',
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: 'center',
  },
  addRemoveButtonText: {
    fontSize: 20,
  },
  addPlayerCard: {
    paddingTop: 10,
  },
  addplayerInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.4,
    marginBottom: 5,
    width: '80%',
    marginHorizontal: 20,
  },

});
export default StartScreen;
