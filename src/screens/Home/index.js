import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    marginTop: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  blurb: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
  }
});

export const Home = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.header}>EventsApp</Text>
      <Text style={styles.blurb}>The worlds greatest events in one tiny app.</Text>
      <Button
        onPress={() => navigate('Schedule')}
        title="All Events"
        color="#841584"
      />
    </View>
  );
};
