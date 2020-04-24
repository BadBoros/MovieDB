import React, {Component} from 'react';
import cinema from './cinema.png';
import MovieRow from './movieRow.js';
import $ from 'jquery';

class App extends Component {

    //Costruttore
    constructor(props) {
      super(props);
      this.state={}

      //Ricerca di Default
      this.performSearch("watchmen");

    }

    //Funzione di ricerca
    performSearch(searchTerm) {

      const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=3264703509634d9bdaba0a9f0b11c713&query=" + searchTerm;
      $.ajax({

        url: urlString,

        success: (searchResults) => {
          const results = searchResults.results;

          var movieRows = [];
          results.forEach((movie) => {

            movie.poster_src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path;
            const movieRow = <MovieRow key={movie.id} movie={movie}/>
            movieRows.push(movieRow);

          });

          this.setState({rows: movieRows})
        },

        error: (xhr, status, err) => {
          console.log("Failed to fetcing data");
        }

      });

    }

    //Funzione di Bind fra la barra di ricerca e la funzione associata
    searchChangeHandler(event) {
      const boundObject = this;
      const searchTerm = event.target.value;
      this.performSearch(searchTerm);
    }

    render() {
      return (
        <div className="App">

          <table className="titleBar">

            <tbody>
              <tr>

                <td>
                  <img width="50px" height="50px" src={cinema} />
                </td>

                <td width="8"/>

                <td>
                  <h3> MovieDB Search </h3>
                </td>

              </tr>
            </tbody>

          </table>


          <input onChange={this.searchChangeHandler.bind(this)} placeholder="Search for a movie..." className="searchbox">
          </input>

          {this.state.rows}

        </div>
    );
  }

}

export default App;
