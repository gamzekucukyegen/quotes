"use client"
import React, { useEffect, useState } from 'react'

const App = () => {
    const [quotes,setQuotes]=useState([])
    const apiKey="cJ77CN2SsyJ3duc8rSX97Q==IoOyZN6jTXgwo5Lv"
    
   let getQuotes=async()=>{
            try{
            
            const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                },
            });
           if(!response.ok){
            throw new Error("Error")
        }
           const data=await response.json()
           setQuotes(data)
    }catch(e){
        console.log(e,"Error")
    }
   
}
useEffect(()=>{
    getQuotes()
},[])

    const newQuote=()=>getQuotes()
return (
<div className="container">
            <div className="content">
                <h1>QUOTES</h1>
                <ul>
                    {quotes.map((quote, index) => (
                        <div key={index} className="quote-item">
                            <li>{quote.quote}</li>
                            <span>{quote.author}</span>
                        </div>
                    ))}
                </ul>
                <div className="button-container">
                    <button className="new-quote-button" onClick={newQuote}>
                        New Quote
                    </button>
                </div>
            </div>
        </div>
    );
};
export default App