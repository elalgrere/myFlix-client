import React, { useEffect, useState, } from 'react';
import { Container, Col, Row , Card} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-ootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './profile-view.scss';
import axios from 'axios';
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './updtae-user';

export function ProfileView({ movies }) {

const [ user, setUser ] =useState({ 
    Username: '',
    Email: '',
    FavoriteMovies: []
})
const favoriteMoviesList = movies.filter((movies) => {
    return user.FavoriteMovies.includes (movies._id);
});

const getUser = () => {
}
useEffect (() => {
    let isMounted = true;

})
const handSubmit = (e) => {
}
const removeFav = (id) => {
}
const handleUpdate = (e) => {
};

useEffect(() => {
}, [])

return (
    <Container>
        <Row>
         <Col xs={12} sm={4}>
           <Card> 
            <Card.Body>
             <UserInfo name={user.Username} email={user.Email}/>   
            </Card.Body>
           </Card> 
            
         </Col>
          <Col xs={12} sm={8}>
          <Card>
           <Card.Body>
           <UpdateUser user={user} setUser={setUser}/>
            </Card.Body> 
           </Card>
          </Col>         
        </Row>
        <FavoriteMovies favoriteMovieList={favoriteMovielist}/>
        <UserInfo name={ user.Username } email= { user.Email }/>  
        <UpdateUser handSubmit={handSubmit} handUpdate= { handUpdate} />
      </Container> 
      )
    } 
    
