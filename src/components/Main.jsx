import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./style.css"
// import img from 'https://w7.pngwing.com/pngs/551/108/png-transparent-arrow-illustration-arrow-icon-right-arrow-angle-web-design-internet-thumbnail.png'

const Main = () => {
    const[items,setItems]=  useState([])

    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
            console.log(res)
            setItems(res.data.meals)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const itemsList = items.map(({strMeal,strMealThumb,idMeal})=>{
        return <>
       
        <section className="card">
            <img src={strMealThumb} alt={idMeal} />
            <section className="content">
                <p>{strMeal} </p>
                <p>#{idMeal} </p>
            </section>
        </section>
        </>
    })

  return <div className="items-container">
    {itemsList}
    
  </div>
}

export default Main
