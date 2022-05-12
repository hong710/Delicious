import React,{useState, useEffect} from 'react'

function Popular() {
    const [popular, setPopular] = useState();

    useEffect(()=>{
        getPopular();

    },[])

    const getPopular = async ()=>{
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        setPopular(data.recipes)
    };

    


  return (
    <ul>
        {
            popular?.map((recipe)=><li key={recipe.id}>{recipe.title}</li>)
        }

    </ul>
  )
}

export default Popular