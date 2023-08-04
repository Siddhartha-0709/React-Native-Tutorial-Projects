import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [randomBackground, setRandomBackground] = useState('#FFFFFF');
  const generateColor = ()=>{
    const hexRange = "0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++)
    {
      color+= hexRange[Math.floor(Math.random()*16)]; 
    }
    console.log(color);
    setRandomBackground(color);
  }
  return (
    <>
    <StatusBar  backgroundColor={randomBackground}/>
    <View style={[styles.container,{backgroundColor: randomBackground}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>
            Press Here
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionBtn:{
    borderRadius:20,
    padding:15,
    backgroundColor:'#FFD1DA'
  },
  actionBtnTxt:{
    fontSize:20,
    color:"#000000"
  }
})