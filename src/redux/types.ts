export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_FILMS = "GET_FILMS";
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTER_DETAILS = "GET_CHARACTER_DETAILS";
export const GET_CHARACTER_MOVIES = "GET_CHARACTER_MOVIES";

export interface StarwarFilms {
  title: string;
  opening_crawl: string;
  release_date: string;
  episode_id: number;
  url: string;
}

export interface MovieDetails {
  title: string;
  opening_crawl: string;
  release_date: string;
  episode_id: number;
  director: string;
  producer: string;
}

export interface Characters {
  name: string;
  url: string;
}

export interface CharacterMovies {
  title: string;
  url: string;
}

export interface CharacterDetails {
  name: string;
  homeworld: string;
  birth_year: string;
  gender: string;
  height: string;
  film: string[];
}

interface ErrorAction {
  type: typeof ERROR;
  payload: string;
}

interface LoadingAction {
  type: typeof LOADING;
}

interface GetFilmsAction {
  type: typeof GET_FILMS;
  payload: StarwarFilms[];
}

interface GetMovieDetail {
  type: typeof GET_MOVIE_DETAILS;
  payload: MovieDetails;
}

interface GetCharacters {
  type: typeof GET_CHARACTERS;
  payload: any[];
}

interface GetCharacterMovies {
  type: typeof GET_CHARACTER_MOVIES;
  payload: any[];
}

interface GetCharacterDetails {
  type: typeof GET_CHARACTER_DETAILS;
  payload: CharacterDetails;
}

export type StarwarsAction =
  | ErrorAction
  | LoadingAction
  | GetFilmsAction
  | GetMovieDetail
  | GetCharacters
  | GetCharacterMovies
  | GetCharacterDetails;
