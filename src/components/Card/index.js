const Card = ({ pokeData, loading, infoPokemon }) => {

    // console.log(pokemon);
    return (
        <div>
            <div className="row card-row" >
                {
                    loading ? <h1>Loading...</h1> :
                        pokeData.map((item, index) => {
                            return (
                                <div className="col-md-3" key={index}>
                                    <div className="card poke-card" onClick={() => infoPokemon(item)}>
                                        {/* <p className="card-id">{item.id}</p> */}
                                        <img className="card-img-top card-img" src={item.sprites.front_default} alt="PokemonImage"></img>
                                        <div className="card-body">
                                            <h5 className="card-title poke-name">{item.name}</h5>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            )
                        })
                }

            </div>
        </div>
    )
}
export default Card;