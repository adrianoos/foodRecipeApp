import './App.css';
import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import EmptyAnswer from './EmptyAnswer'

const App = () => {

  const APP_ID = 'e451a818'
  const APP_KEY = '8ce698c0d34fad3edc134c896ef01f29'
  
  const [recipes , setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

useEffect(() => {
getRecipes()
}, [query])

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json()
  setRecipes(data.hits)
};

const updateSearch = (e) =>{
setSearch(e.target.value)
};

const getSearch = (e) => {
e.preventDefault()
if (search !== ''){
setQuery(search)
setSearch('')
}
};

const mappedRecipes = recipes.map(recipe => (
  <Recipe 
  key={recipe.recipe.label}
  title={recipe.recipe.label}
  country={recipe.recipe.cuisineType}
  type={recipe.recipe.mealType}
  time={recipe.recipe.totalTime}
  calories={Math.floor(recipe.recipe.calories)}
  image={recipe.recipe.image}
  ingredients={recipe.recipe.ingredients}
  link={recipe.recipe.url}
  />
))

return (
<div classsName='App'>
  <div className='label1'>
    <h1 id='text1'>Search for food recipes:</h1>
  </div>
  <form className='search-form' onSubmit={getSearch}>
    <input className='search-bar' id='searchBar' type='text' value={search} onChange={updateSearch}>
    </input>
    <button className='search-button' type='submit'>
    Search
    </button>
  </form>
  <div className='recipes'>
{mappedRecipes.length ? mappedRecipes : <EmptyAnswer />}
</div>
</div>
);
};


export default App;

