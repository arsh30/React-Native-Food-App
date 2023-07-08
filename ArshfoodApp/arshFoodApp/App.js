import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from './src/global/style';
import SigninScreen from './src/screens/authScreens/SigninScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.statusBar}
      />
      <SigninScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
