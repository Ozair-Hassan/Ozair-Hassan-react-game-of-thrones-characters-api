import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'


const CharacterGrid = ({items, isLoading}) => {
  items = Array.from(items)
  return isLoading ? (
  <Spinner/>
  ) : (
  <section className='cards'>
    {items.map((item) => (
         <CharacterItem key={item.id} item={item} />
    ))}
  </section>
  
  )
}

export default CharacterGrid

 