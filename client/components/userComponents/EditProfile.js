import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class EditProfile extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      //change this state property of userId to be this.props.userId
      userId: 1,
      username: "brittryant",
      apiDataLoaded: false,
      userData: null,
      message: "",
      gender: "",
      seeking: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    //get all of the user information
    services.getProfileInfo(this.state.userId)
    .then(result => {
      console.log('I found the userdata!', result);
      this.setState({
        apiDataLoaded: true,
        userData: result.data.data,
        gender: result.data.data.gender,
        seeking: result.data.data.seeking,
        description: result.data.data.description
      })
    })
    .catch(err => {
      console.log('This is messed up ----> ', err);
    })
  }

  handleSubmit(e){
    console.log('I am the new state of the apppppppp!!!!', this.state);
    services.updateProfileInfo(this.state)
    .then(result => {
      this.setState({
        fireRedirect: true
      })
    })
    .catch(err => {
      console.log("This is the error in the update function", err);
    })
  }

  renderData(){
    return(
      <View style={styles.tiny}>
        {/* <Text>My name is {this.state.username}</Text>
        <Text>I am a {this.state.userData.gender}</Text>
        <Text>Looking for a {this.state.userData.seeking}</Text>
        <Text>About me: {this.state.userData.description}</Text> */}
        <Text>{this.state.message}</Text>
        <TextInput
          style={{marginLeft:10, width: 150, marginTop:50,fontSize:30}}
          placeholder={this.state.gender}
          onChangeText={(gender) => this.setState({gender})}
          value={this.state.gender}
        />
        <TextInput
          style={{marginLeft:15, width: 150, marginTop:5,fontSize:30,marginBottom: 15}}
          placeholder={this.state.seeking}
          onChangeText={(seeking) => this.setState({seeking})}
          value={this.state.seeking}
        />
        <TextInput
          style={{marginLeft:15, marginTop:5,fontSize:30,marginBottom: 15}}
          placeholder={this.state.description}
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
        />
        <Button
          onPress={this.handleSubmit}
          title="SUBMIT"
          color="#841584"
        />
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
