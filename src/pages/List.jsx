import React from 'react'
import "../assets/css/list.css"
import {Link} from 'react-router-dom'

const properties = [
    {
      id: 1,
      title: "Luxury Apartment",
      price: "$250,000",
      location: "New York, USA",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Beach House",
      price: "$500,000",
      location: "Miami, USA",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Modern Villa",
      price: "$750,000",
      location: "Los Angeles, USA",
      image: "https://via.placeholder.com/300",
    },
  ];

function List() {
  return (
    <div className="container">
        <nav className="navbar">
          <div className="logo">RealEstate</div>
          <Link to ="/Home">Home</Link>
          <Link to ="/List">List</Link>
          <Link to ="/Input">Input</Link>
        </nav>
    <div className="container">
      <h1>Real Estate Listings</h1>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h2>{property.title}</h2>
            <p className="price">{property.price}</p>
            <p className="location">{property.location}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default List
