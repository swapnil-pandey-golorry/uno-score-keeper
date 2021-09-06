import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import PlayerCard from '../components/PlayerCard';
import { Context } from '../App';

const GameScreen = ({ navigation }) => {
  const renderPlayerCard = (itemData) => <PlayerCard navigation={navigation} name={itemData.item.name} score={itemData.item.score} />;
  const isFocused = useIsFocused();

  useEffect(() => {
    setRerender(1 - reRender);
  }, [isFocused]);
  const [reRender, setRerender] = useState(0);

  const state = useContext(Context);
  const { playerData } = state;

  const { changePlayerData } = state;
  const { winPoints } = state;
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.text}>
          {playerData[0].name}
          {' '}
          is winning !
        </Text>
      </View>

      <FlatList data={playerData} renderItem={renderPlayerCard} />
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  screen: {
    alignItems: 'center',
  },
});

export default GameScreen;
