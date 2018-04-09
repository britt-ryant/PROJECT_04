import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../services/apiServices';

export default class Login extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      apiDataLoaded: false,
      apiData: null
    }
  }
  componentDidMount(){
    services.connect()
    .then(results => {
      console.log('I am the results !!!!!!', results.data.data);
      this.setState({
        apiDataLoaded: true,
        apiData: results.data.data
      })
    })
    .catch(err => {
      console.log(`You suck on Login`, err);
    })
  }
  fakeDidMount(){
    Alert.alert("hello down there!!!!")
  }
  renderData(){
    const data = this.state.apiData.map((obj, key) => <Text key={key}>{obj.name}</Text>)
    return(
      <View style={styles.tiny}>
        {data}
      </View>
    )
  }
  render(){
    return(
      <View style={styles.tiny}>
          {this.state.apiDataLoaded ? this.renderData() : (<Text>No Data Yet</Text>)}
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
