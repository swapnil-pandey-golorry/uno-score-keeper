/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, createContext} from 'react';
import StartScreen from './Screens/StartScreen';
import GameScreen from './Screens/GameScreen';
export const Context = createContext();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
const App = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(4);
  const [playerData, setPlayerData] = useState([
    {
      name: 'Player 1',
      score: 0,
    },
    {
      name: 'Player 2',
      score: 0,
    }
  ]);
  const [winPoints, setWinPoints] = useState(100);
  const changeNumber = val => {
    setNumberOfPlayers(val);
  };
  const changePlayerData = data => {
    setPlayerData(data);
  };
  const changeWinPOints = val => {
    setWinPoints(val);
  };
  return (
    <Context.Provider
      value={{
        numberOfPlayers: numberOfPlayers,
        playerData: playerData,
        winPoints: winPoints,
        changeNumber: changeNumber,
        changePlayerData: changePlayerData,
        changeWinPOints: changePlayerData,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name= 'Start Screen'
            component = {StartScreen}
          >
          </Stack.Screen>
          <Stack.Screen
            name='Game Screen'
            component = {GameScreen}
          >
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;
