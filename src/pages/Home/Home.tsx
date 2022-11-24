import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Features from "../../components/features";
import BannerImg from "../../images/banner.jpg";
import { getMovies } from "../../redux/StarWarAction";
import { RootStore } from "../../redux/Store";

import styles from "./Home.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  const starwars = useSelector((state: RootStore) => state.starWars);
  const { films, loading } = starwars;

  React.useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <section className={styles.Home}>
      <img src={BannerImg} alt="banner" className={styles.Home__img} />
      <div className={styles.Home__feature}>
        <Features films={films} loading={loading} />
      </div>
    </section>
  );
};

export default Home;
