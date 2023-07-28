import  { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Dragon ball'])

  const onAddCategory = (newCategory) => {
    // console.log(newCategory)
  setCategories( [ newCategory, ...categories ])
}

  return (
    <>
      {/* Titulo */}
        <h1>GiftExpertApp</h1>

      {/* Input */}
        <AddCategory 
          // setCategories={setCategories}
          onNewCategory={onAddCategory}
        />

        {/* Listado de gif*/}
       
        <ol>
          {categories.map(category => {
            return <li key={category}>{category}</li>
          })
          }
          {/* <li></li> */}
        </ol>
          {/* Gif Item*/}
    </>
  )
}
