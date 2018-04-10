import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../services/apiServices';

export default class Login extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      apiDataLoaded: false,
      apiData: null,
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    console.log('I AM THE FUCKING STATE!!!!!!!!!!!!!!!!!_________>>>>>>>',this.state);
    services.connect(this.state)
    .then(results => {
      console.log('did a thing', results)
      this.setState({
        apiDataLoaded: true,
        apiData: results.data.data
      })
    })
    .catch(err => {
      console.log(`You suck on Login`, err);
    })
}
  render(){
    return(
      <View style={styles.tiny}>
        {console.log(this.state)}
        <TextInput
          style={{marginLeft:110, width: 150, marginTop:50,fontSize:30}}
          placeholder='email'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={{marginLeft:115, width: 150, marginTop:5,fontSize:30,marginBottom: 15}}
          placeholder='Password'
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          value={this.state.password}
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
