import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Image, ScrollView, View, Button, TextInput, Linking } from 'react-native'

import Text from '../../shared/components/Text'
import { formatDate } from '../../utils/dates'

const DEMO_EVENT = {
  id: 'fake-id',
  title: 'Fake Event',
  starts: '2020-04-09T17:31:04.785Z',
  image: 'https://picsum.photos/400/200',
  description:
    'Consequatur perspiciatis mollitia veniam sit sed occaecati consequatur molestiae quis. Quia voluptatem recusandae doloremque voluptas eaque suscipit iusto sed. Qui et dolorum commodi rem voluptatem molestiae sit aperiam.',
  long_description:
    'Dolore harum perferendis. Et enim rerum culpa. Ut sapiente voluptatem corporis repellendus neque libero distinctio ex distinctio. Nesciunt laboriosam numquam nihil. Non tenetur ipsam et. Et voluptates consequuntur quis vel ut.\n \rInventore animi qui ut sed quo est. Quis nemo dolores odio distinctio voluptatum incidunt necessitatibus enim aut. Nulla quae officiis odit ut omnis perspiciatis illum molestiae.\n \rNumquam debitis accusamus ut. Sequi voluptates non iure enim et odit aut delectus magni. Minus tempore voluptates consequatur inventore est qui sed laborum. Aut cum eaque eaque rerum esse a id aut.',
  price: '$50.39',
  location: {
    latitude: '51.5079891',
    longitude: '-0.1278803'
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8
  },
  header: {
    marginBottom: 8
  },
  date: {
    marginBottom: 8
  },
  card: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden'
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
  },
  field: {
    marginTop: 10
  },
  label: {
    marginBottom: 10
  },
  input: {
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10
  }
})

export const EventInformation = ({ event }) => {
  const {
    title,
    starts,
    image,
    description,
    location: { latitude, longitude }
  } = event

  return (
    <View>
      <View style={styles.cardImage}>
        <Image source={{ uri: image }} style={styles.cardImageCanvas} resizeMode='cover' />
      </View>
      <View style={styles.section}>
        <Text type='heading' style={styles.header}>{title}</Text>
        <Text style={styles.date}>{formatDate(starts)}</Text>
        <Button
          onPress={() =>
            Linking.openURL(`https://www.google.co.uk/maps/?q=${latitude},${longitude}`)
          }
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

export const Event = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const { price } = DEMO_EVENT

  const handleSetName = (name) => setName(name)

  const handleSetEmail = (email) => setEmail(email)

  const handleSubmit = () => {
    const { reset } = navigation
    const { id, title } = DEMO_EVENT

    reset({
      index: 0,
      routes: [{ name: 'Confirm', params: { id, title } }]
    })
  }

  return (
    <ScrollView>
      <View>
        <EventInformation event={DEMO_EVENT} />
        <View style={styles.section}>
          <Text type='subHeading' style={styles.header}>Buy a ticket</Text>
          <View style={styles.field}>
            <Text type='formLabel' style={styles.label}>Your name</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleSetName}
              value={name}
            />
          </View>
          <View style={styles.field}>
            <Text type='formLabel' style={styles.label}>Email address</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleSetEmail}
              value={email}
            />
          </View>
        </View>
        <Button onPress={handleSubmit} title={`Pay ${price}`} />
      </View>
    </ScrollView>
  )
}

Event.PropTypes = {
  navigation: PropTypes.shape({})
}
