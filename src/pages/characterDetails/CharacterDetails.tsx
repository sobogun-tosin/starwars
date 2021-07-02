import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCharacterDetails } from "../../redux/StarWarAction";
import { RootStore } from "../../redux/Store";
import styles from "./CharacterDetails.module.scss";
import charImg from "../../images/characterImg.jpg";
import { Link } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams<any>();
  const dispatch = useDispatch();
  const starwars = useSelector((state: RootStore) => state.starWars);
  const { characterDetails, loading, characterMovies } = starwars;

  useEffect(() => {
    dispatch(getCharacterDetails(id));
  }, [id, dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className={styles.character}>
      <div className={styles.character__container}>
        <div className={styles.character__img_container}>
          <img
            src={charImg}
            alt="Charcter-Img"
            className={styles.character__img}
          />
        </div>
        <div className={styles.character__content}>
          <h3>Character Details</h3>
          {characterDetails && (
            <div className={styles.character__details}>
              <h4>
                Name: <span>{characterDetails.name}</span>
              </h4>
              <h4>
                D.O.B: <span>{characterDetails.birth_year}</span>
              </h4>
              <h4>
                Gender: <span>{characterDetails.gender}</span>
              </h4>
              <h4>
                Height: <span>{characterDetails.height}</span>
              </h4>
            </div>
          )}
          {characterMovies && (
            <div className={styles.character__details}>
              <h4>Movies</h4>
              {characterMovies.map((movie) => {
                const { title, url } = movie;
                const newUrl = url.replace(/\D/g, "");
                return (
                  <Link
                    to={`/movie/${newUrl}`}
                    className={styles.character__movies}
                    key={url}
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
