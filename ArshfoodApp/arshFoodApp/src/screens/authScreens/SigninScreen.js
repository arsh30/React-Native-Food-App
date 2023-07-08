import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors, parameters, title} from '../../global/style';
import Icon from 'react-native-vector-icons/Feather';
import VisibilityIcon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';

// for animation
import * as Animatable from 'react-native-animatable';

//

const SigninScreen = () => {
  const [textInput2Focussed, setTextInput2Focussed] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header title={'MY ACCOUNT'} type="arrowleft" />

      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign-In</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please Enter the email and Password</Text>
        <Text style={styles.text1}>Register with your account</Text>
      </View>

      <View style={{marginTop: 20}}>
        <View>
          <TextInput style={styles.TextInput1} placeholder="Email" ref={textInput1}/>
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View animation={textInput2Focussed ? "fadeInLeft" : ""} duration={400}>
            <Icon name="lock" style={{color: colors.grey3}} size={18} ref={textInput2}/>
          </Animatable.View>

          <TextInput placeholder="Password" style={{width: '80%'}} 
          onFocus ={() => setTextInput2Focussed(true)}
          onBlur={() => setTextInput2Focussed(false)}
          />

          <Animatable.View animation={textInput2Focussed ? "fadeInLeft" : ""} duration={400}>
            <VisibilityIcon
              name="visibility-off"
              style={{color: colors.grey3, marginRight: 10}}
              size={18}
            />
          </Animatable.View>
        </View>
      </View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15, // andr ka content left right move hoga
  },

  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15, // andr ka content left right move hoga
  },
});
