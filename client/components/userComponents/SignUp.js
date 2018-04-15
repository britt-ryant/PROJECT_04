import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class SignUp extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      completed: false,
      message: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }

handlePress(){
  const {navigate} = this.props.navigation
  navigate("LoginScreen")
}
  handleSubmit(e){
    const {navigate} = this.props.navigation
    console.log(this.state);
    if(this.state.username !== "" && this.state.password !== ""){
      services.newUser(this.state)
      .then(result => {
        if(result.data.data === 0){
          // console.log('I am the result of the post request and the username exists', result);
          this.setState({
            fireRedirect: false,
            message: result.data.message
          })
        } else {
          this.setState({
            fireRedirect: true,
            message: "",
            newUserId: result.data.data.id,
            newUsername: result.data.data.username,
            newUserPassword: result.data.password
          }, () => navigate("CreateProfileScreen", this.state))
        }
      })
      .catch( err => {
        console.log("I am the error on the sign up page", err);
      })
    } else {
      this.setState({
        message: "Please enter a vaild Username and Password!"
      })
    }
  }
  render(){
    return(
        <View style={styles.tiny}>
            <Text tyle={{marginLeft:10, width: 150, marginTop:70,fontSize:30}}>Sign Up</Text>
            <Text>{this.state.message}</Text>
            <TextInput
              style={{marginLeft:10, width: 150, marginTop:50,fontSize:30}}
              placeholder='Username'
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
            />
            <TextInput
              style={{marginLeft:15, width: 150, marginTop:5,fontSize:30,marginBottom: 15}}
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
          <Button title='Login Here' color="#841584" onPress={this.handlePress}/>
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
