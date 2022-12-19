import React, { useMemo, useState, useRef, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FlatList, StyleSheet, View, Text, Image, ActivityIndicator, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { formatDate } from '../../utils/dates';
import { GET_EVENTS } from '../../graphql/queries';

const CARD_HEIGHT = 420;
const LIST_HEADER_HEIGHT = 50;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  sectionHeading: {
    fontSize: 26,
    padding: 16,
    backgroundColor: 'white',
  },
  date: {
    fontSize: 16,
    marginBottom: 8,
  },
  cardHeading: {
    fontSize: 24,
    marginVertical: 6
  },
  card: {
    maxHeight: 400,
    height: 400,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 1,
    height: 180,
    alignItems: 'stretch',
  },
  cardImageCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  cardContent: {
    padding: 10,
  },
});

const EventCard = ({ navigate, id, starts, title, description, image }) => (
  <View style={styles.card}>
    <View style={styles.cardImage}>
      <Image source={{ uri: image }} style={styles.cardImageCanvas} resizeMode="cover" />
    </View>
    <View style={styles.cardContent}>
      <Text style={styles.cardHeading}>{title}</Text>
      <Text style={styles.date}>{formatDate(starts)}</Text>
      <Text>{description}</Text>
      <Button
        onPress={() => navigate('Event', { id, title })}
        title="Buy a ticket"
        color="#841584"
        accessibilityLabel="Buy a ticket for this event"
      />
    </View>
  </View>
);

export const Schedule = ({ navigation: { navigate }}) => {
  const eventListRef = useRef();
  const [calendarVisible, setCalendarVisible] = useState(false);
  const { loading, error, data } = useQuery(GET_EVENTS);

  const todaysDate = useMemo(() => new Date(), []);

  const handleCalendarVisible = useCallback((show) => () => setCalendarVisible(show), []);

  const handleEventDateSelect = datePickerResponse => {
    const eventIndex = data.allEvents.findIndex(event =>
      new Date(event.starts) >= new Date(datePickerResponse.dateString)
    );

    setCalendarVisible(false)
    setTimeout(() => {
      eventListRef.current.scrollToIndex({
        index: eventIndex,
        viewPosition: 0,
        animated: true,
      })
    }, 100)
  }

  if (loading) {
    return <View><ActivityIndicator /></View>
  }

  if (error) {
    return <View><Text>ERROR: Is the server running?</Text></View>
  }

  const renderHeader = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: LIST_HEADER_HEIGHT,
      }}
    >
      <Button onPress={handleCalendarVisible(true)} title="🗓 Calendar" />
    </View>
  )

  const getItemLayout = (data, index) => ({
    length: CARD_HEIGHT,
    offset: CARD_HEIGHT * index + LIST_HEADER_HEIGHT,
    index,
  });

  const renderItems = ({ item }) => <EventCard key={item.id} navigate={navigate} {...item} />

  // TODO Add section headers
  const renderSectionHeader = ({ section: { data } }) => {
    return null;
    if (!data) return null;
    return (
      <View style={styles.sectionHeading}>
        <Text style={styles.cardHeading}>
          {new Date(data[0].starts).toLocaleDateString('en-GB')}
        </Text>
      </View>
    );
  }

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
            <Calendar
              minDate={todaysDate}
              onDayPress={handleEventDateSelect}
            />
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
  );
};
