import React from "react";
import { Link } from "react-router-dom";
import { StarwarFilms } from "../../redux/types";

import styles from "./Features.module.scss";

interface FeatureProps {
  films: StarwarFilms[];
  loading: boolean;
}

const Features: React.FC<FeatureProps> = ({ films, loading }) => {
  // const [films, setFilms] = useState<any>([]);
  // const getMovies = async () => {
  //   try {
  //     const res = await axios.get(`https://swapi.dev/api/films/`);
  //     const dataRes = res.data;
  //     if (!res.status) {
  //       throw new Error(dataRes.statusText);
  //     } else {
  //       setFilms(dataRes.results);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
            const newUrl = url.split("/")[5];
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
