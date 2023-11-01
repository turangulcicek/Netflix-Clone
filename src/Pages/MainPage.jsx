import axios from "axios";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../redux/actionTypes";
import Hero from "../components/Hero";
import { getMovies, setLoading, getGenres } from "../redux/actions/actions";
import MovieList from "../components/MovieList";
import { options } from "../constants";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getMovies());
    dispatch(getGenres());
  }, []);
  // console.log(state.genres);

  return (
    <div>
      <Hero />

      {state?.genres?.map((genre, i) => (
        <MovieList key={i} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
