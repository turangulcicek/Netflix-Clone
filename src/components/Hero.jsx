import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { baseImgUrl } from "../constants";
const Hero = () => {
  const state = useSelector((store) => store.movieReducer);

  const [randomMovie, setRandomMovie] = useState({});

  useEffect(() => {
    // console.log("Herodaki State", state.populerMovies[0]);
    const randomIndex = Math.floor(Math.random() * 15);
    const randomMovie = state.populerMovies[randomIndex];
    // console.log("1.useEffect", state.isLoading);
    setRandomMovie(randomMovie);
  }, []);

  useEffect(() => {
    //console.log("2.useEffec", state.isLoading);
    console.log("Herodaki State 2.", state?.populerMovies[0]);
    const randomIndex = Math.floor(Math.random() * 15);
    const randomMovie = state.populerMovies[randomIndex];
    setRandomMovie(randomMovie);
  }, [state.isLoading]);

  return (
    <div className="row p-4 ">
      {/*Yükleme Sürüyorsa Ekrana Loading BAs*/}
      {state.isLoading && <p>Yükleniyor...</p>}

      {/*Yükleme Bittiyse  */}

      {!state.isLoading && (
        <>
          <div className="col-md-6 mt-3 d-flex flex-column align-items-center gap-3">
            <h1 className="text-center">{randomMovie?.title}</h1>
            <p>{randomMovie?.overview}</p>
            <p className="text-warning">IMDB: {randomMovie?.vote_average}</p>

            <div className="d-flex gap-3">
              <button className="btn btn-danger">Film İzle</button>
              <button className="btn btn-info">Listeye Ekle</button>
            </div>
          </div>
          <div className="col-md-6 mt-3  d-flex align-items-center justify-content-center">
            <img
              className="img-fluid rounded"
              src={`${baseImgUrl}${randomMovie?.backdrop_path}`}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
