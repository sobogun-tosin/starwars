import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCharacterDetails } from "../../redux/actions/StarWarAction";
import { RootStore } from "../../redux/Store";
import "./CharacterDetails.scss";
import charImg from "../../images/characterImg.jpg";
import { Link } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams<any>();
  const dispatch = useDispatch();
  const character = useSelector(
    (state: RootStore) => state.starWars.characterDetails
  );

  const movies = useSelector(
    (state: RootStore) => state.starWars.characterMovies
  );

  const loading = useSelector((state: RootStore) => state.starWars.loading);

  useEffect(() => {
    dispatch(getCharacterDetails(id));
  }, [id]);

  console.log(loading);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="character-container">
      <div className="character-body">
        <div className="character-img-container">
          <img src={charImg} alt="Charcter-Img" className="character-img" />
        </div>
        <div className="character-content">
          <h3>Character Details</h3>
          {character && (
            <div className="character-details">
              <h4>
                Name: <span>{character.name}</span>
              </h4>
              <h4>
                D.O.B: <span>{character.birth_year}</span>
              </h4>
              <h4>
                Gender: <span>{character.gender}</span>
              </h4>
              <h4>
                Height: <span>{character.height}</span>
              </h4>
            </div>
          )}
          {movies && (
            <div className="character-details">
              <h4>Movies</h4>
              {movies.map((movie) => {
                const { title, url } = movie;
                const newUrl = url.replace(/\D/g, "");
                return (
                  <Link
                    to={`/movie/${newUrl}`}
                    className="character-movies"
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
