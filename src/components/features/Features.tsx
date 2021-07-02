import React, { useEffect } from "react";
import styles from "./Features.module.scss";
import { Link } from "react-router-dom";
import { getMovies } from "../../redux/StarWarAction";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/Store";

const Features = () => {
  const dispatch = useDispatch();
  const starWars = useSelector((state: RootStore) => state.starWars);
  const { films, loading } = starWars;

  // const [films, setFilms] = useState<any>([]);
  // const getMovies = async () => {
  //   try {
  //     const res = await axios.get(`https://swapi.dev/api/films/`);
  //     const dataRes = res.data;
  //     console.log(dataRes);
  //     if (!res.status) {
  //       throw new Error(dataRes.statusText);
  //     } else {
  //       setFilms(dataRes.results);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <section className={styles.movie}>
      <div className={styles.movie__container}>
        {films &&
          films.map((film: any) => {
            const { episode_id, title, opening_crawl, release_date, url } =
              film;
            const newUrl = url.replace(/\D/g, "");
            return (
              <Link
                to={`/movie/${newUrl}`}
                key={episode_id}
                className={styles.movie__card}
              >
                <h2>{title}</h2>
                <p>{`${opening_crawl.substring(0, 250)}...`}</p>
                <h4>
                  Release Date: <span>{release_date}</span>
                </h4>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default Features;
