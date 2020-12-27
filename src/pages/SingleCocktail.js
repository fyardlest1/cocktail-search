import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const SingleCocktail = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const getCocktail = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await response.json()
        if (data.drinks) {
          // drink destructuring
          const { strDrink: name, strDrinkThumb: image, strAlcoholic: info,
            strCategory: category, strInstructions: instructions, 
            strGlass: glass, strIngredient1, strIngredient2, 
            strIngredient3, strIngredient4, strIngredient5 } = data.drinks[0]
            // ingredient destructuring
            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
            const newCocktail = {name, image, category, instructions, glass, ingredients, info }
            setCocktail(newCocktail)

        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }

    getCocktail()
  }, [id])

  if (isLoading) {
    return <h2 className='section-title'>loading...</h2>
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>
  } else {
    const { name, image, category, instructions, glass, ingredients, info } = cocktail
    return (
      <section className='section cocktail-section' >
        <Link to='/' className='btn btn-primary'>back home</Link>
        <h2 className="section-title"> {name} </h2>
        <div className="drink">
          <img src={image} alt={name}/>
        </div>
        <div className="drink-info">
          <p> name: {name} </p>
          <p> category: {category} </p>
          <p> info: {info} </p>
          <p> glass: {glass} </p>
          <p> instructions: {instructions} </p>
          <p> ingredients: {ingredients.map((item, index) => {
            return item ? <span key={index}> {item} </span> : null
          })} </p>
        </div>
      </section>
    )
  }
  
  return (
    <div>
      <h1>single cocktail page: {id}</h1>
    </div>
  )
}

export default SingleCocktail
