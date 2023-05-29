import React from 'react';
import { Audio } from 'expo-av';

const playAudio = async (data) => {
    const soundObject = new Audio.Sound();
    let soundUrl = "";

    if (data === undefined)
    {
      console.log("data is undefined");
      return;
    }

    if(data.phonetics === undefined)
    {
      console.log("data.phonetics is undefined");
      return;
    }


     data.phonetics.map((phonetic) => {
        if (phonetic.audio != undefined && phonetic.audio != "") {
          return soundUrl = phonetic.audio;
        }
      })
    

    if (soundUrl === "") {
        return;
    }
    try {
      // Load the audio file
      await soundObject.loadAsync({ uri: soundUrl });
  
      // Play the audio
      await soundObject.playAsync();
    } catch (error) {
      console.log('Error playing audio:', error);
    }
  };
  export default playAudio;