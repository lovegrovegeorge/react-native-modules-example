import { NativeModules } from 'react-native'

const { SoundManager } = NativeModules

const SOUNDS = ['crowd', 'woohoo', 'clapping']

export const playSound = () => {
  const randomSound = SOUNDS[Math.ceil(Math.random() * SOUNDS.length) - 1]

  try {
    SoundManager.play(randomSound)
  } catch (error) {
    // TODO Handle sound not found
  }
}