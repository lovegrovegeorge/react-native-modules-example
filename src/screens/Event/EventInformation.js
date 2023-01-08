import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Image, View, Button, Linking } from 'react-native'

import Text from '../../shared/components/Text'
import { formatDate } from '../../utils/dates'

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

const EventInformation = ({ event }) => {
  const {
    title,
    starts,
    image,
    description,
    location: { latitude, longitude }
  } = event

  const handleOpenMap = () =>
    Linking.openURL(`https://www.google.co.uk/maps/?q=${latitude},${longitude}`)

  return (
    <View>
      <View style={styles.cardImage}>
        <Image source={{ uri: image }} style={styles.cardImageCanvas} resizeMode='cover' />
      </View>
      <View style={styles.section}>
        <Text type='heading' style={styles.header}>{title}</Text>
        <Text style={styles.date}>{formatDate(starts)}</Text>
        <Button
          onPress={handleOpenMap}
          title='📍 Open map'
        />
        <Text type='smallText'>{description}</Text>
      </View>
    </View>
  )
}

EventInformation.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    starts: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.decimal,
    location: PropTypes.shape({
      latitude: PropTypes.string,
      longitude: PropTypes.string
    })
  })
}

export default EventInformation