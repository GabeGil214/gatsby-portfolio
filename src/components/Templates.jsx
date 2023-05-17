import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function Templates(props){

  return (
      <section id="templates">
        <div className="container">
          <h1>WordPress Templates</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore quas, iusto itaque veritatis ab culpa eligendi eveniet eaque cupiditate.</p>
          <div className="row">
            <div className="template">
              <div className="theme-img">
                <StaticImage src="../images/restaurant-template.png" width="400" alt="Product Page Wordpress Theme" />
              </div>
              <h2>Product Theme</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore quas, iusto itaque veritatis ab culpa eligendi eveniet eaque cupiditate.</p>
            </div>
            <div className="template">
              <div className="theme-img">
                <StaticImage src="../images/product-template.png" width="400" alt="Restaurant Wordpress Theme" />
              </div>
              <h2>Restaurant Theme</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore quas, iusto itaque veritatis ab culpa eligendi eveniet eaque cupiditate.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Templates;