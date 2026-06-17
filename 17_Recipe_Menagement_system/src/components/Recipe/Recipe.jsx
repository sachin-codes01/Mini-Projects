import './Recipe.css'
const Recipe = ({ selectMeal, setSelectMeal }) => {
  if (!selectMeal) return

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = selectMeal[`strIngredient${i}`]
    const measure = selectMeal[`strMeasure${i}`]
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`)
    }
  }

  return (
    <div className="recipe-detail">

      <button onClick={() => setSelectMeal(null)}>← Back</button>


      <h2>{selectMeal.strMeal}</h2>
      <img src={selectMeal.strMealThumb} alt={selectMeal.strMeal} />

      <p><b>Category:</b> {selectMeal.strCategory}</p>
      <p><b>Area:</b> {selectMeal.strArea}</p>

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p>{selectMeal.strInstructions}</p>

      {selectMeal.strYoutube && (
        <a href={selectMeal.strYoutube} target="_blank" rel="noreferrer">
          ▶ Watch on YouTube
        </a>
      )}
    </div>
  )
}

export default Recipe
