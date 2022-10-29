import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import  MenuBar  from '../navbar/navbar';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { RegistrationView } from '../registration-view/-view';
import {DirectorView} from '../MoviesView/movie=view';
import {ProfileView} from '../ProfileView/ProfileView';
import {DirectorView} from '../ProducerView/producer-view';
import {UserUpdate} from '..ProfileView/user-update';


export class MainView extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: [],
      user: null
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
    this.setState({
      user: localStorage.getItem('user')
    });
    this.getMovies(accessToken);
   }
  }

     onLoggedIn(authData) {
     console.log(authData);
     this.setState({
     user: authData.user.Username
   });
}
  getMovies(token) {
    axios.get('https://myflixmoviesapp.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // Assign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
   
    render() {
      const { movies, user } = this.state;
  
      return (
       
  <Router>
    <Menu user={user} />
    <Container>
      <Row className="main-view justify-content-md-center">
        <Route exact path="/" render={( => {

           if (!user) return 
           <Col>
             <LoginView movies={movies} 
             onLoggedIn={user => this.onLoggedIn(user)} />
           </Col>
        
         if (movies.length === 0) return <div className="main-view" />;
           return movies.map(m => (
            <Col md={3} key={m._id}>
              <MovieCard movie={m} />
            </Col>
           ))
        }} />

   <Route path="/register" render={() => {
    if (user) return <Redirect to="/" />
    return <Col lg={8} md={8}>
     </Col>
   }} />
   <Route path="/movies/:id" render={({
    match, history }) => {
      return <Col md={8}>
        <MovieView movie={movies.find(m =>
        m._id === match.params.id)} onBackClick={() =>
        history.goBack()} />
        </Col>
 
   }} />
   

   <div className="main-view">
    <Route exact path="/" render={/* welcome */}/>
    <Route path="/movies/:movieId" render={({ match, history }) => {
  return <><Col md={8}>
    <MovieView movie={movies.find(m => m._id === match.params.movieId)}
      onBackClick={() => history.goBack()} />
  </Col><Route exact path="/genres/:name" render={/* genre view*/} /><Route path="/directors/:name" render={({ match, history }) => {
    if (movies.length === 0)
      return <div className="main-view" />;
    return <Col md={8}>
      <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
    </Col>;
  } } />
    <Route path={`/users/${user}`}
    render={match, history}) => {
      if (!user) return <Redirect to="/" />
      return <Col>
      <UserUpdate user={user}
      onBackClick={() => history.goBack()}/>
      </Col>
    }} />
  </Row>
</Container>
</Router>
      );
    }
  }