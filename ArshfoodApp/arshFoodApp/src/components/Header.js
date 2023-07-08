import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/style';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({title,type}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20}}>
        <Icon
          name={type}
          color={colors.headerText}
          size={24}
          onPress={() => {}}
        />
      </View>

      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
