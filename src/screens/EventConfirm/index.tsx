
import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, View, Button, Image } from 'react-native'
import { NavigationProp, RouteProp } from '@react-navigation/native'

import { playSound } from '../../utils/soundManager'
import Text from '../../shared/components/Text'

type EventConfirmScreenProps = {
  navigation: NavigationProp<any, any>
  route: RouteProp<any, any>
}

const EventConfirmScreen = ({ navigation, route }: EventConfirmScreenProps) => {
  const { reset } = navigation

  useEffect(() => {
    // Play sound effect on confirmation of payment
    const soundTimeout = setTimeout(() => playSound(), 500)

    return () => clearTimeout(soundTimeout)
  })

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://media.giphy.com/media/U15x0bURfSEOJI0nbX/giphy.gif' }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text type='subHeading' style={styles.header}>
          Your Ticket
        </Text>
        <Text style={styles.body}>{route.params?.title}</Text>
        <Button
          onPress={() =>
            reset({
              index: 0,
              routes: [{ name: 'Home' }]
            })
          }
          title='Go back Home'
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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

export default EventConfirmScreen
