/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { response } from 'express';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

import swapiWrapper from './libs/swapi';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  componentDidMount() {
    // get all SWAPI endpoints
    swapiWrapper.getAllResourcesUrls((response)=>{
      console.log("URLs: ", response);
    })
    
    // get peoples
    swapiWrapper.getPersonById(1, (response)=>{
      console.log("Person is: ", response);
    })

    swapiWrapper.getAllPeople({page: 1}, (response)=>{
      console.log("People list: ", response);
    })

    swapiWrapper.getAllPeople({page: 1, search: "Luke"}, (response)=>{
      console.log("People list: ", response);
    })
    
    // get films
    swapiWrapper.getFilmById(1, (response)=>{
      console.log("Film is: ", response);
    })

    swapiWrapper.getAllFilms({page: 1}, (response)=>{
      console.log("Flims list: ", response);
    })

    // get planates
    swapiWrapper.getPlanetById(1, (response)=>{
      console.log("Planet is: ", response);
    })

    swapiWrapper.getAllPlanets({page: 1}, (response)=>{
      console.log("Planets list: ", response);
    })

    // get star ships
    swapiWrapper.getShipById(1, (response)=>{
      console.log("Start ship is: ", response);
    })

    swapiWrapper.getAllShips({page: 1}, (response)=>{
      console.log("Start ships list: ", response);
    })

    // get star species
    swapiWrapper.getSpeciesById(1, (response)=>{
      console.log("Species is: ", response);
    })

    swapiWrapper.getAllSpecies({page: 1}, (response)=>{
      console.log("Species list: ", response);
    })

    // get Vehicles
    swapiWrapper.getVehicleById(1, (response)=>{
      console.log("Vehicle is: ", response);
    })

    swapiWrapper.getAllVehicles({page: 1}, (response)=>{
      console.log("Vehicles list: ", response);
    })
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.lable}>{'See Console Logs'}</Text>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignContent: 'center'
  },
  lable: {
    textAlign: 'center'
  }
});

export default App;
