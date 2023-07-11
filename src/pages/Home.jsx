import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Louis from '../components/louis'
import NewsLetter from '../components/Newsletter'
import Cards from '../components/Cards'
import Footer from '../components/Footer'


const Home = () => {
  useEffect(() => {
    
    const fetchingData = async () => {
      fetch('http://localhost:3002/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'text': "Hello"
        })
      })
      .then(response => response.json())
      .then(json => console.log(json))
    }
    fetchingData()
  }, [])
  return (
    <div>
        <div>
        <Navbar />
        <Hero />
        <Louis />
        <NewsLetter />
        <Cards />
        <Footer />
      </div>
    </div>
  )
}

export default Home