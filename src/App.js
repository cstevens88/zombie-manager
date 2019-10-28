import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import LocationCard from './LocationCard';
import MoveZombieForm from './MoveZombieForm';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [
        {
          name: 'school',
          zombieCount: 0
        },
        {
          name: 'hospital',
          zombieCount: 0
        },
        {
          name: 'warehouse',
          zombieCount: 0
        },
      ]
    }
  }

  quarantine = index => {
    const locations = [...this.state.locations]
    locations[index].zombieCount += 1;

    this.setState({
      locations: locations
    })
  }

  move = (fromLocation, toLocation) => {
    const locations = [...this.state.locations];
    const fromLocationObject = (locations.find(location => location.name === fromLocation));
    let fromLocationZombieCount;
    if(fromLocationObject) {
      fromLocationZombieCount = fromLocationObject.zombieCount;
    }
    locations.forEach(location => {
      if(location.name === fromLocation && location.zombieCount > 0) {
        location.zombieCount -= 1;
      }
      if(location.name === toLocation && fromLocationZombieCount > 0) {
        location.zombieCount += 1;
        fromLocationZombieCount -= 1;
      }
    })
    this.setState({
      locations: locations
    })
  }

  render() {
    const { locations } = this.state;
    return (
      <div>
        <Jumbotron style={{background:'black', color:'red'}}fluid><h1>zombie-manager</h1></Jumbotron>
        <LocationCard locations={locations} quarantine={this.quarantine} move={this.move}></LocationCard>
        <MoveZombieForm move={this.move}></MoveZombieForm>
      </div>
    )
  }
}