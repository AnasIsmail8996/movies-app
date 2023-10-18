import React from 'react'
import { GlobalContext } from './Context';

const Search = () => {
  const {query, setQuery, isErorr}= GlobalContext()
 
  return (
    <>
    <section className='search-section'>
  <h2>Search Your Favourite<br/> Movie</h2>
 <form action='#' onSubmit={(e)=> e.preventDefault()}>
<div>
  <input type='text' placeholder='Search-Movie' value={query}
  onChange={(e) => setQuery(e.target.value)}/>
</div>
 </form>
 <div className='card-error'>
<p>{isErorr.show && isErorr.msg}</p>
 </div>
</section>

    
    </>
  )
}

export default Search;
