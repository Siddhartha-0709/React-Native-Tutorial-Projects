import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import Snackbar from 'react-native-snackbar';
import CurrencyButton from './components/CurrencyButton';
import { CurrencyByRupee } from './constants';
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  Pressable,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] =useState('');
  const buttonPressed= (targetValue: Currency) =>{
    if(!inputValue){
      return(
        Snackbar.show({
          text: "Enter a value to convert",
          backgroundColor: "#EA7773",
          textColor: "#000000"
        })
      )
    }
    const inputAmount = parseFloat(inputValue);
    if(!isNaN(inputAmount))
    {
      const convertedValue = inputAmount* targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    }
    else{
      return(
        Snackbar.show({
          text: "Not a valid number to convert",
          backgroundColor: "#F4BE2C",
          textColor: "#000000"
        })
      )
    }
  }
  return (
    <>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>
            ₹
            </Text>
          <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          maxLength={14}
          keyboardType='number-pad'
          clearButtonMode='always' 
          placeholder='Enter amount value to convert'
          style={styles.inputAmountField}
          />
          </View>
        </View>
        {
          resultValue&&(
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )
        }
      </View>
      <View style={styles.bottomContainer}>
      <FlatList
          numColumns={3}
          data={CurrencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
            style={[
              styles.button, 
              targetCurrency === item.name && styles.selected
            ]}
            onPress={() => buttonPressed(item)}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}
          />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '800',
    textAlign:'center',
    paddingBottom:30
  },
  rupee: {
    marginRight: 8,
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    color:'#000000',
    fontSize:20,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
