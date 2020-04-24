import React from 'react'

//Classe che definisce la struttura di visualizzazione dei film ricercati
class MovieRow extends React.Component {

  viewMovie() {
    const url="https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href=url;
  }

  render() {
    return(

    <table key={this.props.movie.id} className="filmContainer">
      <tbody>
        <tr>
          <td>
            <img width="100px" alt="poster" src={this.props.movie.poster_src}/>
          </td>
          <td>

            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>

            <input type="button" onClick={this.viewMovie.bind(this)} value="View" className="viewBotton"/>

          </td>
        </tr>
      </tbody>
    </table>

    );

  }

}

export default MovieRow
