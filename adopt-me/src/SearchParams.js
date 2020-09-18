import React from 'react'

const SearchParams = () => {
  const location = 'Seattle, WA'

  return (
    <div classsName="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams