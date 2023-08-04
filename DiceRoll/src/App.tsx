import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import {
  ImageSourcePropType,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import dice1 from '../assets/dice1.png'
import dice2 from '../assets/dice2.png'
import dice3 from '../assets/dice3.png'
import dice4 from '../assets/dice4.png'
import dice5 from '../assets/dice5.png'
import dice6 from '../assets/dice6.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
// optional
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(dice1); 
  const rollDice = ()=>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    switch(randomNumber)
    {
      case(1):
        setDiceImage(dice1);
        break;
      case(2):
        setDiceImage(dice2);
        break;
      case(3):
        setDiceImage(dice3);
        break;
      case(4):
        setDiceImage(dice4);
        break;
      case(5):
        setDiceImage(dice5);
        break;
      case(6):
        setDiceImage(dice6);
        break;
      default:
        setDiceImage(dice6);
        break;
    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <TouchableOpacity
        onPress={rollDice}
        style={styles.btn}
      >
        <Text style={styles.rollDiceBtnText}>
          Roll The Dice
        </Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  btn:{
    padding:40
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
