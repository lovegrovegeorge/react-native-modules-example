import React from 'react'
import { StyleSheet, View, Image, Button } from 'react-native'
import { NavigationProp } from '@react-navigation/native'

import Text from '../../shared/components/Text'
import { formatDate } from '../../utils/dates'

type EventCardProps = {
  navigation: NavigationProp<any, any>
  id: string
  starts: string
  title: string
  description: string
  image: string
}

const EventCard = ({ navigation, id, starts, title, description, image }: EventCardProps) => (
  <View style={styles.card}>
    <View style={styles.cardImage}>
      <Image source={{ uri: image }} style={styles.cardImageCanvas} resizeMode='cover' />
    </View>
    <View style={styles.cardContent}>
      <Text type='subHeading' style={styles.cardHeading}>
        {title}
      </Text>
      <Text style={styles.date}>{formatDate(starts)}</Text>
      <Text type='smallText'>{description}</Text>
      <Button
        onPress={() => navigation.navigate('Event', { id, title })}
        title='Buy a ticket'
        color='#841584'
        accessibilityLabel='Buy a ticket for this event'
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  date: {
    marginBottom: 8
  },
  cardHeading: {
    marginVertical: 6
  },
  card: {
    maxHeight: 400,
    height: 400,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden'
  },
  cardImage: {
    flex: 1,
    height: 180,
    alignItems: 'stretch'
  },
  cardImageCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  cardContent: {
    padding: 10
  }
})

export default EventCard
