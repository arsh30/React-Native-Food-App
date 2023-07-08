import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MenuBar from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors, parameters} from '../global/style';
import {Icon, withBadge} from 'react-native-elements';

const HomePageHeader = () => {
  const BadgeIcon = withBadge(0)(Icon); // taki cart icon par 0 aajaye, number jo hoga vo dynamic hoga vo aage krege
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <MenuBar name="menu" color={colors.cardbackground} size={25} />
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          ArshExpressFood
        </Text>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center',marginRight:15}}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={30}
          color={colors.cardbackground}
        />
      </View>
    </View>
  );
};

export default HomePageHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent:'space-between'
  },
});
