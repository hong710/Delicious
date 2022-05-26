import React, { useState, useEffect } from 'react'


const API_URL= 'https://api.spoonacular.com/';

function useFetch({query, title}) {

    const url = `${API_URL}${query}&apiKey=${process.env.REACT_APP_API_KEY}`;
    const[data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState(null);

    //Create fetch function
    const fetchData = async () =>{
        const response = await fetch(url);
        const data = await response.json();

        if(data.recipes){
            return data.recipes;
        }else{
            return data.results;
        }
             
    }    

    useEffect(() => {
        const check = localStorage.getItem(title);
        if (check && check!==null){
            setData(JSON.parse(check));
        }else{
        setIsLoading(true);
        fetchData()
        .then(data => {
            data&& localStorage.setItem(title, JSON.stringify(data));
            setData(data);
            
        })
        .catch(err => setError(err))
        .finally(()=>setIsLoading(false));
    }
    }, [query]);

    return {data, isLoading, error};
    
  
}

export default useFetch