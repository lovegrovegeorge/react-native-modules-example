import React, { useEffect } from 'react';
import { NativeModules } from 'react-native';
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';

const { SoundManager } = NativeModules;

const SOUNDS = ['crowd', 'woohoo', 'clapping'];

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    marginBottom: 24,
    textAlign: 'center',
  },
  body: {
    fontSize: 15,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  image: {
    height: 220,
    resizeMode: 'cover',
  },
});

const playSound = () => {
  const randomSound = SOUNDS[Math.ceil(Math.random() * SOUNDS.length) - 1];

  try {
    SoundManager.play(randomSound);
  } catch (error) {
    // Sound not found
  }
};

export const Confirm = ({ navigation: { reset }, route: { params: { id, title } } }) => {
  useEffect(() => {
    // Play sound effect on confirmation of payment
    setTimeout(() => {
      playSound();
    }, 1000);
  });

  return (
    <ScrollView style={{flex: 1}}>
      <Image source={{ uri: 'https://media.giphy.com/media/U15x0bURfSEOJI0nbX/giphy.gif' }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.header}>Your Ticket</Text>
        <Text style={styles.body}>{title}</Text>
        <Button
          onPress={() => reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })}
          title="Go back Home"
        />
      </View>
    </ScrollView>
  );
}
