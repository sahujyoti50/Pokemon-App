import React from "react";
import Card from "../Card";
import Pokeinfo from "../Pokeinfo";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBox from "../Search";

const PokeOverview = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
    const [searchInput, setSearchInput] =useState('');
    const [disable, setDisable] = React.useState(true);
    const [showModal, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        
        setLoading(false)

        if (res.data.previous != null) {
            setDisable(false);
        } else {
            setDisable(true);
        }

    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }
    const infoPokemon = (poke) => {
        setPokeDex(poke);
        handleShow();
    }
    const onSearchClickHandler = () => {
        const filtredData = pokeData.filter((item) => {
            return searchInput === "" ? item : 
            (item.abilities.map((pokemon)=>{
              return pokemon.ability.name
            })).includes(searchInput.toLowerCase()) ||
             item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            (item.moves.length === +searchInput)
        })
        setPokeData(filtredData);
        setSearchInput('');
    }

    useEffect(() => {
        pokeFun();
    }, [url])
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand poke-nav" href="homePage">
                    <img src='poke-logo.jpeg' width="40" height="40" className="d-inline-block align-top" alt="" />&nbsp;
                    PokeMon App
                </a>
            </nav>
            <div className="container">
                <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} onSearchClickHandler={onSearchClickHandler} />
                <Card pokeData={pokeData} searchInput={searchInput} loading={loading} infoPokemon={infoPokemon} />
                <div className="btn-div">

                    <button type="button" disabled={disable} className="btn btn-func" onClick={() => {
                        setPokeData([])
                        setUrl(prevUrl)
                    }}>Previous</button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-func" onClick={() => {
                        setPokeData([])
                        setUrl(nextUrl)
                    }}>Next</button>
                </div>

                <Pokeinfo handleClose={handleClose} showModal={showModal} data={pokeDex} />

            </div>
        </>
    )
}
export default( PokeOverview);
