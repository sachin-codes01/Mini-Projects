import React from 'react'
import './Recipe.css'

const Recipe = ({ recipe, setSelectedRecipe }) => {
    return (
        <div className="recipe-page">

            <button className="back-btn" onClick={() => setSelectedRecipe(null)}>⬅ Back</button>

            <div className="recipe-hero">
                <div className="recipe-hero-left">
                    <h3>{recipe.strMeal}</h3>
                    <p><b>Category:</b> {recipe.strCategory}</p>
                    <p><b>Area:</b> {recipe.strArea}</p>
                </div>
                <div className="recipe-hero-right">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>
            </div>

            <div className="recipe-instructions">
                <h4>Instructions</h4>
                <p>{recipe.strInstructions}</p>
            </div>

            <div className="recipe-ingredients">
                <h4>Ingredients</h4>
                <ul>
                    {Array.from({ length: 20 }, (_, i) => {
                        const ingredient = recipe[`strIngredient${i + 1}`]
                        const measure = recipe[`strMeasure${i + 1}`]
                        if (ingredient && ingredient.trim() !== "")
                            return <li key={i}>{ingredient} — {measure}</li>
                        return null
                    })}
                </ul>
            </div>

            <div className="recipe-footer">
                <a href={recipe.strYoutube} target="_blank" rel="noreferrer">▶ Watch Recipe</a>
            </div>
        </div>
    )
}

export default Recipe