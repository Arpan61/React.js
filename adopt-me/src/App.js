import React from 'react'
import { render } from 'react-dom'
import Pet from './pet'

const App = () => {
  // return React.createElement('div', { id: 'something-important' }, [
  //   React.createElement('h1', {}, 'Adopt Me!'),
  //   React.createElement(pet, {
  //     name: 'Gabbar',
  //     animal: 'Dog',
  //     breed: 'German Shephard',
  //   }),
  //   React.createElement(pet, {
  //     name: 'Doing',
  //     animal: 'cat',
  //     breed: 'mixed',
  //   }),
  //   React.createElement(pet, {
  //     name: 'Toing',
  //     animal: 'Pig',
  //     breed: 'mixed',
  //   }),
  // ])

  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <Pet name="gabbar" animal="Dog" breed="German Shephard" />
      <Pet name="Doing" animal="cat" breed="mixed" />
      <Pet name="Toing" animal="pig" breed="mixed" />
    </div>
  )
}

render(<App />, document.getElementById('root'))
