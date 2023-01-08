import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, View, Button, TextInput } from 'react-native'

import Text from '../../shared/components/Text'
import EventInformation from './EventInformation'

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
  header: {
    marginBottom: 8
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
