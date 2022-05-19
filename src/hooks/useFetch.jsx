import React, { useState, useEffect } from 'react'


const API_URL= 'https://api.spoonacular.com/';

function useFetch({query}) {

    const url = `${API_URL}${query}&apiKey=${process.env.REACT_APP_API_KEY}`;
    const[data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState(null);

    //Create fetch function
    const fetchData = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        return data.recipes;     
        
    }    

    useEffect(() => {

        setIsLoading(true);
        fetchData()
        .then(data => setData(data))
        .catch(err => setError(err))
        .finally(()=>setIsLoading(false))
    }, [query]);

    return {data, isLoading, error};
    
  
}

export default useFetch