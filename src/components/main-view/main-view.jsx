import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


export class MainView extends React.Component {
  constructor() {
     super();
     this.state = {
      movies: [
        {
          _id: "633ac7af7fdb3585e31c4da0",
          Title: "Kill Bill'",
          Description: "A two-part American action thriller film released in 2003 and 2004 respectively, which was written and directed by Quentin Tarantino . Kill Bill , which was originally intended to have a single theatrical release, but was more than four hours long, was split into two volumes: Kill Bill: Volume 1 , released in late 2003, and Kill Bill: Volume 2, released in early 2004. The two films were well received by critics, with many praising their directing style and homage to film genres such as Hong Kong martial arts films, samurai films , spaghetti westerns , girls with guns and revenge",
          Genre: {
            Name: "Thriller",
            Description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience",
          },
          Director: {
            Name: "Quentin Tarantino",
            Bio: "In 1992 he began his career as an independent filmmaker with the premiere of Reservoir Dogs, considered by Empire magazine as the best independent film of all time. His popularity only grew with his second feature film, Pulp Fiction ( 1994), a black comedy anthology that became a huge success with critics and audiences, as well as a fundamental piece of popular culture. Entertainment Weekly designated it as the best film released between 1983 and 2008, and some critics of the British Film Institute placed it at number 127 of the best films of all time.23 In Jackie Brown (1997), Tarantino paid homage to the blaxploitation genre",
            Birth: "27/03/1963",
            Death: ""
          },
          ImagePath: "https://www.imdb.com/title/tt0266697/?ref_=vp_vi_tt_p",
          Actors: [ "Uma Thurman", "Lucy Liu", "Michael Madsen" ],
          Featured: true
        },
        {
      
          _id: "633ac7c97fdb3585e31c4da1",
          Title: "Babel",
          Description: "A 2006 film directed by Mexican filmmaker Alejandro González Iñárritu , with an original screenplay by writer Guillermo Arriaga , and starring Brad Pitt , Cate Blanchett , Gael García Bernal , Adriana Barraza , Rinko Kikuchi , and Kōji Yakusho .The film premiered at Cannes on May 23, 2006 3 and completes González Iñárritu Trilogy of Death, which began with Amores Perros and continued with 21 Gramsç. Babel won the Golden Globe for best dramatic film in 2007 and was nominated for seven Oscars , including best film and best director . It finally won the award in the category of best soundtrackç",
          Genre: {
            Name: "Drama",
            Description: "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre.  To these ends, a primary element in a drama is the occurrence of conflict—emotional, social, or otherwise—and its resolution in the course of the storyline",
          },
          Director: {
            Name: "Alejandro González Iñárritu",
            Bio: "Mexican filmmaker, screenwriter, producer, announcer and composer, and winner of four Oscar Awards. He is one of the most acclaimed and internationally recognized filmmakers. His debut film, Amores Perros, premiered at the Cannes Film Festival and won the Critics Week Grand Prix and was nominated for an Academy Award for Best Foreign Language Film in 2000.  González Iñárritu is the first Latin American filmmaker to become president of the jury of the 72nd Cannes Film Festival in 2019, the same year in which he received an honorary doctorate from the National Autonomous University of Mexico",
            Birth: "15/08/1963",
            Death: ""
          },
          ImagePath: "https://play.google.com/store/movies/details/Babel?id=u8h5wAthZ7A&hl=de_AT&gl=US",
          Actors: [ "Brad Pitt", "Cate Blanchett", "Gael García Bernal" ],
          Featured: true
        },
        {
          _id: "633ac7da7fdb3585e31c4da2",
          Title: "The Return of the Jedi",
          Description: "A space opera film released on December 25. May 1983 (six years after the first film was released), and directed by Richard Marquand. It was the third film released in the Star Wars saga and the sixth in terms of internal chronology of the saga. Of the original trilogy it was the most criticized film, since many people considered it the most childish for the inclusion of the Ewoks. Even so, it was acclaimed by most people, who considered it a great conclusion to the saga.",
          Genre: {
            Name: "Science fiction",
            Description: "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, spacecraft, robots, cyborgs, interstellar travel or other technologies. Science fiction films have often been used to focus on political or social issues, and to explore philosophical issues like the human condition",
          },
          Director: {
            Name: "George Lukas",
            Bio: "American filmmaker, writer, philanthropist and businessman. Lucas is best known for creating the Star Wars and Indiana Jones franchises and founding Lucasfilm, LucasArts, and Industrial Light & Magic. He served as president of Lucasfilm before selling it to The Walt Disney Company in 2012 ",
            Birth: "14/05/1944",
            Death: ""
          },
          ImagePath: "https://es.wikipedia.org/wiki/Star_Wars:_Episode_VI_-_Return_of_the_Jedi#/media/Archivo:Returnofthejedi-logo2.sv",
          Actors: [ "Carry Fisher", "Harrison Ford", "Sebastian Shaw" ],
          Featured: true
        }
      ]
     }
    }
    setSelectedMovie(newSelectedMovie) {
      this.setState({
        selectedMovie: newSelectedMovie
      });
    }
    
    render() {
      const { movies, selectedMovie } = this.state;
  
  
      if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
      return (
        <div className="main-view">
          {selectedMovie
            ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            : movies.map(movie => (
              <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
            ))
          }
        </div>
      );
    }
   }
