import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class Match extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      personData: this.props.personData,
      currentUser: this.props.currentUser,
      targetUserId: this.props.targetUserId,
      targetUsername: this.props.targetUsername,
      description: this.props.description,
      image: this.props.image
    }
    this.handlePress = this.handlePress.bind(this)
    this.navigate = this.navigate.bind(this)

  }
  componentDidMount(){
    console.log(`I am the personData for each person!`, this.state);
  }

  handlePress(){
    // console.log(`I am clicked!!!`, this.props);
    this.navigate()
  }

  navigate(){
    const {navigate} = this.props.navigation
    this.props.screenProps = this.state.currentUser
    navigate("OneMatchScreen", this.state)
  }

  render(){
    return(
      <View>
        <Button
          title={this.state.targetUsername}
          onPress={this.handlePress}
        />
      </View>
    )
  }
}
