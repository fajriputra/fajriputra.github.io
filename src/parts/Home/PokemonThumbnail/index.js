import "./index.scss";

export default function PokemonThumbnail({ data }) {
  const types = data.types.map((item) => item.type.name);

  return (
    <div className={`thumbnail__wrapper ${types[0]} `}>
      <figure className="thumbnail__wrapper--image">
        <img
          src={data.sprites.other.dream_world.front_default}
          alt="Pokemon"
          className="img-contain"
        />
      </figure>
      <div className="thumbnail__wrapper--detail">
        <h3>{data.name}</h3>
        <small>Type: {types.join(", ")}</small>
      </div>
    </div>
  );
}
