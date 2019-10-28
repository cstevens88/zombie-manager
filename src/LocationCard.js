import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const LocationCard = props => {
    const locations = props.locations.map((location, index) => {
        return (
            <Card border="dark" key={index}>
                <Card.Header md="auto">{location.name}</Card.Header>
                <Card.Img src={location.name + ".png"}/>
                <Button variant="danger" value="Quarantine a zombie here" onClick={() => props.quarantine(index)}>Quarantine a zombie here</Button>
                <Button variant="warning">Zombie Count: {location.zombieCount}</Button>
            </Card>
        )
    })
    return (
        <CardDeck>{locations}</CardDeck>
    )
}

export default LocationCard;