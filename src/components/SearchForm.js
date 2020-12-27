import React from 'react'

const SearchForm = ({setSearchTerm}) => {

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  const searchValue = React.useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  return (
    <section className='section'>
      <h2 className='section-title'>search for cocktails</h2>
      <form onSubmit={handleSubmit} className="form search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name='name' id='name' onChange={searchCocktail}
          ref={searchValue} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm

