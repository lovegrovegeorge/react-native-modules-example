import React from 'react'
import { StyleSheet, Image, View, Button, Linking, ImageSourcePropType } from 'react-native'

import type { Event } from '../../__generated__/graphql'
import Text from '../../shared/components/Text'
import { formatDate } from '../../utils/dates'

const DEMO_LOCATION = {
  latitude: '51.5079891',
  longitude: '-0.1278803'
}

type EventInformationProps = {
  event: Event
}

const EventInformation = ({ event }: EventInformationProps) => {
  const {
    title,
    starts,
    image,
    description,
  } = event

  const handleOpenMap = () =>
    Linking.openURL(`https://www.google.co.uk/maps/?q=${DEMO_LOCATION.latitude},${DEMO_LOCATION.longitude}`)

  return (
    <View>
      <View style={styles.cardImage}>
        <Image
          source={{ uri: image } as ImageSourcePropType}
          style={styles.cardImageCanvas}
          resizeMode='cover'
        />
      </View>
      <View style={styles.section}>
        <Text type='heading' style={styles.header}>{title}</Text>
        <Text style={styles.date}>{formatDate(starts as string)}</Text>
        <Button
          onPress={handleOpenMap}
          title='📍 Open map'
        />
        <Text type='smallText'>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 8
  },
  date: {
    marginBottom: 8
  },
  cardImage: {
    flex: 1,
    height: 280,
    alignItems: 'stretch'
  },
  cardImageCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  section: {
    padding: 20
  }
})

export default EventInformation