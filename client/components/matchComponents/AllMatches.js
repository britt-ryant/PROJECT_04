import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';
import Match from './Match';


export default class AllMatches extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //currentUser: this.props.currentUser
      currentUser: this.props.currentUser,
      oneUser: null,

    }
  }
  componentDidMount(){
    console.log("I am getting all matches!", this.props);
    services.getAllMatches(this.state.currentUser)
    .then(results => {
      console.log(`I got all of the matches for ${this.state.currentUser}`, results);
      this.setState({
        apiData: results.data.data,
        apiDataLoaded: true
      }, () => console.log(`I am the new state`, this.state.apiData))
    })
    .catch(err => {
      console.log(`Something went wrong trying to get ${this.state.currentUser}'s matches`, err);
    })
  }
  renderData(){
    const allMatches = this.state.apiData.map((person, id) => <Match personData={person} key={id} />)
    return(
      <View>
        {allMatches}
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
