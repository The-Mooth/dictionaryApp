import Sound from "react-native-sound";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import Play from "./svgs/play";

const SoundButton = ({ data }) => {
  const soundUrl = "";

  data.phonetics !== undefined
    ? data.phonetics.map((phonetic) => {
        if (phonetic.audio != undefined) {
          soundUrl = phonetic.audio;
        }
      })
    : null;

    const sound = new Sound(soundUrl, null, (error) => {
        if (error) {
            console.log("failed to load the sound", error);
            return;
        }
        // loaded successfully
        console.log("Load sound complete");
    });

    sound.play((success) => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.log('Sound playback failed');
        }

        // Release when it's done so we're not using up resources
        sound.release();
        });

  return (
  <Pressable><Play/></Pressable>
  )
};

export default SoundButton;
