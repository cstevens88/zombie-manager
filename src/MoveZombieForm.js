import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const MoveZombieForm = props => {
    return (
        <Container>
            <Row md="auto">
                <form>
                    <input type="text" id="fromLocation" placeholder="Where from? (school, hospital, or warehouse)" size="41" required pattern="school|hospital|warehouse"></input>
                    <input type="text" id="toLocation" placeholder="Where to? (school, hospital, or warehouse)" size="38" required pattern="school|hospital|warehouse"></input>
                    <Button variant="dark" onClick={() => props.move(document.getElementById('fromLocation').value, document.getElementById('toLocation').value)}>Move a Zombie</Button>
                </form>
            </Row>
        </Container>
    )
}

export default MoveZombieForm;