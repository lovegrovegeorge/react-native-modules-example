import React from 'react'
import type { NavigationProp } from '@react-navigation/native'
import { StyleSheet, View, Button } from 'react-native'

import Text from '../../shared/components/Text'

type HomeScreenProps = {
  navigation: NavigationProp<any, any>
}

const HomeScreen = ({ navigation: { navigate } }: HomeScreenProps) => (
  <View>
    <Text type='heading' style={styles.header}>Events App</Text>
    <Text style={styles.blurb}>The worlds greatest events in one tiny app.</Text>
    <Button onPress={() => navigate('Schedule')} title="All Events" color="#841584" />
  </View>
)

const styles = StyleSheet.create({
  header: {
    marginTop: 24,
    marginBottom: 24,
    textAlign: 'center'
  },
  blurb: {
    marginBottom: 12,
    textAlign: 'center'
  }
})

export default HomeScreen