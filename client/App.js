import React from 'react';
import services from './services/apiServices';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';

export default class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     apiDataLoaded: false,
  //     apiData: null
  //   }
  // }
  // componentDidMount(){
  //   services.connect()
  //   .then(results => {
  //     // console.log(results.data);
  //     this.setState({
  //       apiDataLoaded: true,
  //       apiData: results.data.data
  //     })
  //   })
  //   .catch(err => {
  //     console.log('youre an idiot', err);
  //   })
  // }

  renderData() {
    return (
      <View style={styles.container}>
        <Text>Changes you make will automatically reload. No shit</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Login />
      </View>
    );
  }
  render(){
    console.log('loaded', this.state)
    return(
      <View style={styles.container}>
          {this.renderData()}
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
});
