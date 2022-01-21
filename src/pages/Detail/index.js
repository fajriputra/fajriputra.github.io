import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSinglePokemon } from "stores/pokemon/actions";

import Spinner from "components/Spinner";
import Description from "parts/Detail/Description";
import PokemonImage from "parts/Detail/PokemonImage";
import Stats from "parts/Detail/Stats";

import "./index.scss";

export default function Detail() {
  const history = useHistory();
  const { name } = useParams();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [detailPokemon, setDetailPokemon] = useState({});

  useEffect(() => {
    setLoading(true);
    dispatch(getSinglePokemon(name))
      .then((res) => {
        setDetailPokemon(res.value.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || !detailPokemon.name) {
    return (
      <div className="loading__spinners">
        <Spinner />
      </div>
    );
  }

  return (
    <section className={`pokemon`}>
      <div className="container">
        <span className="back" onClick={() => history.goBack()}>
          Back
        </span>
        <h3 className="pokemon__name">
          {detailPokemon.name}{" "}
          <span className="pokemon__number">#{detailPokemon.id}</span>
        </h3>

        <div className="pokemon__profile">
          <div className="left__column">
            <PokemonImage data={detailPokemon} />
          </div>
          <div className="right__column">
            <Description data={detailPokemon} />
            <Stats data={detailPokemon} />
          </div>
        </div>
      </div>
    </section>
  );
}
