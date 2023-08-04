import React from 'react'
import { View, StyleSheet,Pressable } from 'react-native'
import TrackPlayer, { usePlaybackState, State } from 'react-native-track-player'
import { playbackService } from '../../musicPlayerServices'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Controlcenter() {
    const playBackState = usePlaybackState();
    //Next Button
    const skipToNext =async () => {
        await TrackPlayer.skipToNext()
    }
    //Previous Button
    const skipToPrevious =async () => {
        await TrackPlayer.skipToPrevious()
    }
    const togglePlayback =async (playback: State) => {
        const currentTrack = TrackPlayer.getCurrentTrack()
        if(currentTrack!=null)
        {
            if((playback === State.Paused || playback ===State.Ready))
            {
                await TrackPlayer.play();
            }
            else{
                await TrackPlayer.pause();
            }
        }  
    } 
  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon style={styles.icon} name="skip-previous" size={40} />
        </Pressable>
        <Pressable onPress={() => togglePlayback(playBackState)}>
            <Icon 
            style={styles.icon} 
            name={playBackState === State.Playing ? "pause" : "play"} 
            size={75} />
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon style={styles.icon} name="skip-next" size={40} />
        </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });