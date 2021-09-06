import React from 'react'
import './card.css'

function Card({title, imageUrl, text, id, url}) {
   return (
      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
         <div className="overflow">
            <img src={imageUrl} className="card-img-top" alt="" />
         </div>
         <div className="card-body text-light">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-secondary">{text}</p>
         </div>
         <a href={url} className="btn btn-outline-secondary border-0"
          rel="noreferrer">Go to site</a>
      </div>
   )
}

export default Card
