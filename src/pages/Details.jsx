import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ movies }) => {
  const { id } = useParams();
  console.log(movies, id);
  return (
    <div>
      {movies.map((movie, index) => {
        if (movie.id === id * 1) {
          return (
            <div key={index}>
              <div className="movie_card" id="bright">
                <div className="info_section">
                  <div className="movie_header">
                    <img
                      className="locandina"
                      alt=""
                      src={require("../OIP.jpg")}
                      alt={movie.Title}
                    />
                    <h1 className="detailsH1">{movie.movie}</h1>
                    <h4 className="detailsH2">IMDb rating: {movie.rating}</h4>
                    <p className="type">Type : Action</p>
                    <br />
                    <span className="minutes">Duration: 117 min</span>
                    <p className="IMDbLink">IMDb url: {movie.imdb_url}</p>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="movie_desc">
                    <p className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
                <div className="blur_back bright_back"></div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Details;
