import React from 'react'
import Card from './Card'
import imagen1 from '../assets/image1.jpg'
import imagen2 from '../assets/image2.jpg'
import imagen3 from '../assets/image3.jpg'

const cards = [
   {
      id: 1,
      title: 'Web 1',
      imageUrl: imagen1,
      text: 'this is my first web for my website ',
      url: 'https:www.facebook.com'
   },
   {
      id: 2,
      title: 'Web 2',
      imageUrl: imagen2,
      text: 'this is my second web for my website',
      url: 'https:www.youtube.com'
   },
   {
      id: 3,
      title: 'Web 3',
      imageUrl: imagen3,
      text: 'this is my thirst web for my website ',
      url: 'https:www.google.com'
   }
]


function Cards() {
   return (
      <div className="container d-flex justify-content-center align-items-center h-100">
         <div className="row">
            {
               cards.map(({title, id, imageUrl, text, url}) => (
                  <div className="col-md-4">
                     <Card title={title} imageUrl={imageUrl} text={text} url={url} />
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Cards
