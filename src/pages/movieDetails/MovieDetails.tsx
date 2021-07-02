import styles from "./MovieDetail.module.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getMovieDetails } from "../../redux/StarWarAction";
import { RootStore } from "../../redux/Store";
import sampleImg from "../../images/sampleImg.jpg";

const MovieDetails = () => {
  const { id } = useParams<any>();
  const dispatch = useDispatch();
  const starwars = useSelector((state: RootStore) => state.starWars);
  const { movies, loading, characters } = starwars;

  // const [movies, setMovies] = useState<any>([]);
  // const [characters, setCharacters] = useState<any>({});

  // const getMovieDetail = async () => {
  //   try {
  //     const res = await axios.get(`https://swapi.dev/api/films/${id}`);
  //     const dataRes = res.data;
  //     const characterData = dataRes.characters;

  //     characterData.map(async (character: string) => {
  //       const response = await axios.get(character);
  //       console.log(response);
  //     });
  //     if (!res.status) {
  //       throw new Error(dataRes.statusText);
  //     } else {
  //       setMovies([...movies, dataRes]);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [id, dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className={styles.movieDetail}>
      <div className={styles.movieDetail__container}>
        <div className={styles.movieDetail__content}>
          {movies && (
            <div key={movies.episode_id}>
              <img
                src={sampleImg}
                alt="StarwarImg"
                className={styles.movieDetail__img}
              />
              <h3>{movies.title}</h3>
              <p>{movies.opening_crawl}</p>
              <h4>
                Directed By: <span>{movies.director}</span>
              </h4>
              <h4>
                Produced By: <span>{movies.producer}</span>
              </h4>
              <h4>
                Released Date: <span>{movies.release_date}</span>
              </h4>
            </div>
          )}
        </div>
        <div className={styles.movieDetail__character}>
          <h3>Chracters</h3>
          <div className={styles.movieDetail__character_list}>
            {characters &&
              characters.map((char) => {
                const { name, url } = char;
                const newUrl = url.replace(/\D/g, "");

                return (
                  <Link
                    to={`/character/${newUrl}`}
                    className={styles.movieDetail__character_name}
                    key={url}
                  >
                    {name}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
