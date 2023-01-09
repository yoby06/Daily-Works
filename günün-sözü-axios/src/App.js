import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'
const App = () => {
    const [quote,setQuote] = useState(' ')
    const getQuote = ( ) => {
      axios.get('https://api.quotable.io/random')
      .then(res => {
        console.log(res.data.content)
        setQuote(res.data.content)
      }).catch(err => {
        console.log(err)
      })
    }



  return (
    <div className='App'>
      <Button onClick={getQuote} size="lg"> Get Quote</Button>
      <div className='container'> 
      
      { quote && <p>{quote}</p>}
      </div>
      
    </div>
  )
}

export default App