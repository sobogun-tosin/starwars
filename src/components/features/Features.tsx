import React, { useEffect } from "react";
import "./Features.scss";
import { Link } from "react-router-dom";
import { getMovies } from "../../redux/actions/StarWarAction";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/Store";

const Features = () => {
  // const [films, setFilms] = useState<any>([]);
  const dispatch = useDispatch();
  const films = useSelector((state: RootStore) => state.starWars.films);
  const loading = useSelector((state: RootStore) => state.starWars.loading);

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

  console.log(films);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <section>
      <div className="movie-container">
        {films &&
          films.map((film: any) => {
            const {
              episode_id,
              title,
              opening_crawl,
              release_date,
              url,
            } = film;
            const newUrl = url.replace(/\D/g, "");
            return (
              <Link
                to={`/movie/${newUrl}`}
                key={episode_id}
                className="movie-card"
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
