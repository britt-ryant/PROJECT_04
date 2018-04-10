import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class SignUp extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.userId,
      apiDataLoaded: false,
      userData: null
      message: "",
    }
  }

  componentDidMount(){
    
  }




}
