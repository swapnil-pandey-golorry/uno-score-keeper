/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useState, createContext} from 'react';
import StartScreen from './Screens/StartScreen';

export const Context = createContext()

const App = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2)
  const [playerData, setPlayerData] = useState([
    {
      'name': 'Player 1',
      'score': 0
    },
    {
      'name': 'Player 2',
      'score': 0
    }
  ])
  const [winPoints, setWinPoints] = useState(100)
  const changeNumber = val => { setNumberOfPlayers(val) }
  const changePlayerData = data => { setPlayerData(data) }
  const changeWinPOints = val => {setWinPoints(val)}
  return (
    <Context.Provider value={
      {
        numberOfPlayers: numberOfPlayers,
        playerData: playerData,
        winPoints: winPoints,
        changeNumber: changeNumber,
        changePlayerData: changePlayerData,
        changeWinPOints : changePlayerData
      }
    }>
      <StartScreen></StartScreen>
    </Context.Provider>
    
  )
}


export default App;
