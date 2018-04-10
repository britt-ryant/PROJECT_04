import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class DeleteProfile extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      userId: 2,
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    console.log('I am deleteing the component');
    services.nuke(this.state.userId)
    .then(result => {
      console.log('the profile was deleted');
      this.setState({
        fireRedirect: true
      })
    })
    .catch(err => {
      console.log("I had an uh oh trying to delete the profile", err);
    })
  }

  render(){
    return(
        <View style={styles.tiny}>
            <Button
              onPress={this.handleSubmit}
              title="DELETE"
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
