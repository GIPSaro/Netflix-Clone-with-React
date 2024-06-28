import { Component } from "react";
import { Spinner } from "react-bootstrap";

class MyMovieCard extends Component {
  state = {
    movies: [],
    error: false,
    errorMsg: "",
    isLoading: true,
  };

  fetchMovies = (query) => {
    fetch(`https://www.omdbapi.com/?apikey=bdbbe609&s=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("C'è stato un errore nella richiesta al server");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Risposta API:", data);
        if (data.Search) {
          this.setState({ isLoading: false, movies: data.Search });
        } else {
          this.setState({
            isLoading: false,
            movies: [],
            error: true,
            errorMsg: "Nessun film trovato",
          });
        }
      })
      .catch((error) =>
        this.setState({
          errorMsg: error.message,
          error: true,
          isLoading: false,
          movies: [],
        })
      );
  };

  componentDidMount() {
    this.fetchMovies(this.props.query);
  }

  render() {
    return (
      <>
        {this.state.isLoading && !this.state.error && (
          <div className="customSpinner">
            <Spinner animation="border" variant="danger" />
          </div>
        )}

        {Array.isArray(this.state.movies) &&
          this.state.movies.slice(0, 6).map((movie, i) => (
            <div className="col-xl-2 col-md-4 pb-2 col-sm-6 px-1" key={i}>
              <div className="ImgContainer">
                <img
                  className="img-fluid ImgCard"
                  src={movie.Poster}
                  alt={movie.title}
                />
              </div>
            </div>
          ))}

        {this.state.error && <div>{this.state.errorMsg}</div>}
      </>
    );
  }
}

export default MyMovieCard;
