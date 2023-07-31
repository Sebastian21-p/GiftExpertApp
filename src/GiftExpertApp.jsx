import  { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One punch'])

  const onAddCategory = (newCategory) => {
    // Mejorar la validacion
    if (categories.includes(newCategory)) return;
    // console.log(newCategory)
  setCategories( [ newCategory, ...categories ])
}

  return (
    <>

        <h1>GiftExpertApp</h1>

      
        <AddCategory 
          // setCategories={setCategories}
          onNewCategory={onAddCategory}
        />
       
          {categories.map(category => (
            <GifGrid key={category} category={category}/>
          ))
          }
         
        
          
    </>
  )
}
