import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class UserProfile extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      //change this state property of userId to be this.props.userId
      userId: 2,
      username: "Gerald",
      apiDataLoaded: false,
      userData: null,
      message: ""
    }
  }

  componentDidMount(){
    //get all of the user information
    services.getProfileInfo(this.state.userId)
    .then(result => {
      console.log('I found the userdata!', result);
      this.setState({
        apiDataLoaded: true,
        userData: result.data.data
      })
    })
    .catch(err => {
      console.log('This is messed up ----> ', err);
    })
  }

  renderData(){
    return(
      <View style={styles.tiny}>
        <Text>My name is {this.state.username}</Text>
        <Text>I am a {this.state.userData.gender}</Text>
        <Text>Looking for a {this.state.userData.seeking}</Text>
        <Text>About me: {this.state.userData.description}</Text>
      </View>
    )
  }

  render(){
    return(
      <View style={styles.tiny}>
        {this.state.apiDataLoaded ? this.renderData() : ''}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tiny: {
    maxHeight: "50%"
  }
});
