import { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124"

  const ApiHandle = async () => {
    try {
      let res = await fetch(API)
      let data = await res.json()

      const detailedPokemonData = await data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url)
        let data = await res.json()
        return data;
      })
      const detailedResponse = await Promise.all(detailedPokemonData)
      // console.log(detailedResponse)
      setPokemon(detailedResponse)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    ApiHandle()
  }, [])

  //Search Pokemon
  const searchData = pokemon.filter((pokemonSearch) =>
    pokemonSearch.name.toLowerCase().includes(search.toLowerCase()))

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading....</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div className='loading'>
        <h1>{error.message}</h1>
      </div>
    )
  }

  return (
    <div className="box">

      <input type="text" placeholder='Search...' value={search}
        onChange={((e) => setSearch(e.target.value))} />

      <div className='container'>
        {searchData.map((data) => (
          <div key={data.id} className='cards'>

            <img src={data.sprites.other.dream_world.front_default} alt={data.name} />

            <h3 className='pokemon-name'>{data.name}</h3>

            <p className='pokemon-type'>{data.types.map((curType) => curType.type.name).join(", ")}</p>

            <div className='stats-grid'>

              <div className='stat-item'>
                <span className='stat-label'>Height</span>
                <span className='stat-value'>{data.height / 10} m</span>
              </div>

              <div className='stat-item'>
                <span className='stat-label'>Weight</span>
                <span className='stat-value'>{data.weight / 10} kg</span>
              </div>

              <div className='stat-item'>
                <span className='stat-label'>Base XP</span>
                <span className='stat-value'>{data.base_experience}</span>
              </div>

              <div className='stat-item'>
                <span className='stat-label'>Speed</span>
                <span className='stat-value'>{data.stats[5].base_stat}</span>
              </div>

              <div className='stat-item'>
                <span className='stat-label'>Stat Name</span>
                <span className='stat-value'>{data.stats[5].stat.name}</span>
              </div>

              <div className='stat-item'>
                <span className='stat-label'>Ability</span>
                <span className='stat-value'>
                  {data.abilities.map((abi) => abi.ability.name).slice(0, 1).join(", ")}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
