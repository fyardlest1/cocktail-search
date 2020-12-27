import React, { useState, useEffect } from 'react'
import CocktailList from './../components/CocktailList';
import SearchForm from './../components/SearchForm';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

  const getDrinks = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      const data = await response.json()
      const { drinks } = data
      if (drinks) {
        const newDrinks = drinks.map(item => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
          return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
        })
        
        setCocktails(newDrinks)
      }
      else {
        setCocktails([])
      }
    } catch (error) {
      console.log(error)
    }   
    setIsLoading(false) 
  }

  useEffect(() => {
    getDrinks()
  }, [searchTerm])

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList isLoading={isLoading} cocktails={cocktails} />
    </main>
  )
}

export default Home

