import axios from "axios";
import { Dispatch } from "redux";
import {
  ERROR,
  GET_CHARACTERS,
  GET_CHARACTER_DETAILS,
  GET_CHARACTER_MOVIES,
  GET_FILMS,
  GET_MOVIE_DETAILS,
  LOADING,
  StarwarsAction,
} from "./types";

export const getMovies = () => async (dispatch: Dispatch<StarwarsAction>) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get(`https://swapi.dev/api/films/`);
    const dataRes = res.data;
    console.log(dataRes);
    if (!res.status) {
      throw new Error(dataRes.statusText);
    } else {
      dispatch({
        type: GET_FILMS,
        payload: dataRes.results,
      });
    }
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

export const getMovieDetails =
  (id: number) => async (dispatch: Dispatch<StarwarsAction>) => {
    dispatch({ type: LOADING });
    try {
      const res = await axios.get(`https://swapi.dev/api/films/${id}`);
      const dataRes = res.data;
      const characterData = dataRes.characters;
      const data = await Promise.all(
        characterData.map(async (char: string) => {
          const newRes = await axios.get(char);
          return newRes.data;
        })
      );
      console.log(data);
      if (!res.status) {
        throw new Error(dataRes.statusText);
      } else {
        dispatch({
          type: GET_MOVIE_DETAILS,
          payload: dataRes,
        });
        dispatch({
          type: GET_CHARACTERS,
          payload: data,
        });
      }
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err,
      });
    }
  };

export const getCharacterDetails =
  (id: number) => async (dispatch: Dispatch<StarwarsAction>) => {
    dispatch({
      type: LOADING,
    });
    try {
      const res = await axios.get(`https://swapi.dev/api/people/${id}`);
      const dataRes = res.data;
      const films = dataRes.films;
      const movies = await Promise.all(
        films.map(async (film: any) => {
          const newFilm = await axios.get(film);
          return newFilm.data;
        })
      );
      console.log(movies);
      if (!res.status) {
        throw new Error(dataRes.statusText);
      } else {
        dispatch({
          type: GET_CHARACTER_DETAILS,
          payload: dataRes,
        });
        dispatch({
          type: GET_CHARACTER_MOVIES,
          payload: movies,
        });
      }
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err,
      });
    }
  };
