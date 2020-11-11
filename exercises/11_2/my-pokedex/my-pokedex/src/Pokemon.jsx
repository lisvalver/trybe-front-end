import React from 'react'
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props.pokemon;

    return(
      <div className="pokemon">
        <div className="pokeData">
          <h3 className="pokeName">Nº {id}</h3>
          <h3 className="pokeName">{name}</h3>
          <h4 className="pokeType">{type}</h4>
          <h4 className="pokeWeight">Average weight: {averageWeight.value} {averageWeight.measurementUnit}</h4>
          <a href={moreInfo}>More about</a>
        </div>
        <img className="pokeImage" src={image} alt={name}/>
      </div>
    )
  };
}

Pokemon.propTypes = {
  pokemons: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string
  }).isRequired,
}

export default Pokemon;