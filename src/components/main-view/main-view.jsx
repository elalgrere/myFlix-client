

import React from 'react';
import axios from 'axios';
import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
//import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { RegistrationView } from '../registration-view/registration-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../movie-view/movie-view';
import { ProfileView } from '../profile-view/profile-view';
import { Col, Row} from 'react-bootstrap/Row';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { setMovies } from '../../actions/actions';

import { setMovies } from '../../actions/actions';

import MoviesList from '../movies-list/movies-list';
import './main-view.scss';
import { connected } from 'process';


export class MainView extends React.Component {

  constructor() {
    super();
     this.state = {
      user: null
     };
  }   

  
  componentDidMount(){
    axios.get('https://myflixmoviesapp.herokuapp.com/')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  /*When a movie is clicked, this function is invoked and updates the state of
  the `selectedMovie` *property to that movie*/
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

 getMovies(token) { 
  axios.get('https://myflixmoviesapp.herokuapp.com/'), {
    headers: { Authorization: `Bearer ${token}`}
  }
  .then(response => {

    this.props.setMovies(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
  //When a user successfully registers
  onRegistration(register) {
    this.setState({
      register,
    });
  }

  /* When a user successfully logs in, this function updates the `user`
  property in state to that *particular user*/
  onLoggedIn(user) {
    this.setState({
      user
    });
  }


  render() {

    if (!register) return (<RegistrationView onRegistration={(register) => this.onRegistration(register)} />);

    /* If there is no user, the LoginView is rendered. If there is a user
    logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return (<LoginView onLoggedIn={user => this.onLoggedIn(user)} />);

    // Before the movies have been loaded
    if (movies.length === 0) return (<div className="main-view" />);

    return (
      <div className="main-view">
        <Navbar bg="navColor" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">CinemaFlix</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Movies</Nav.Link>
              <Nav.Link href="#user">Profile</Nav.Link>
              <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Container>
            {selectedMovie
              ? (
                <Row className="justify-content-lg-center">
                  <Col lg={9} >
                    <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                  </Col>
                </Row>
              )
              : (
                <Row className="justify-content-lg-center">
                  {movies.map(movie => (
                    <Col lg={3} md={4} sm={6} >
                      <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                    </Col>
                  ))
                  }
                </Row>
              )
            }
          </Container>
        </div>

      </div>
    );
  //movies is extracted from this.props rather than from the this.state
    let { movies } = this.props;
    let { user } = this.state;

    return (
     
      <Router>
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
        
            return <MoviesList movies={movies}/>;
          }} />
          
          <Route path='/register' render={() => { if (user) return
          <Redirect to='/' />; return ( <Col> <RegistrationView />
          </Col>); }} />
          <Route path='/movies/:movieId' render={({ match, history}) => { 
            if (user) return <Col>
            <LoginView onLoggedIn={user => this.onLoggedIn (user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md ={8}> 
            <MoviesView movie={ movies.find(m => m._id === match.params.movieId)} 
            onBackClick={() => history.goBack()} />
            </Col>
           }} />

           <Route path='/directors/:name' render={({ match, history}) => { 
            if (user) return <Col>
            <LoginView onLoggedIn={user => this.onLoggedIn (user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
        
            return <Col md ={8}> 
            <DirectorView director={ movies.find(m => Director.Name === match.params.name).Director}
            onBackClick={() => history.goBack()} />
            </Col>
           }} />

            <Route path='/genre/:name' render={({ match, history}) => { 
            if (user) return <Col>
            <LoginView onLoggedIn={user => this.onLoggedIn (user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
        
            return <Col md ={8}> 
            <GenreView director={ movies.find(m => Genre.Name === match.params.name).Genre}
            onBackClick={() => history.goBack()} />
            </Col>
           }} />
         </Row>
      </Router>
          );
  }
}
let mapStateToProps = state => {
  return { movies: state.movies }
}
export default connected(mapStoreToProps, null)(MainView);


