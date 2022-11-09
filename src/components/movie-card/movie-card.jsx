import React from 'react';
import PropTypes from 'prop-types';

import './movie-card.scss';
import { Card } from 'react-bootstrap';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title> {movie.Title} </Card.Title>
          <Card.Text> {movieçDescription} </Card.Text>

          <Button onClick={() => onMovieClick(movie)} variant="link">
            {""}
            Open
            </Button>
            </Card.Body>
      </Card>
    ); 
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
  }),
  Director: PropTypes.shape({
    Name: PropTypes.strings.isRequired,
    Bio: PropTypes.string.isRequired,
  }),

isRequired,
  onMovieClick: PropTypes.func.isRequired
};