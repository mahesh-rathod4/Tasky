import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';

const UIButton = props => {
  return (
    <TouchableOpacity
      style={props.isEnabled ? GlobalStyle.ButtonBG : GlobalStyle.DisableButton}
      onPress={props.onTapBtn}>
      <Text style={[GlobalStyle.ButtonTitle]}> {props.title}</Text>
    </TouchableOpacity>
  );
};

export default UIButton;