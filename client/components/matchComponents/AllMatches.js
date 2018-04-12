import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';
import Match from './Match';


export default class AllMatches extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //currentUser: this.props.currentUser
      currentUserId: this.props.currentUser,
      oneUser: null,
      seeking: this.props.seeking

    }
    this.navigate = this.navigate.bind(this)
  }
  componentDidMount(){
    // console.log("I am getting all matches!", this.props);
    services.getAllMatches(this.state.currentUserId)
    .then(results => {
      // console.log(`I got all of the matches for ${this.state.currentUserId}`, results);
      this.setState({
        apiData: results.data.data,
        apiDataLoaded: true
      })
    })
    .catch(err => {
      console.log(`Something went wrong trying to get ${this.state.currentUserId}'s matches`, err);
    })
  }

  navigate(){
    const {navigate} = this.props.navigation
    this.props.screenProps = this.state.currentUserId
    navigate("BrowseScreen", this.state)
  }
  renderData(){
    const allMatches = this.state.apiData.map((person, id) => <Match personData={person} key={id} />)
    return(
      <View>
        {allMatches}
        <Button
          title="Browse"
          onPress={this.navigate}
        />
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
