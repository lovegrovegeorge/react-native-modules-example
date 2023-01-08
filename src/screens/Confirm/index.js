import React, { useEffect } from 'react'
import { NativeModules } from 'react-native'
import { StyleSheet, ScrollView, View, Button, Image } from 'react-native'

import Text from '../../shared/components/Text'

const { SoundManager } = NativeModules

const SOUNDS = ['crowd', 'woohoo', 'clapping']

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
    textAlign: 'center'
  },
  body: {
    textAlign: 'center',
    marginBottom: 20
  },
  content: {
    flex: 1,
    padding: 20
  },
  image: {
    height: 220,
    resizeMode: 'cover'
  }
})

const playSound = () => {
  const randomSound = SOUNDS[Math.ceil(Math.random() * SOUNDS.length) - 1]

  try {
    SoundManager.play(randomSound)
  } catch (error) {
    // TODO Handle sound not found
  }
}

export const Confirm = ({
  navigation: { reset },
  route: {
    params: { id, title }
  }
}) => {
  useEffect(() => {
    // Play sound effect on confirmation of payment
    const soundTimeout = setTimeout(() => playSound(), 500)

    return () => clearTimeout(soundTimeout)
  })

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        source={{ uri: 'https://media.giphy.com/media/U15x0bURfSEOJI0nbX/giphy.gif' }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text type='subHeading' style={styles.header}>Your Ticket</Text>
        <Text style={styles.body}>{title}</Text>
        <Button
          onPress={() =>
            reset({
              index: 0,
              routes: [{ name: 'Home' }]
            })
          }
          title="Go back Home"
        />
      </View>
    </ScrollView>
  )
}
