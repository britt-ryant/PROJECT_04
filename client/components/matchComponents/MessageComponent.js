import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';

export default class MessageComponent extends React.Component {
  render(){
    return(
      <View>
        <Text>{this.props.message}</Text>
      </View>
    )
  }
}
