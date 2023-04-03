import CharacterCards from './components/characterCards';
import characters from './datas/characters';
import './App.css'
import { useState } from 'react'

function App() {

    return (
    <div className="App">
      {characters.map((character) => 
      <CharacterCards key = {character.id} character = {character}/>
      )}
    </div>
  )
}

export default App
