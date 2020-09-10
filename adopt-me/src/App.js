import React from 'react'
import { render } from 'react-dom'
import pet from './pet'

const App = () => {
  return React.createElement('div', { id: 'something-important' }, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(pet, {
      name: 'Gabbar',
      animal: 'Dog',
      breed: 'German Shephard',
    }),
    React.createElement(pet, {
      name: 'Doing',
      animal: 'cat',
      breed: 'mixed',
    }),
    React.createElement(pet, {
      name: 'Toing',
      animal: 'Pig',
      breed: 'mixed',
    }),
  ])
}

render(React.createElement(App), document.getElementById('root'))
