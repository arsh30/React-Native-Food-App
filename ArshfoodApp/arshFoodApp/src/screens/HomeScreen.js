import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomePageHeader from '../components/HomePageHeader';

const HomeScreen = () => {
  return <View style={styles.container}>
    <HomePageHeader />
  </View>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
