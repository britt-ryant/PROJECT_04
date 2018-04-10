import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class CreateProfile extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      //change this state property of userId to be this.props.userId
      userId: 2,
      username: "Gerald",
      apiDataLoaded: false,
      userData: null,
      message: "",
      gender: "",
      seeking: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    console.log('I am the new state of the apppppppp!!!!', this.state);
    services.createProfileInfo(this.state)
    .then(result => {
      this.setState({
        fireRedirect: true
      })
    })
    .catch(err => {
      console.log("This is the error in the update function", err);
    })
  }

  render(){
    return(
      <View style={styles.tiny}>
        <Text>{this.state.message}</Text>
        <TextInput
          style={{marginLeft:10, width: 150, marginTop:50,fontSize:30}}
          placeholder="I am a..."
          onChangeText={(gender) => this.setState({gender})}
          value={this.state.gender}
        />
        <TextInput
          style={{marginLeft:15, width: 150, marginTop:5,fontSize:30,marginBottom: 15}}
          placeholder="Seeking a..."
          onChangeText={(seeking) => this.setState({seeking})}
          value={this.state.seeking}
        />
        <TextInput
          style={{marginLeft:15, marginTop:5,fontSize:30,marginBottom: 15}}
          placeholder="About me..."
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
