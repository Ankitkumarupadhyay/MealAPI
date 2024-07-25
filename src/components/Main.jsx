import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./style.css"

const Main = () => {
    const[items,setItems]=  useState([])
    const[theme,setTheme]=  useState("light")
    const[mode,setMode]= useState("Dark Mode")
    const[modec,setModec]=useState("black")
    const[modet,setModet]=useState("white")
   

    const themeStyles={
        light:{
            backgroundColor: "white",
            color: "black",
        },
        dark:{
            backgroundColor: "black",
            color: "white",
        }
    }
    
   

    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
            console.log(res)
            setItems(res.data.meals)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        setMode((md)=> (md === 'Dark Mode' ? 'Light Mode' : 'Dark Mode') );
        setModec((md)=> (md === 'black' ? 'white' : 'black') );
        setModet((md)=> (md === 'white' ? 'black' : 'white') );
      };

    const itemsList = items.map(({strMeal,strMealThumb,idMeal})=>{
        return <>
       
        <section className="card" style={{...themeStyles[theme],transition:'all 1s ease'}}>
            <img src={strMealThumb} alt={idMeal} />
            <section className="content">
                <p>{strMeal} </p>
                <p>#{idMeal} </p>
            </section>
        </section>
        </>
    })



  return <div className="items-container" style={{...themeStyles[theme],transition:'all 1s ease'}} >
    {itemsList}  
    <button onClick={toggleTheme} style={{backgroundColor:modec,color:modet,boxShadow:`1px 2px 10px ${modec}`}} >{mode} </button>
  </div>
  
 
}

export default Main
