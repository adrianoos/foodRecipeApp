import React from 'react';
import style from './recipe.module.css'

// {} ten nawias jest destrukturyzacją wchodzących propsów
// {title} w h1 jest referencją do przekazanego propsa
// PEŁNE przekazanie danych z app JS:
// W APP.js odczyt ze state zwróconej data
// przypisanie propsa z odpowiednim tytułem w app.js do renderowanego obiektu
// w komponencie destrukt w ({title}) i przypisanie w obiekcie html

const Recipe = ({title, calories, image, ingredients, type, time, link, country}) => {
const infoLack = 'unknown'

return(
    <div className={style.recipe}>
        <img className={style.image} src={image} alt=''/>
        <h1>{title}</h1>
        <h2>Origin: {country ? country : infoLack}</h2>
        <h3>{type}</h3>
        <p>Calories: {calories}</p>
        <p>Preparation Time: {time ? time : infoLack} mins</p>
        <p>Ingredients:</p>
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <a id='link' href={link}>Full Recipe</a>
    </div>
);
};

export default Recipe;