import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../components/Header';
import StartGame from '../screens/StartGame';
import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';

export default function GuesserCounter() {

  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGame onStartGame={startGameHandler} />
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    console.log('Hi');
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={newGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
