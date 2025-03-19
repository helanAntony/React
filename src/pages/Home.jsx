import React from 'react'
import "../assets/css/home.css"
import {Link} from 'react-router-dom'
import luxury from '../assets/image/luxury.jpg'
import modern from '../assets/image/modern.jpg'
import beach from '../assets/image/beach.jpg'


function Home() {
  return (
    <div className="container">
    <nav className="navbar">
      <div className="logo">RealEstate</div>
          <Link to ="/Home">Home</Link>
          <Link to ="/List">List</Link>
          <Link to ="/Input">Input</Link>    
    </nav>
    <header className="hero">
      <h1>Find Your Dream Home</h1>
      <p>Browse our latest property listings</p>
      <button className="btn">Explore Now</button>
    </header>

    <section id="properties" className="properties">
      <h2>Featured Properties</h2>
      <div className="property-list">
        <div className="property">
          <img src={luxury} width="250px" height="250px" alt="Property 1" />
          <h3>Luxury Villa</h3>
          <p>$500,000</p>
        </div>
        <div className="property">
          <img src={modern} width="250px" height="250px" alt="Property 2" />
          <h3>Modern Apartment</h3>
          <p>$350,000</p>
        </div>
        <div className="property">
          <img src={beach} width="250px" height="250px" alt="Property 3" />
          <h3>Beach House</h3>
          <p>$750,000</p>
        </div>
      </div>
    </section>

    <footer className="footer">
      <p>&copy; 2025 RealEstate. All Rights Reserved.</p>
    </footer>
  </div>
  )
}

export default Home
