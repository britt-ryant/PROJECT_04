import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class AllMatches extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //currentUser: this.props.currentUser
      currentUser: 1,
      oneUser: null,

    }
  }
  componentDidMount(){
    services.getAllMatches(this.state.currentUser)
    .then(results => {
      console.log(`I got all of the matches for ${this.state.currentUser}`, results);
      this.setState({
        apiData: results.data,
        apiDataLoaded: true
      })
    })
    .catch(err => {
      console.log(`Something went wrong trying to get ${this.state.currentUser}'s matches`, err);
    })
  }
  renderData(){
    return(
      <View>
        <Text>I am the all matches component</Text>
      </View>
    )
  }
  render(){
    return(
      <View>
        {this.state.apiDataLoaded ? this.renderData() : "Loading matches"}
      </View>
    )
  }
}
