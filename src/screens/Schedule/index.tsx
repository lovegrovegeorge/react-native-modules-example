import React, { useState, useRef } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FlatList, View, ActivityIndicator, Button } from 'react-native'
import { Calendar } from 'react-native-calendars'
import type { NavigationProp } from '@react-navigation/native'
import { DateData } from 'react-native-calendars/src/types'
import type { Event } from '../../__generated__/graphql'

import EventCard from './EventCard'
import Text from '../../shared/components/Text'
import { GET_EVENTS } from '../../graphql/queries'

const CARD_HEIGHT = 420
const LIST_HEADER_HEIGHT = 50

type ScheduleScreenProps = {
  navigation: NavigationProp<any, any>
}

const ScheduleScreen = ({ navigation }: ScheduleScreenProps) => {
  const eventListRef = useRef<FlatList<Event>>(null)
  const [calendarVisible, setCalendarVisible] = useState(false)
  const { loading, error, data } = useQuery(GET_EVENTS)

  const todaysDate = new Date()

  const handleCalendarVisible = (show: boolean) => () => setCalendarVisible(show)

  const handleEventDateSelect = (datePickerResponse: DateData) => {
    const eventIndex = data.allEvents.findIndex(
      (event: Event) => new Date(event.starts) >= new Date(datePickerResponse.dateString)
    )

    setCalendarVisible(false)
    setTimeout(() => {
      if (eventListRef.current) {
        eventListRef.current.scrollToIndex({
          index: eventIndex,
          viewPosition: 0,
          animated: true
        })
      }
    }, 100)
  }

  if (loading) return (
    <View>
      <ActivityIndicator />
    </View>
  )

  if (error) return (
    <View>
      <Text>ERROR: Is the server running?</Text>
    </View>
  )

  const renderHeader = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: LIST_HEADER_HEIGHT
      }}
    >
      <Button onPress={handleCalendarVisible(true)} title="🗓 Calendar" />
    </View>
  )

  const getItemLayout = (data: Event[] | null | undefined, index: number) => ({
    length: CARD_HEIGHT,
    offset: CARD_HEIGHT * index + LIST_HEADER_HEIGHT,
    index
  })

  const renderItems = ({ item }: { item: Event }) =>
    <EventCard key={item.id} navigation={navigation} {...item} />

  return (
    <View>
      <FlatList
        ref={eventListRef}
        keyExtractor={(item) => item?.id?.toString()}
        ListHeaderComponent={renderHeader}
        getItemLayout={getItemLayout}
        renderItem={renderItems}
        data={data?.allEvents}
      />
      {calendarVisible && (
        <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <View style={{ backgroundColor: 'white', height: '100%', justifyContent: 'center' }}>
            <Calendar minDate={todaysDate} onDayPress={handleEventDateSelect} />
            <View style={{ marginTop: 30 }}>
              <Button
                onPress={handleCalendarVisible(false)}
                title="Close"
                color="#841584"
                accessibilityLabel="Close event calendar pick"
              />
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

export default ScheduleScreen
