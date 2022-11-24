import {
  ERROR,
  GET_FILMS,
  LOADING,
  StarwarsAction,
  StarwarFilms,
  MovieDetails,
  GET_MOVIE_DETAILS,
  GET_CHARACTERS,
  Characters,
  CharacterDetails,
  GET_CHARACTER_DETAILS,
  GET_CHARACTER_MOVIES,
  CharacterMovies,
} from "./types";

interface InitialState {
  loading: boolean;
  error: string;
  films: StarwarFilms[];
  movies: MovieDetails | null;
  characters: Characters[];
  characterDetails: CharacterDetails | null;
  characterMovies: CharacterMovies[];
}
const initialState: InitialState = {
  films: [],
  movies: null,
  characterDetails: null,
  characterMovies: [],
  characters: [],
  loading: false,
  error: "",
};

const StarWarReducer = (
  state = initialState,
  action: StarwarsAction
): InitialState => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.payload };
    case LOADING:
      return { ...state, loading: true };
    case GET_FILMS:
      return {
        ...state,
        films: action.payload,
        loading: false,
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    case GET_CHARACTER_DETAILS:
      return {
        ...state,
        characterDetails: action.payload,
        loading: false,
      };
    case GET_CHARACTER_MOVIES:
      return {
        ...state,
        characterMovies: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default StarWarReducer;
