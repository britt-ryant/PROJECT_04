import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class Match extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      personData: this.props.personData
    }
    this.handlePress = this.handlePress.bind(this)
    this.navigate = this.navigate.bind(this)

  }

  handlePress(){
    console.log(`I am clicked!!!`, this.props);
    this.navigate()
  }

  navigate(){
    const {navigate} = this.props.navigation
    this.props.screenProps = this.state.personData.user_one
    navigate("OneMatchScreen", this.state)
  }

  render(){
    return(
      <View>
        <Button
          title={this.state.personData.username}
          onPress={this.handlePress}
        />
      </View>
    )
  }
}
