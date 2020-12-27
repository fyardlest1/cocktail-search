import React from 'react'
import Cocktail from './Cocktail';

const CocktailList = ({cocktails, isLoading}) => {
  if (isLoading) {
    return (
      <h2 className='section-title' >loading...</h2>
    )
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title' >No cocktails matched your search criteria</h2>
    )
  }
  return (
    <section className='section' >
      <h1 className='section-title' >cocktais</h1>
      <div className="cocktails-center">
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item}  />
        })}
      </div>
    </section>
  )
}

export default CocktailList

